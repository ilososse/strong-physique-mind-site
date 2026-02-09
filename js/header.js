const SUPABASE_URL = "https://lmblqxwssrxucbtowfkq.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_8cLzA_3Ud6AaLSi8mTf1Gw_4lJZTLjs";

// création unique du client
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function toggleMenu() {
  const menu = document.getElementById("mobileNav");
  menu.classList.toggle("open");
}

function closeMenu() {
  const menu = document.getElementById("mobileNav");
  menu.classList.remove("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const mobileNav = document.getElementById("mobileNav");

  // Si la page n’a pas de menu mobile (sécurité)
  if (!mobileNav) return;

  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });
});

