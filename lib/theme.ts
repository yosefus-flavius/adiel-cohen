export type ThemeMode = "auto" | "light" | "dark";

export const THEME_KEY = "theme-mode";
export const THEME_EVENT = "theme-mode-change";

// Runs before first paint (inline in <head>) so there is no flash of the wrong theme.
// "auto" (no stored choice) follows the visitor's OS preference.
export const themeInitScript = `(function(){try{var m=localStorage.getItem('${THEME_KEY}');var d=m==='dark'||(m!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);var r=document.documentElement;r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';}catch(e){}})();`;

export function getStoredMode(): ThemeMode {
  try {
    const value = localStorage.getItem(THEME_KEY);
    return value === "light" || value === "dark" ? value : "auto";
  } catch {
    return "auto";
  }
}

export function applyTheme(mode: ThemeMode) {
  const dark =
    mode === "dark" ||
    (mode === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const root = document.documentElement;
  root.classList.toggle("dark", dark);
  root.style.colorScheme = dark ? "dark" : "light";
}

export function applyStoredTheme() {
  applyTheme(getStoredMode());
}

export function setMode(mode: ThemeMode) {
  try {
    if (mode === "auto") localStorage.removeItem(THEME_KEY);
    else localStorage.setItem(THEME_KEY, mode);
  } catch {
    // storage unavailable (private mode): the choice still applies for this page view
  }
  applyTheme(mode);
  window.dispatchEvent(new Event(THEME_EVENT));
}
