/* =========================================================
   CalisthenicsAmbition – entrainements.js (FULL SCRIPT)
   - Supabase v2 via window.supabaseClient (déjà créé dans <head>)
   - Smooth UI: cache sessions + scheduler + anti double-render chart
   ========================================================= */

/* ---------- CONFIG / HELPERS ---------- */

const supabaseClient = window.supabaseClient;
if (!supabaseClient?.auth || typeof supabaseClient.from !== "function") {
  console.error("Supabase client invalide", supabaseClient);
}

function normalizeExerciseName(str) {
  return String(str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

// 🌐 Table de traduction FR ↔ EN pour fusionner les données
const EXERCISE_TRANSLATIONS = {
  // FR → EN (canonical)
  "pompes": "push ups",
  "tractions": "pull ups",
  "dips": "dips",
  "muscle up": "muscle up",
  "handstand push up": "handstand push up",
  "planche lean": "planche lean",
  "tuck planche": "tuck planche",
  "straddle planche": "straddle planche",
  "full planche": "full planche",
  "handstand": "handstand",
  "one arm handstand": "one arm handstand",
  "human flag": "human flag",
  "front lever": "front lever",
  "squat": "squat",
  "pistol squat": "pistol squat",
  "gainage": "plank",
  "planche": "plank"
};

// Normalise le nom d'exercice vers sa forme canonique (anglais)
function getCanonicalExerciseName(name) {
  const normalized = normalizeExerciseName(name);
  return EXERCISE_TRANSLATIONS[normalized] || normalized;
}

async function searchExercises(query) {
  const q = normalizeExerciseName(query);
  if (!q) return [];

  const { data, error } = await supabaseClient
    .from("exercises")
    .select("id, name, mode")
    .ilike("name_normalized", `%${q}%`)
    .order("name");

  if (error) {
    console.error("[searchExercises]", error);
    return [];
  }

  // Dédupliquer par (nom + mode) pour éviter les doublons exacts
  const seen = new Set();
  return (data || []).filter(ex => {
    const key = `${ex.name}__${ex.mode}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}


function userIdToNumber1to1000(userId) {
  let hash = 0;
  for (let i = 0; i < userId.length; i++) {
    hash = (hash * 31 + userId.charCodeAt(i)) >>> 0;
  }
  return (hash % 1000) + 1; // 1 → 1000
}


function escapeHtml(str) {
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function uiInfo(msg) {
  const el = document.getElementById("community-info");
  if (el) el.textContent = msg || "";
}

function normalizeTodayISODate() {
  return new Date().toISOString().slice(0, 10);
}

async function getAuthedUserOrWarn(infoEl) {
  const { data, error } = await supabaseClient.auth.getUser();
  if (error) {
    console.error("[auth] getUser error", error);
    infoEl && (infoEl.textContent = "❌ Erreur auth (voir console).");
    return null;
  }
  if (!data?.user) {
    infoEl && (infoEl.textContent = "⚠️ Connecte-toi pour enregistrer et voir tes séances.");
    return null;
  }
  return data.user;
}

/* ---------- EXERCISES ---------- */

function getSelectedExerciseName() {
  const exerciseInput = document.getElementById("dashboard-exercise");
  if (!exerciseInput) return "";
  return (exerciseInput.value || "").trim();
}

/* =========================================================
   SMOOTH UI CORE: cache + scheduler + anti spam refresh
   ========================================================= */

let __uiBusy = false;
let __uiSeq = 0;

let __sessionsCache = [];
let __sessionsCacheUserId = null;
let __sessionsCacheAt = 0;

let __chartSeq = 0;
let __feedSeq = 0;
let __feedInFlight = null;

function debounce(fn, wait = 120) {
  let t = null;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

function isSessionsCacheFresh() {
  return (Date.now() - __sessionsCacheAt) < 15000; // 15s
}

async function fetchSessionsIntoCache({ force = false } = {}) {
  const { data: authData, error: authErr } = await supabaseClient.auth.getUser();
  if (authErr) {
    console.error("[cache] auth error", authErr);
    return __sessionsCache || [];
  }

  const user = authData?.user;
  if (!user) {
    __sessionsCache = [];
    __sessionsCacheUserId = null;
    __sessionsCacheAt = Date.now();
    return __sessionsCache;
  }

  if (!force && __sessionsCacheUserId === user.id && isSessionsCacheFresh()) {
    return __sessionsCache;
  }

  const { data, error } = await supabaseClient
    .from("workout_sessions")
    .select("id, session_date, payload, created_at")
    .eq("user_id", user.id)
    .order("session_date", { ascending: true });

  if (error) {
    console.error("[cache] fetch sessions error", error);
    return __sessionsCache || [];
  }

  __sessionsCache = (data || [])
    .map(r => ({ id: r.id, ...(r.payload || {}) }))
    .filter(s => s && s.date);

  __sessionsCacheUserId = user.id;
  __sessionsCacheAt = Date.now();
  return __sessionsCache;
}

function mergeExercises(exercises) {
  const map = new Map();

  exercises.forEach(ex => {
    const key = `${ex.name}__${ex.mode}__${ex.weight || 0}__${ex.assist || 0}`;

    if (!map.has(key)) {
      map.set(key, {
        ...ex,
        s1: "", s2: "", s3: "", s4: "",
        s5: "", s6: "", s7: "", s8: ""
      });
    }

    const target = map.get(key);

    const incoming = [ex.s1, ex.s2, ex.s3, ex.s4, ex.s5, ex.s6, ex.s7, ex.s8]
      .filter(v => v !== "" && v !== null && v !== undefined);

    const existing = [target.s1, target.s2, target.s3, target.s4,
                      target.s5, target.s6, target.s7, target.s8]
      .filter(v => v !== "" && v !== null && v !== undefined);

    const merged = [...existing, ...incoming].slice(0, 8);

    [
      target.s1, target.s2, target.s3, target.s4,
      target.s5, target.s6, target.s7, target.s8
    ] = [...merged, "", "", "", "", "", "", "", ""];
  });

  return Array.from(map.values());
}

function mergeSessionsByDayAndExercise(rows) {
  const map = new Map();

  rows.forEach(r => {
    const key = `${r.user_id || "self"}__${r.date || r.session_date}`;

    if (!map.has(key)) {
      map.set(key, {
        ...r,
        payload: {
          ...r.payload,
          exercises: []
        }
      });
    }

    const bucket = map.get(key);

    if (Array.isArray(r.payload?.exercises)) {
      bucket.payload.exercises.push(...r.payload.exercises);
    }
  });

  // 🔥 merge des exercices ici
  return Array.from(map.values()).map(s => ({
    ...s,
    payload: {
      ...s.payload,
      exercises: mergeExercises(s.payload.exercises)
    }
  }));
}


async function getStructuredSessions() {
  return await fetchSessionsIntoCache({ force: false });
}

function clearPrivateUI() {
  const hist = document.getElementById("sessions-history");
  if (hist) hist.innerHTML = "<p style='font-size:12px; color:#777;'>Connecte-toi pour voir tes séances.</p>";

  const info = document.getElementById("session-save-info");
  if (info) info.textContent = "";

  const input = document.getElementById("public-username");
  if (input) {
    input.disabled = true;
    input.value = "";
    input.placeholder = "Connexion requise";
    input.title = "Connexion requise";
  }

  const dashInfo = document.getElementById("dashboard-info");
  if (dashInfo) dashInfo.textContent = "Connecte-toi pour voir ton tableau de bord.";

  if (exerciseChart) {
    exerciseChart.destroy();
    exerciseChart = null;
  }

  __sessionsCache = [];
  __sessionsCacheUserId = null;
  __sessionsCacheAt = Date.now();
}


function updateAuthUI(user) {
  const emailInput = document.getElementById("auth-email");
  const passInput = document.getElementById("auth-pass");

  const signupBtn = document.querySelector('button[onclick="signup();"]');
  const loginBtn  = document.querySelector('button[onclick="login();"]');

  if (user) {
    // 🔒 LOCK
    if (emailInput) {
      emailInput.disabled = true;
      emailInput.value = user.email || "";
      emailInput.title = "Connecté";
    }

    if (passInput) {
      passInput.disabled = true;
      passInput.value = "••••••••";
      passInput.title = "Mot de passe masqué";
    }

    signupBtn && (signupBtn.disabled = true);
    loginBtn && (loginBtn.disabled = true);
  } else {
    // 🔓 UNLOCK
    if (emailInput) {
      emailInput.disabled = false;
      emailInput.value = "";
      emailInput.title = "";
    }

    if (passInput) {
      passInput.disabled = false;
      passInput.value = "";
      passInput.title = "";
    }

    signupBtn && (signupBtn.disabled = false);
    loginBtn && (loginBtn.disabled = false);
  }
}


const scheduleUIRefresh = (() => {
  const run = async ({ forceSessions = false, forceFeed = false } = {}) => {
    if (__uiBusy) return;
    __uiBusy = true;
    const my = ++__uiSeq;

    try {
      // feed (public)
      if (forceFeed) await loadPublicFeed({ force: true });
      else await loadPublicFeed();

      // user session
      const { data: sessData } = await supabaseClient.auth.getSession();
      const user = sessData?.session?.user || null;
      updateAuthUI(user);

      if (!user) {
        clearPrivateUI();
        return;
      }

      // username UI lock
      if (typeof initUsernameUI === "function") {
        await initUsernameUI();
        if (my !== __uiSeq) return;
      }

      // cache sessions once
      await fetchSessionsIntoCache({ force: forceSessions });
      if (my !== __uiSeq) return;

      // render private UI from cache only (no network)
      await renderStructuredSessionsHistory({ useCache: true });
      if (my !== __uiSeq) return;

      await renderExerciseChart();
    } finally {
      __uiBusy = false;
    }
  };

  return debounce(run, 120);
})();

/* =========================================================
   STRUCTURED LOG (table)
   ========================================================= */

function createExerciseRow(data = {}) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td class="ex-input-container">
      <input
        type="text"
        class="ex-name"
        placeholder="Tractions, Front Lever..."
        autocomplete="off"
        value="${data.name ?? ""}"
      />
    </td>

    <td>
      <input type="number" class="ex-weight" min="0" step="0.5" value="${data.weight ?? 0}">
    </td>

    <td>
      <input type="number" class="ex-assist" min="0" step="0.5" value="${data.assist ?? 0}">
    </td>

    <td><input type="number" class="ex-s1" min="0" step="1" value="${data.s1 ?? ""}"></td>
    <td><input type="number" class="ex-s2" min="0" step="1" value="${data.s2 ?? ""}"></td>
    <td><input type="number" class="ex-s3" min="0" step="1" value="${data.s3 ?? ""}"></td>
    <td><input type="number" class="ex-s4" min="0" step="1" value="${data.s4 ?? ""}"></td>
    <td><input type="number" class="ex-s5" min="0" step="1" value="${data.s5 ?? ""}"></td>
    <td><input type="number" class="ex-s6" min="0" step="1" value="${data.s6 ?? ""}"></td>
    <td><input type="number" class="ex-s7" min="0" step="1" value="${data.s7 ?? ""}"></td>
    <td><input type="number" class="ex-s8" min="0" step="1" value="${data.s8 ?? ""}"></td>

    <td>
      <input
        type="text"
        class="ex-ressenti"
        placeholder="Ressenti global"
        value="${data.ressenti ?? ""}"
      >
    </td>

    <td>
      <button class="remove-row-btn" type="button">×</button>
    </td>
  `;

  const input = tr.querySelector(".ex-name");
  const removeBtn = tr.querySelector(".remove-row-btn");
  const dropdown = document.getElementById("global-exercise-suggestions");
  
  function positionDropdown() {
    if (dropdown.style.display !== "block") return;
    const rect = input.getBoundingClientRect();
    const isMobile = window.innerWidth <= 768;
    
    dropdown.style.position = "fixed";
    dropdown.style.zIndex = "99999";
    
    if (isMobile) {
      dropdown.style.left = "10px";
      dropdown.style.right = "10px";
      dropdown.style.width = "auto";
    } else {
      dropdown.style.left = `${rect.left}px`;
      dropdown.style.width = `${rect.width}px`;
      dropdown.style.right = "auto";
    }
    
    dropdown.style.top = `${rect.bottom + 4}px`;
  }

  // Repositionner lors de resize
  const resizeListener = () => positionDropdown();
  
  // Repositionner lors du scroll
  const scrollListener = () => positionDropdown();
  
  window.addEventListener("resize", resizeListener);
  window.addEventListener("orientationchange", resizeListener);
  window.addEventListener("scroll", scrollListener, true);

  // Préserve le mode si déjà connu (édition / historique)
  if (data.mode) {
    input.dataset.mode = data.mode;
  }

  let lastQuery = "";

  /* -------------------------
     AUTOCOMPLÉTION (avec dropdown global)
  -------------------------- */

  input.addEventListener("input", async () => {
    const value = input.value.trim();

    input.dataset.mode = "";
    dropdown.innerHTML = "";
    dropdown.style.display = "none";

    if (!value || value === lastQuery) return;
    lastQuery = value;

    const results = await searchExercises(value);
    if (!results.length) return;

    dropdown.style.display = "block";
    positionDropdown();

    results.forEach(ex => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${ex.name}</span>
        <span style="opacity:.6;font-size:12px;margin-left:6px;">
          ${ex.mode}
        </span>
      `;

      li.addEventListener("click", () => {
        input.value = ex.name;
        input.dataset.mode = ex.mode;
        dropdown.style.display = "none";
      });

      dropdown.appendChild(li);
    });
  });

  /* -------------------------
     FERMETURE DROPDOWN
  -------------------------- */

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && e.target !== input) {
      dropdown.style.display = "none";
    }
  });

  /* -------------------------
     SUPPRESSION DE LIGNE
  -------------------------- */

  removeBtn.addEventListener("click", () => {
    tr.remove();
  });

  return tr;
}



function addExerciseRow(prefillData) {
  const tbody = document.getElementById("session-rows");
  if (!tbody) return;
  const newRow = createExerciseRow(prefillData);
  tbody.appendChild(newRow);
  // retire le focus actif (évite la barre/bulle "écrire quelque chose")
  setTimeout(() => {
    try { document.activeElement && document.activeElement.blur(); } catch (e) {}
  }, 0);
}

function removeExerciseRow(btn) {
  const tr = btn.closest("tr");
  if (tr) tr.remove();
}

async function saveStructuredSession() {
  const dateInput = document.getElementById("session-date");
  const durationInput = document.getElementById("session-duration");
  const rows = document.querySelectorAll("#session-rows tr");
  const info = document.getElementById("session-save-info");
  const user = await getAuthedUserOrWarn(info);
  if (!user) return;

  if (!dateInput.value) dateInput.value = normalizeTodayISODate();

  const session = {
    date: dateInput.value,
    duration: durationInput.value || "",
    exercises: []
  };

  rows.forEach(row => {
const name = row.querySelector(".ex-name")?.value.trim() || "";

let mode = row.querySelector(".ex-name")?.dataset?.mode;

if (!mode) {
  // fallback si exercice inconnu / custom → reps par défaut
  mode = "reps";
}


    const weight = row.querySelector(".ex-weight")?.value || "0";
    const assist = row.querySelector(".ex-assist")?.value || "0";

    const s1 = row.querySelector(".ex-s1")?.value || "";
    const s2 = row.querySelector(".ex-s2")?.value || "";
    const s3 = row.querySelector(".ex-s3")?.value || "";
    const s4 = row.querySelector(".ex-s4")?.value || "";
    const s5 = row.querySelector(".ex-s5")?.value || "";
    const s6 = row.querySelector(".ex-s6")?.value || "";
    const s7 = row.querySelector(".ex-s7")?.value || "";
    const s8 = row.querySelector(".ex-s8")?.value || "";
    const ressenti = (row.querySelector(".ex-ressenti")?.value || "").trim();

    if (name || s1 || s2 || s3 || s4 || s5 || s6 || s7 || s8 || ressenti || weight !== "0") {
      session.exercises.push({
  name,
  mode,
  weight,
  assist,
  s1, s2, s3, s4, s5, s6, s7, s8,
  ressenti
});

    }
  });
  // ✅ PATCH: récupérer le pseudo depuis user_profiles (source de vérité)
  let publicUsername = "";

  try {
    const { data: profile, error: profErr } = await supabaseClient
      .from("user_profiles")
      .select("username")
      .eq("user_id", user.id)
      .maybeSingle();

    if (profErr) console.warn("[saveStructuredSession] profile fetch error", profErr);
    publicUsername = (profile?.username || "").trim();
  } catch (e) {
    console.warn("[saveStructuredSession] profile fetch crash", e);
  }

  // Fallback: si vraiment aucun pseudo, mets un libellé neutre (PAS l'email)
  const userNumber = userIdToNumber1to1000(user.id);

  const safeDisplayUsername =
    publicUsername ||
    (user.user_metadata?.username || user.user_metadata?.name || "").toString().trim() ||
    `Utilisateur${userNumber}`;


  const row = {
    user_id: user.id,
    username: safeDisplayUsername,
    session_date: session.date,
    payload: session
  };


  info && (info.textContent = "⏳ Enregistrement Supabase...");

  const { error } = await supabaseClient.from("workout_sessions").insert([row]);
  if (error) {
    console.error("[save] supabase insert error", error);
    info && (info.textContent = "❌ Erreur Supabase (voir console).");
    return;
  }

  const d = new Date(session.date);
  const formatted = isNaN(d.getTime()) ? session.date : d.toLocaleDateString();
  info && (info.textContent = `✅ Séance enregistrée pour le ${formatted} (Supabase).`);

  // ✅ Smooth: one scheduled refresh
  scheduleUIRefresh({ forceSessions: true, forceFeed: true });
}

/* history render from cache (smooth) */
async function renderStructuredSessionsHistory({ useCache = false } = {}) {
  const container = document.getElementById("sessions-history");
  if (!container) return;

  const { data: sessData } = await supabaseClient.auth.getSession();
  const user = sessData?.session?.user || null;

  if (!user) {
    container.innerHTML =
      "<p style='font-size:12px; color:#777;'>Connecte-toi pour voir tes séances.</p>";
    return;
  }

  const rawSessions = useCache
    ? (__sessionsCache || [])
    : await fetchSessionsIntoCache({ force: true });

  if (!rawSessions.length) {
    container.innerHTML =
      "<p style='font-size:12px; color:#777;'>Aucune séance enregistrée pour l’instant.</p>";
    return;
  }

  // 1) Grouper par DATE
  const byDate = new Map();
  rawSessions.forEach(s => {
    if (!s.date) return;
    if (!byDate.has(s.date)) byDate.set(s.date, []);
    byDate.get(s.date).push(s);
  });

  let html = "";

  // 2) Une carte par JOUR
  Array.from(byDate.entries())
    .sort((a, b) => new Date(b[0]) - new Date(a[0]))
    .forEach(([date, daySessions]) => {

      // 3) Merge par (name + weight)
      const exoMap = new Map();

      daySessions.forEach(s => {
        (s.exercises || []).forEach(ex => {
          const weight = Number(ex.weight || 0);
          const assist = Number(ex.assist || 0);
          // Utiliser le nom canonique pour grouper FR/EN ensemble
          const canonicalName = getCanonicalExerciseName(ex.name);
          const key = `${canonicalName}__${weight}__${assist}`;
          if (!exoMap.has(key)) {
            exoMap.set(key, {
              name: ex.name, // Conserver le nom original pour l'affichage
              mode: ex.mode,
              weight,
              assist,
              values: [],
              ressenti: []
            });
          }

          const entry = exoMap.get(key);

          const nums = [ex.s1, ex.s2, ex.s3, ex.s4, ex.s5, ex.s6, ex.s7, ex.s8]
            .map(v => Number(v))
            .filter(v => Number.isFinite(v) && v > 0);

          entry.values.push(...nums);

          if (ex.ressenti) entry.ressenti.push(ex.ressenti);
        });
      });

      const d = new Date(date);
      const dateStr = isNaN(d.getTime()) ? date : d.toLocaleDateString();

      html += `
        <div class="session-card">
          <div class="session-card-header">
            <span class="label">Séance du ${escapeHtml(dateStr)}</span>
            <span>Durée : – min</span>
          </div>

          <ul class="session-card-exos">
            ${Array.from(exoMap.values()).map(ex => {
              const unit = ex.mode === "hold" ? "s" : "reps";
              const ressenti = ex.ressenti.length
                ? ` – ${escapeHtml(ex.ressenti[ex.ressenti.length - 1])}`
                : "";
              const weightLabel =
              ex.weight > 0 ? ` (+${ex.weight}kg)` : "";

              const assistLabel =
              ex.assist > 0 ? ` (-${ex.assist}kg)` : "";

              // Afficher les valeurs avec boutons, dernier bouton après l'unité
              const valuesWithButtons = ex.values.map((val, idx) => {
                const isLast = idx === ex.values.length - 1;
                if (isLast) {
                  // Dernier: valeur + unité + bouton
                  return `
                    <span style="display:inline-flex;align-items:center;gap:3px;">
                      ${escapeHtml(String(val))} ${unit}
                      <button 
                        class="remove-set-btn" 
                        type="button"
                        onclick="removeSetFromHistory('${date}', '${escapeHtml(ex.name)}', ${ex.weight}, ${ex.assist}, ${idx})"
                        title="Supprimer cette série"
                        style="
                          background:#ff4444;
                          color:white;
                          border:none;
                          border-radius:50%;
                          width:14px;
                          height:14px;
                          font-size:10px;
                          line-height:1;
                          cursor:pointer;
                          padding:0;
                          display:inline-flex;
                          align-items:center;
                          justify-content:center;
                        "
                      >−</button>
                    </span>
                  `;
                } else {
                  // Autres: valeur + bouton
                  return `
                    <span style="display:inline-flex;align-items:center;gap:3px;">
                      ${escapeHtml(String(val))}
                      <button 
                        class="remove-set-btn" 
                        type="button"
                        onclick="removeSetFromHistory('${date}', '${escapeHtml(ex.name)}', ${ex.weight}, ${ex.assist}, ${idx})"
                        title="Supprimer cette série"
                        style="
                          background:#ff4444;
                          color:white;
                          border:none;
                          border-radius:50%;
                          width:14px;
                          height:14px;
                          font-size:10px;
                          line-height:1;
                          cursor:pointer;
                          padding:0;
                          display:inline-flex;
                          align-items:center;
                          justify-content:center;
                        "
                      >−</button>
                    </span>
                  `;
                }
              }).join(" / ");

              const seriesHtml = valuesWithButtons;

              return `
                <li>
                  ${escapeHtml(ex.name)}${weightLabel}${assistLabel}
                  ${seriesHtml ? ` – ${seriesHtml}` : ""}
                  ${ressenti}
                </li>
              `;
            }).join("")}
          </ul>

          <button
            class="delete-session-btn"
            type="button"
            onclick="deleteSessionByDate('${date}')"
          >
            Supprimer la séance du jour
          </button>
        </div>
      `;
    });

  container.innerHTML = html;
}



async function deleteSessionByDate(date) {
  const info = document.getElementById("session-save-info");
  const user = await getAuthedUserOrWarn(info);
  if (!user) return;
  // FACULTATIF pour prevenir les suppressions par inadvertance
  const ok = confirm(`Supprimer TOUTES les séances du ${date} ?`);
  if (!ok) return;

  const { error } = await supabaseClient
    .from("workout_sessions")
    .delete()
    .eq("user_id", user.id)
    .eq("session_date", date);

  if (error) {
    console.error(error);
    info.textContent = "❌ Erreur suppression";
    return;
  }

  info.textContent = "✅ Séance du jour supprimée";
  scheduleUIRefresh({ forceSessions: true, forceFeed: true });
}

async function removeSetFromHistory(date, exerciseName, weight, assist, setIndex) {
  const info = document.getElementById("session-save-info");
  const user = await getAuthedUserOrWarn(info);
  if (!user) return;

  info && (info.textContent = "⏳ Suppression en cours...");

  // 1) Récupérer toutes les sessions de ce jour
  const { data: sessions, error: fetchError } = await supabaseClient
    .from("workout_sessions")
    .select("*")
    .eq("user_id", user.id)
    .eq("session_date", date);

  if (fetchError || !sessions?.length) {
    console.error(fetchError);
    info && (info.textContent = "❌ Erreur récupération");
    return;
  }

  // 2) Parcourir et modifier
  let removed = false;

  for (const session of sessions) {
    const exercises = session.payload?.exercises || [];
    
    for (const ex of exercises) {
      if (ex.name !== exerciseName) continue;
      if (Number(ex.weight || 0) !== Number(weight)) continue;
      if (Number(ex.assist || 0) !== Number(assist)) continue;

      // Collecter toutes les séries
      const allSets = [ex.s1, ex.s2, ex.s3, ex.s4, ex.s5, ex.s6, ex.s7, ex.s8]
        .map(v => v !== "" && v !== null && v !== undefined ? v : null);

      // Trouver les valeurs non vides
      const nonEmptyIndices = [];
      allSets.forEach((val, idx) => {
        if (val !== null) nonEmptyIndices.push(idx);
      });

      // Si l'index à supprimer existe
      if (setIndex < nonEmptyIndices.length) {
        const realIndex = nonEmptyIndices[setIndex];
        allSets[realIndex] = null;

        // Compacter: déplacer les valeurs restantes vers le début
        const compacted = allSets.filter(v => v !== null);
        
        // Si plus aucune série, supprimer l'exercice complètement
        if (compacted.length === 0) {
          const exIndex = exercises.indexOf(ex);
          if (exIndex > -1) {
            exercises.splice(exIndex, 1);
          }
        } else {
          // Sinon, mettre à jour les séries
          [ex.s1, ex.s2, ex.s3, ex.s4, ex.s5, ex.s6, ex.s7, ex.s8] = 
            [...compacted, "", "", "", "", "", "", "", ""].slice(0, 8);
        }

        removed = true;
        break;
      }
    }

    if (removed) {
      // 3) Sauvegarder la session modifiée
      const { error: updateError } = await supabaseClient
        .from("workout_sessions")
        .update({ payload: session.payload })
        .eq("id", session.id);

      if (updateError) {
        console.error(updateError);
        info && (info.textContent = "❌ Erreur mise à jour");
        return;
      }

      info && (info.textContent = "✅ Série supprimée");
      delete window.__sessionsCache;
      scheduleUIRefresh({ forceSessions: true, forceFeed: true });
      return;
    }
  }

  info && (info.textContent = "⚠️ Série non trouvée");
}

/* =========================================================
   DASHBOARD (chart) – smooth
   ========================================================= */

let exerciseChart = null;

function updateMetricOptions() {
  const exerciseInput = document.getElementById("dashboard-exercise");
  const metricSelect = document.getElementById("dashboard-metric");
  if (!exerciseInput || !metricSelect) return;

  metricSelect.innerHTML = "";

  let options = [];

  // Utilise le dataset pour déterminer le type d'exercice
  if (exerciseInput.dataset.isHold === "true") {
    options = [
      { value: "avg_hold", label: "Moyenne des holds" },
      { value: "max_hold", label: "Max des holds" },
      { value: "count_hold", label: "Nombre de holds" },
      { value: "sum_hold", label: "Somme des holds" }
    ];
  } else {
    options = [
      { value: "avg_reps", label: "Moyenne des reps" },
      { value: "max_rep", label: "Max des reps" },
      { value: "count_sets", label: "Nombre de séries" },
      { value: "sum_reps", label: "Somme des reps" }
    ];
  }

  options.forEach(opt => {
    const o = document.createElement("option");
    o.value = opt.value;
    o.textContent = opt.label;
    metricSelect.appendChild(o);
  });
}
async function buildChartData(exerciseName, metricKey) {
  const sessions = await getStructuredSessions();

  // 1) Grouper par DATE
  const byDate = new Map();

  sessions.forEach(s => {
    if (!s.date) return;
    if (!byDate.has(s.date)) byDate.set(s.date, []);
    byDate.get(s.date).push(s);
  });

  // 2) Collecter toutes les variantes (weight + assist) pour cet exercice
  const variantMap = new Map(); // clé: "weight__assist", valeur: { weight, assist, dateData: Map }

  // Normaliser le nom d'exercice recherché
  const canonicalExerciseName = getCanonicalExerciseName(exerciseName);

  Array.from(byDate.entries()).forEach(([date, daySessions]) => {
    daySessions.forEach(s => {
      const exercises = s.exercises || [];
      // Comparer avec le nom canonique
      const matching = exercises.filter(ex => getCanonicalExerciseName(ex.name) === canonicalExerciseName);

      matching.forEach(ex => {
        const weight = Number(ex.weight || 0);
        const assist = Number(ex.assist || 0);
        const key = `${weight}__${assist}`;

        if (!variantMap.has(key)) {
          variantMap.set(key, {
            weight,
            assist,
            dateData: new Map()
          });
        }

        const variant = variantMap.get(key);

        if (!variant.dateData.has(date)) {
          variant.dateData.set(date, []);
        }

        const nums = [ex.s1, ex.s2, ex.s3, ex.s4, ex.s5, ex.s6, ex.s7, ex.s8]
          .map(v => Number(v))
          .filter(v => Number.isFinite(v) && v > 0);

        variant.dateData.get(date).push(...nums);
      });
    });
  });

  // 2.5) Détecter le mode de l'exercice depuis les sessions
  let exerciseMode = "reps"; // par défaut
  Array.from(variantMap.values()).some(variant => {
    // Chercher le mode dans les sessions
    sessions.some(s => {
      const ex = (s.exercises || []).find(e => e.name === exerciseName);
      if (ex?.mode) {
        exerciseMode = ex.mode;
        return true;
      }
      return false;
    });
    return exerciseMode !== "reps";
  });

  // 3) Créer les labels (dates uniques) ET identifier les dates avec données
  const allDates = Array.from(byDate.keys()).sort((a, b) => new Date(a) - new Date(b));
  
  // Trouver les dates qui ont au moins une variante avec données
  const datesWithData = new Set();
  Array.from(variantMap.values()).forEach(variant => {
    variant.dateData.forEach((values, date) => {
      if (values.length > 0) {
        datesWithData.add(date);
      }
    });
  });

  // Filtrer les dates pour ne garder que celles avec données
  const filteredDates = allDates.filter(date => datesWithData.has(date));
  const labels = filteredDates.map(date => {
    const d = new Date(date);
    return isNaN(d.getTime()) ? date : d.toLocaleDateString();
  });

  // 4) Créer les datasets, un par variante
  const datasets = [];
  const colors = [
    "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF",
    "#FF9F40", "#FF6384", "#C9CBCF", "#4BC0C0", "#FF6384"
  ];

  let colorIdx = 0;
  Array.from(variantMap.values()).forEach(variant => {
    const data = filteredDates.map(date => {
      const values = variant.dateData.get(date) || [];
      if (!values.length) return null;

      let pointValue = 0;

      if (exerciseMode === "hold") {
        const sum = values.reduce((a, b) => a + b, 0);
        const avg = sum / values.length;
        const max = Math.max(...values);
        const count = values.length;

        if (metricKey === "avg_hold") pointValue = avg;
        else if (metricKey === "max_hold") pointValue = max;
        else if (metricKey === "count_hold") pointValue = count;
        else if (metricKey === "sum_hold") pointValue = sum;
      } else {
        const sum = values.reduce((a, b) => a + b, 0);
        const count = values.length;
        const avg = sum / count;
        const max = Math.max(...values);

        if (metricKey === "sum_reps") pointValue = sum;
        else if (metricKey === "avg_reps") pointValue = avg;
        else if (metricKey === "count_sets") pointValue = count;
        else if (metricKey === "max_rep") pointValue = max;
      }

      return pointValue;
    });

    // Construire le label de la variante
    let variantLabel = exerciseName;
    if (variant.weight > 0) variantLabel += ` (+${variant.weight}kg)`;
    if (variant.assist > 0) variantLabel += ` (-${variant.assist}kg assist)`;

    datasets.push({
      label: variantLabel,
      data,
      borderWidth: 2,
      tension: 0.2,
      pointRadius: 3,
      spanGaps: true,
      borderColor: colors[colorIdx % colors.length],
      backgroundColor: colors[colorIdx % colors.length] + "33"
    });

    colorIdx++;
  });

  return { labels, datasets };
}

async function renderExerciseChart() {
  const my = ++__chartSeq;

  const exerciseSelect = document.getElementById("dashboard-exercise");
  const metricSelect = document.getElementById("dashboard-metric");
  const info = document.getElementById("dashboard-info");
  const ctx = document.getElementById("exercise-chart");

  if (!exerciseSelect || !metricSelect || !ctx) return;

  // if not authed, keep clean UI
  const { data: sessData } = await supabaseClient.auth.getSession();
  const user = sessData?.session?.user || null;
  if (!user) {
    info.textContent = "Connecte-toi pour voir ton tableau de bord.";
    if (exerciseChart) { exerciseChart.destroy(); exerciseChart = null; }
    return;
  }

  const exerciseName = getSelectedExerciseName();
  if (!exerciseName) {
    info.textContent = "Choisis un exercice ou saisis un nom pour l'exercice personnalisé.";
    if (exerciseChart) { exerciseChart.destroy(); exerciseChart = null; }
    return;
  }

  const metricKey = metricSelect.value;

  // Persist UI choices locally
  localStorage.setItem("last-selected-exercise", exerciseName);
  localStorage.setItem("last-selected-metric", metricKey);

  const { labels, datasets } = await buildChartData(exerciseName, metricKey);

  // ✅ ignore obsolete renders
  if (my !== __chartSeq) return;

  if (!labels.length || !datasets.length) {
    info.textContent = "Aucune donnée trouvée pour cet exercice et cette métrique.";
    if (exerciseChart) { exerciseChart.destroy(); exerciseChart = null; }
    return;
  }

  info.textContent = "";

  if (exerciseChart) exerciseChart.destroy();

  exerciseChart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: datasets
    },
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { top: 24, right: 8, left: 4 } },
      scales: {
        x: { title: { display: true, text: "Séances" } },
        y: { title: { display: true, text: "Valeur" }, beginAtZero: true }
      },
      plugins: {
        legend: { position: "bottom" },
        datalabels: {
          anchor: "end",
          align: "top",
          offset: 4,
          font: { size: 10 },
          formatter: (value) => Number.isInteger(value) ? value : value.toFixed(1)
        }
      }
    }
  });
}

async function initDashboard() {
  const exerciseInput = document.getElementById("dashboard-exercise");
  const metricSelect = document.getElementById("dashboard-metric");
  const dropdown = document.getElementById("dashboard-exercise-suggestions");
  
  if (!exerciseInput || !metricSelect) return;

  // Restaurer la dernière sélection
  const savedExercise = localStorage.getItem("last-selected-exercise");
  const savedMode = localStorage.getItem("last-selected-mode");
  if (savedExercise) {
    exerciseInput.value = savedExercise;
    // Restaurer le mode pour afficher les bonnes métriques
    if (savedMode) {
      exerciseInput.dataset.isHold = (savedMode === "hold") ? "true" : "false";
    }
  }

  updateMetricOptions();

  const savedMetric = localStorage.getItem("last-selected-metric");
  if (savedMetric) {
    const exists = Array.from(metricSelect.options).some(o => o.value === savedMetric);
    if (exists) metricSelect.value = savedMetric;
  }

  await renderExerciseChart();

  // Autocomplete search
  let lastQuery = "";

  function repositionDashboardDropdown() {
    if (dropdown.style.display !== "block") return;
    const rect = exerciseInput.getBoundingClientRect();
    const dropdownWidth = 330;
    const viewportWidth = window.innerWidth;
    
    let left = rect.left;
    if (left + dropdownWidth > viewportWidth - 10) {
      left = Math.max(10, viewportWidth - dropdownWidth - 10);
    }
    
    dropdown.style.left = `${left}px`;
    dropdown.style.top = `${rect.bottom + 4}px`;
    dropdown.style.width = `${Math.min(dropdownWidth, rect.width)}px`;
  }

  exerciseInput.addEventListener("input", async () => {
    const value = exerciseInput.value.trim();

    exerciseInput.dataset.isHold = "";
    dropdown.innerHTML = "";
    dropdown.style.display = "none";

    if (!value || value === lastQuery) return;
    lastQuery = value;

    const results = await searchExercises(value);
    if (!results.length) return;

    const rect = exerciseInput.getBoundingClientRect();
    const dropdownWidth = 330;
    const viewportWidth = window.innerWidth;
    
    let left = rect.left;
    if (left + dropdownWidth > viewportWidth - 10) {
      left = Math.max(10, viewportWidth - dropdownWidth - 10);
    }
    
    dropdown.style.left = `${left}px`;
    dropdown.style.top = `${rect.bottom + 4}px`;
    dropdown.style.width = `${Math.min(dropdownWidth, rect.width)}px`;
    dropdown.style.display = "block";

    results.forEach(ex => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${ex.name}</span>
        <span style="opacity:.6;font-size:12px;margin-left:6px;">
          ${ex.mode}
        </span>
      `;

      li.addEventListener("click", async () => {
        exerciseInput.value = ex.name;
        exerciseInput.dataset.isHold = (ex.mode === "hold") ? "true" : "false";
        dropdown.style.display = "none";
        // Sauvegarder le mode pour restauration au rechargement
        localStorage.setItem("last-selected-mode", ex.mode);
        updateMetricOptions();
        await renderExerciseChart();
      });

      dropdown.appendChild(li);
    });
  });

  // Repositionner lors du défilement ou redimensionnement
  window.addEventListener("scroll", repositionDashboardDropdown, true);
  window.addEventListener("resize", repositionDashboardDropdown);

  // Fermer la dropdown au clic ailleurs
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && e.target !== exerciseInput) {
      dropdown.style.display = "none";
    }
  });

  // listeners pour changements
  metricSelect.addEventListener("change", async () => {
    await renderExerciseChart();
  });

  exerciseInput.addEventListener("blur", async () => {
    localStorage.setItem("last-selected-exercise", exerciseInput.value);
    updateMetricOptions();
    await renderExerciseChart();
  });
}

