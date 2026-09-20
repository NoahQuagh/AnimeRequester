
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const type = document.getElementById('search-type').value;
        const param = document.getElementById('search-input').value.trim();

        if (!param) return;

        renderCards(getAnimeData(type,param))
    });
});
