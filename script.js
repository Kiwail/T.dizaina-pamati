const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const label = document.querySelector(".theme-label");
const storageKey = "datorikas-nedela-theme";

function preferredTheme() {
  const savedTheme = localStorage.getItem(storageKey);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  const isDark = theme === "dark";
  toggle.setAttribute("aria-pressed", String(isDark));
  toggle.setAttribute("aria-label", isDark ? "Pārslēgt gaišo režīmu" : "Pārslēgt tumšo režīmu");
  label.textContent = isDark ? "Gaišais režīms" : "Tumšais režīms";
}

applyTheme(preferredTheme());

toggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem(storageKey, nextTheme);
  applyTheme(nextTheme);
});