function initStructuredLog() {
  addExerciseRow();
}

/* =========================================================
   WORKOUTS SAVINGS AND POSTING (local only)
   ========================================================= */

function showPost(id) {
  for (let i = 1; i <= 4; i++) {
    const post = document.getElementById("post-" + i);
    const btn = document.getElementById("btn-post-" + i);
    if (!post || !btn) continue;

    if (i === id) {
      post.style.display = "block";
      btn.classList.add("active");
    } else {
      post.style.display = "none";
      btn.classList.remove("active");
    }
  }
}

function savePost(id) {
  const textarea = document.getElementById("textarea-" + id);
  const info = document.getElementById("info-" + id);
  const key = "journal-content-" + id;

  if (!textarea) return;
  localStorage.setItem(key, textarea.value);
  const now = new Date().toLocaleString();
  if (info) info.textContent = "Enregistré le " + now + ".";
}

function resetPost(id) {
  const textarea = document.getElementById("textarea-" + id);
  const info = document.getElementById("info-" + id);
  const key = "journal-content-" + id;

  if (textarea) textarea.value = "";
  localStorage.removeItem(key);
  if (info) info.textContent = "";
}

function loadPosts() {
  for (let i = 1; i <= 4; i++) {
    const textarea = document.getElementById("textarea-" + i);
    const info = document.getElementById("info-" + i);
    const key = "journal-content-" + i;

    if (!textarea) continue;
    const saved = localStorage.getItem(key);
    if (saved !== null) {
      textarea.value = saved;
      if (info) info.textContent = "Contenu récupéré depuis ce navigateur.";
    }
  }
  showPost(1);
}

