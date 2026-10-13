document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) {
        console.error("Theme toggle button not found.");
        return;
    }

    function getPreferredTheme() {
        const savedTheme = localStorage.getItem("portfolio-theme");

        if (savedTheme === "light" || savedTheme === "dark") {
            return savedTheme;
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    function applyTheme(theme) {
        document.documentElement.dataset.theme = theme;

        themeToggle.setAttribute(
            "aria-checked",
            String(theme === "dark")
        );

        themeToggle.setAttribute(
            "aria-label",
            theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
        );
    }

    themeToggle.addEventListener("click", () => {
        const currentTheme =
            document.documentElement.dataset.theme || "light";

        const nextTheme = currentTheme === "dark" ? "light" : "dark";

        localStorage.setItem("portfolio-theme", nextTheme);
        applyTheme(nextTheme);
    });

    applyTheme(getPreferredTheme());
});