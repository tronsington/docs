// Theme customization for Exergy Documentation
// Adds real system preference detection to the Auto button

(function() {
    'use strict';

    const LIGHT_THEME = 'light';
    const DARK_THEME = 'navy';

    // Get system preference
    function getSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return DARK_THEME;
        }
        return LIGHT_THEME;
    }

    // Apply theme to page
    function applyTheme(theme) {
        const html = document.documentElement;
        html.classList.remove('light', 'rust', 'coal', 'navy', 'ayu');
        html.classList.add(theme);
    }

    // Check if Auto mode is selected (stored in localStorage)
    function isAutoMode() {
        const stored = localStorage.getItem('mdbook-theme');
        return stored === 'default_theme' || stored === null;
    }

    // Handle Auto button click - apply system theme
    function handleAutoClick() {
        localStorage.setItem('mdbook-theme', 'default_theme');
        applyTheme(getSystemTheme());
    }

    // Rename theme buttons
    function renameThemeButtons() {
        const defaultBtn = document.querySelector('#theme-list button#default_theme');
        const lightBtn = document.querySelector('#theme-list button#light');
        const navyBtn = document.querySelector('#theme-list button#navy');

        if (defaultBtn) defaultBtn.textContent = 'Auto';
        if (lightBtn) lightBtn.textContent = 'Light';
        if (navyBtn) navyBtn.textContent = 'Dark';
    }

    // Override Auto button behavior
    function setupAutoButton() {
        const defaultBtn = document.querySelector('#theme-list button#default_theme');
        if (!defaultBtn) return;

        // Remove existing click handlers and add our own
        const newBtn = defaultBtn.cloneNode(true);
        defaultBtn.parentNode.replaceChild(newBtn, defaultBtn);

        newBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            handleAutoClick();
        });
    }

    // Apply system theme if Auto is selected
    function applyAutoThemeIfNeeded() {
        if (isAutoMode()) {
            applyTheme(getSystemTheme());
        }
    }

    // Listen for system theme changes
    function setupSystemThemeListener() {
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
                if (isAutoMode()) {
                    applyTheme(e.matches ? DARK_THEME : LIGHT_THEME);
                }
            });
        }
    }

    // Initialize
    function init() {
        renameThemeButtons();
        setupAutoButton();
        applyAutoThemeIfNeeded();
        setupSystemThemeListener();
    }

    // Run init when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Also run after a short delay to catch dynamically loaded elements
    setTimeout(init, 100);
})();