/* =========================================================
   COMMUNITY: username + feed + auth
   ========================================================= */

async function getOrCreateUsername(inputUsername) {
  const { data: auth } = await supabaseClient.auth.getUser();
  const user = auth?.user;
  if (!user) return null;

  const { data: profile, error: selectError } = await supabaseClient
    .from("user_profiles")
    .select("username")
    .eq("user_id", user.id)
    .maybeSingle();

  if (selectError) {
    console.error(selectError);
    throw selectError;
  }

  if (profile?.username) return profile.username;

  const username = inputUsername.trim();
  if (!username) return null;

  const { error: insertError } = await supabaseClient
    .from("user_profiles")
    .insert({ user_id: user.id, username });

  if (insertError) {
    if (insertError.code === "23505") throw new Error("USERNAME_TAKEN");
    throw insertError;
  }

  return username;
}

async function initUsernameUI() {
  const input = document.getElementById("public-username");
  if (!input) return;

  // état par défaut : verrouillé
  input.disabled = true;
  input.value = "";
  input.title = "Connecte-toi pour définir ton pseudo";

  const { data: auth } = await supabaseClient.auth.getUser();
  const user = auth?.user;

  // ❌ pas connecté → on laisse désactivé
  if (!user) {
    return;
  }

  // ✅ connecté → on vérifie le profil
  const { data: profile, error } = await supabaseClient
    .from("user_profiles")
    .select("username")
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) {
    console.warn("initUsernameUI profile read error:", error);
    return;
  }

  // 🔒 pseudo déjà défini
  if (profile?.username) {
    input.value = profile.username;
    input.disabled = true;
    input.title = "Pseudo définitif";
  } 
  // ✅ connecté mais pas encore de pseudo
  else {
    input.disabled = false;
    input.placeholder = "ex: cali_ambition";
    input.title = "Choisis ton pseudo (une seule fois)";
  }
}

