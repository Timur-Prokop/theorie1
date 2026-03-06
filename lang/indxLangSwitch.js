// lang.js
function setLanguage(lang) {
  const dict = indexLang?.[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (typeof value === "string") el.textContent = value;
  });
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-lang]");
  if (!btn) return;
  setLanguage(btn.getAttribute("data-lang"));
});

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "nl";
  setLanguage(saved);
});
