(function () {
  var storageKey = "portfolio-theme";
  var root = document.documentElement;

  try {
    var savedTheme = window.localStorage.getItem(storageKey);
    root.classList.toggle("dark", savedTheme !== "light");
  } catch (error) {
    root.classList.add("dark");
  }

  function updateToggle(toggle) {
    var isDark = root.classList.contains("dark");
    var label = isDark ? "Switch to light theme" : "Switch to dark theme";
    toggle.setAttribute("aria-label", label);
    toggle.setAttribute("title", label);
    toggle.setAttribute("aria-pressed", String(isDark));
  }

  function initializeThemeToggle() {
    var toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    updateToggle(toggle);
    toggle.addEventListener("click", function () {
      var isDark = root.classList.toggle("dark");
      try {
        window.localStorage.setItem(storageKey, isDark ? "dark" : "light");
      } catch (error) {}
      updateToggle(toggle);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeThemeToggle, {
      once: true,
    });
  } else {
    initializeThemeToggle();
  }
})();