function computeSessionPoints(payload) {
  const exos = payload?.exercises || [];
  let total = 0;

  for (const ex of exos) {
    const vals = [ex.s1, ex.s2, ex.s3, ex.s4, ex.s5, ex.s6, ex.s7, ex.s8]
      .map(v => Number(v))
      .filter(v => Number.isFinite(v) && v > 0);

    if (!vals.length) continue;
    total += vals.reduce((a, b) => a + b, 0);
  }

  return Math.round(total);
}

function renderFeedItem(s, currentUserId) {
  const d = new Date(s.session_date);
  const dateLabel = isNaN(d.getTime()) ? s.session_date : d.toLocaleDateString();

  const points = computeSessionPoints(s.payload);
  const trophy = `<span style="margin-left:8px;color:#d4af37;font-weight:700;">🏆 ${points} pts</span>`;

  const exList = (s.payload?.exercises || [])
  .slice(0, 15)
  .map(ex => {
    const series = [ex.s1, ex.s2, ex.s3, ex.s4, ex.s5, ex.s6, ex.s7, ex.s8]
      .filter(v => v !== "" && v !== null && v !== undefined)
      .join("/");

    const unit = ex.mode === "hold" ? "s" : "reps";

    // ✅ NOUVEAU : affichage du lest
    const weightNum = Number(ex.weight || 0);
    const weightLabel = weightNum > 0 ? ` (+${weightNum}kg)` : "";
    const assistNum = Number(ex.assist || 0);
    const assistLabel = assistNum > 0 ? ` (-${assistNum}kg)` : "";


    return `
      <li>
        ${escapeHtml(ex.name || "Exo")}${weightLabel}${assistLabel}
        ${series ? ` — ${escapeHtml(series)} ${unit}` : ""}
      </li>
    `;
  })
  .join("");

  const canDelete = currentUserId && s.user_id === currentUserId;

  return `
    <div style="background:#f5f5f5;border:1px solid #eee;border-radius:12px;padding:12px;">
      <div style="display:flex;justify-content:space-between;gap:10px;align-items:baseline;">
        <strong>${escapeHtml(s.username)}${trophy}</strong>
        <span style="font-size:12px;color:#666;">${escapeHtml(dateLabel)}</span>
      </div>

      <div style="font-size:12px;color:#666;margin-top:4px;">
        Durée: ${escapeHtml(String(s.payload?.duration || ""))} min
      </div>

      <ul style="margin:8px 0 0;padding-left:18px;font-size:13px;">
        ${exList || "<li>(séance vide)</li>"}
      </ul>

      ${canDelete ? `
        <button class="delete-session-btn" type="button" onclick="deleteSessionByDate('${s.session_date}')">
          Supprimer cette publication (et session)
        </button>
      ` : ""}
    </div>
  `;
}

