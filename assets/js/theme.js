const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.getElementById('themeLight');

/**
 * définie le theme du site
 * @param theme nouveau theme à définir
 */
function setTheme(theme) {
    document.documentElement.dataset.theme = theme;

    if (theme === 'dark') {
        themeIcon.classList.remove('ti-moon');
        themeIcon.classList.add('ti-sun');
    } else {
        themeIcon.classList.remove('ti-sun');
        themeIcon.classList.add('ti-moon');
    }

    try {
        sessionStorage.setItem('AnimeRequester-theme', theme);
    } catch (_) {}
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.dataset.theme || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });
}

let savedTheme = 'light';
try {
    savedTheme = sessionStorage.getItem('AnimeRequester-theme') || 'light';
} catch (_) {}

setTheme(savedTheme);