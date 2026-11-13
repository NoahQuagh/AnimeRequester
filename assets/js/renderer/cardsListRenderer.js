/**
 * Fonction de rendu des cartes issues de la recherche Tenrai
 * @param {Object} apiResponse JSON des résultats de la recherche
 */
export function renderCards(apiResponse) {
    const section = document.getElementById('ressult-zone');

    if (!apiResponse) {
        section.innerHTML = "<p>Erreur ou aucune donnée reçue.</p>";
        return;
    }

    let animeList = [];

    // Gestion des deux formats de Tenrai : tableau (recherche) ou objet unique (/anime/{id})
    if (apiResponse.data) {
        animeList = Array.isArray(apiResponse.data) ? apiResponse.data : [apiResponse.data];
    } else if (Array.isArray(apiResponse)) {
        animeList = apiResponse;
    }

    if (animeList.length === 0) {
        section.innerHTML = "<p class='no-result'>Aucun anime trouvé.</p>";
        return;
    }

    section.innerHTML = animeList.map(anim => {
        const imageUrl = anim.images?.jpg?.image_url || anim.images?.webp?.image_url || '';
        const genresHtml = Array.isArray(anim.genres)
            ? anim.genres.map(gen => `<span class="genre-tag">${gen.name}</span>`).join('')
            : '';

        return `
            <div class="card">
                <h3>${anim.title || 'Sans titre'}</h3>
                <img src="${imageUrl}" alt="${anim.title || 'Anime image'}">
                <p><strong>Classement :</strong> #${anim.rank || 'N/A'}</p>
                <p><strong>Épisodes :</strong> ${anim.episodes || 'N/A'}</p>
                
                <div class="genres">
                    ${genresHtml}
                </div>

                <p class="synopsis">${anim.synopsis ? anim.synopsis : 'Pas de synopsis.'}</p>
            </div>
        `;
    }).join('');
}