function withTimeout(p, ms, code = "TIMEOUT") {
  let t;
  const timeout = new Promise((_, rej) => {
    t = setTimeout(() => rej(new Error(code)), ms);
  });
  return Promise.race([p, timeout]).finally(() => clearTimeout(t));
}

async function loadPublicFeed({ force = false } = {}) {
  const container = document.getElementById("public-feed");
  if (!container) return;

  if (__feedInFlight && !force) return __feedInFlight;

  const mySeq = ++__feedSeq;
  container.innerHTML = `<div style="font-size:13px;color:#666;">Chargement du feed...</div>`;

  const commit = (html) => {
    if (mySeq !== __feedSeq) return;
    container.innerHTML = html;
  };

  __feedInFlight = (async () => {
    try {
      // current user id (timeout)
      let currentUserId = null;
      try {
        const { data, error } = await withTimeout(supabaseClient.auth.getUser(), 1200, "AUTH_TIMEOUT");
        if (!error) currentUserId = data?.user?.id || null;
      } catch (_) {
        currentUserId = null;
      }

      // fetch feed (timeout)
      const { data, error } = await withTimeout(
        supabaseClient
          .from("workout_sessions")
          .select("id, user_id, created_at, username, session_date, payload")
          .order("created_at", { ascending: false })
          .limit(200),
        2500,
        "FEED_TIMEOUT"
      );

      if (error) {
        commit(`<div style="font-size:13px;color:#a00;">Erreur feed: ${escapeHtml(error.message)}</div>`);
        return;
      }

      if (!data || data.length === 0) {
        commit(`<div style="font-size:13px;color:#666;">Aucune séance publique pour l’instant.</div>`);
        return;
      }

      const merged = mergeSessionsByDayAndExercise(data);

      commit(
        merged
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .map(s => renderFeedItem(s, currentUserId))
          .join("")
      );

    } catch (e) {
      commit(`<div style="font-size:13px;color:#a00;">Feed indisponible (${escapeHtml(e?.message || String(e))})</div>`);
    } finally {
      if (mySeq === __feedSeq) __feedInFlight = null;
    }
  })();

  return __feedInFlight;
}

