const SUPABASE_URL = "https://lmblqxwssrxucbtowfkq.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_8cLzA_3Ud6AaLSi8mTf1Gw_4lJZTLjs";

// création unique du client
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function toggleMenu() {
  document.getElementById("mobileNav").classList.toggle("open");
}
