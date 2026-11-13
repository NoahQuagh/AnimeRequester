/**
 * Fonction de rendu de la liste des genres issus de la recherche Tenrai
 * @param {Array} genreList Tableau des genres renvoyés par l'API
 */
export function renderGenre(genreList) {
    const container = document.getElementById('genreList');
    if (!container) return;

    if (!Array.isArray(genreList) || genreList.length === 0) {
        container.innerHTML = '<p>Impossible de charger les genres.</p>';
        return;
    }

    container.innerHTML = genreList.map(genre => `
        <label class="genre-checkbox">
            <input type="checkbox" name="genre" value="${genre.mal_id}">
            ${genre.name}
        </label>
    `).join('');
}