async function deleteSession(sessionId) {
  const { error } = await supabaseClient
    .from("workout_sessions")
    .delete()
    .eq("id", sessionId);

  if (error) {
    uiInfo("Erreur suppression : " + error.message);
    return;
  }

  uiInfo("Séance supprimée.");
  scheduleUIRefresh({ forceSessions: true, forceFeed: true });
}

// evol saveUsername does not do anything but register user's username now
async function saveUsername() {
  uiInfo("");

  const { data: authData } = await supabaseClient.auth.getUser();
  const user = authData?.user;
  if (!user) return uiInfo("Tu dois être connecté pour enregistrer ton pseudo.");

  const inputUsername = document.getElementById("public-username")?.value || "";

  let username;
  try {
    username = await getOrCreateUsername(inputUsername);
  } catch (e) {
    return uiInfo("Ce pseudo est déjà utilisé.");
  }

  if (!username) return uiInfo("Choisis un pseudo (une seule fois).");
  scheduleUIRefresh({ forceSessions: true, forceFeed: true });
}

/* ---------- AUTH ---------- */

async function login() {
  uiInfo("");

  const email = document.getElementById("auth-email")?.value?.trim().toLowerCase();
  const password = document.getElementById("auth-pass")?.value?.trim();
  if (!email || !password) return uiInfo("Email et mot de passe requis.");

  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) return uiInfo("Erreur login : " + error.message);

  uiInfo("Connecté !");
  scheduleUIRefresh({ forceSessions: true, forceFeed: true });
}

async function signup() {
  uiInfo("");

  const email = document.getElementById("auth-email")?.value?.trim().toLowerCase();
  const password = document.getElementById("auth-pass")?.value?.trim();
  if (!email || !password) return uiInfo("Email et mot de passe requis.");

  const { data, error } = await supabaseClient.auth.signUp({ email, password });
  if (error) return uiInfo("Erreur inscription : " + error.message);

  if (data?.session) uiInfo("Inscription OK + connecté.");
  else uiInfo("Inscription OK. Vérifie tes emails si confirmation requise.");

  scheduleUIRefresh({ forceSessions: true, forceFeed: true });
}

let isLoggingOut = false;

async function logout() {
  if (isLoggingOut) return;
  isLoggingOut = true;

  const btns = document.querySelectorAll('button[onclick="logout()"]');
  btns.forEach(b => (b.disabled = true));

  try {
    uiInfo("Déconnexion...");

    const signOutPromise = supabaseClient.auth.signOut();
    const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("TIMEOUT_SIGNOUT")), 1200));
    await Promise.race([signOutPromise, timeoutPromise]);

    uiInfo("Déconnecté.");
  } catch (e) {
    if (e?.message === "TIMEOUT_SIGNOUT") {
      uiInfo("Déconnecté (UI). Rechargement...");
      window.location.reload();
      return;
    }
    uiInfo("Erreur logout : " + (e?.message || e));
  } finally {
    clearPrivateUI();
    scheduleUIRefresh({ forceSessions: true, forceFeed: true });
    isLoggingOut = false;
    btns.forEach(b => (b.disabled = false));
  }
}

function bindAuthListenerOnce() {
  if (window.__authListenerBound) return;
  window.__authListenerBound = true;

  supabaseClient.auth.onAuthStateChange(() => {
    scheduleUIRefresh({ forceSessions: true, forceFeed: true });
  });
}

function bindVisibilityRefresh() {
  if (window.__visibilityBound) return;
  window.__visibilityBound = true;

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) loadPublicFeed({ force: true });
  });

  window.addEventListener("focus", () => {
    loadPublicFeed({ force: true });
  });
}

/* ---------- AUTO SAVE / COUNTER TOOL LAUNCH ---------- */
function bindAutoSaveButton() {
  const btn = document.getElementById("liveBtn");
  if (!btn) return;

  btn.addEventListener("click", async (e) => {
    e.preventDefault();

    const { data: authData } = await supabaseClient.auth.getUser();
    const user = authData?.user;

    if (!user) {
      alert("Tu dois être connecté pour utiliser l’outil LIVE.");
      return;
    }

    const ctx = {
      userId: user.id,
      username: user.user_metadata?.username || "",
      exercise: "Tractions",
      mode: "pullups",
      sessionDate: new Date().toISOString().slice(0, 10),
    };

    const encoded = encodeURIComponent(
      btoa(JSON.stringify(ctx))
    );

    window.location.href = `/counter/launcher.html?ctx=${encoded}`;
  });
}

/* =========================================================
   BOOT
   ========================================================= */

window.addEventListener("DOMContentLoaded", async () => {
  // init base UI
  initStructuredLog();
  loadPosts();
  bindAutoSaveButton();

  // init dashboard (sets listeners + first render)
  await initDashboard();

  // auth + feed refresh
  bindAuthListenerOnce();
  bindVisibilityRefresh();

  // username lock
  await initUsernameUI();

  // first refresh (groups feed + sessions + chart)
  scheduleUIRefresh({ forceSessions: true, forceFeed: true });
});

/* expose onclick handlers */
window.addExerciseRow = addExerciseRow;
window.removeExerciseRow = removeExerciseRow;
window.saveStructuredSession = saveStructuredSession;

window.saveUsername = saveUsername;

window.login = login;
window.signup = signup;
window.logout = logout;

window.showPost = showPost;
window.savePost = savePost;
window.resetPost = resetPost;

window.loadPublicFeed = loadPublicFeed;
window.deleteSessionByDate = deleteSessionByDate;
window.removeSetFromHistory = removeSetFromHistory;
