function renderCards(apiResponse) {
    const section = document.getElementById('ressult-zone');

    if (!apiResponse) {
        section.innerHTML = "<p>Erreur ou aucune donnée reçue.</p>";
        return;
    }

    let animeList = [];

    if (apiResponse.data && Array.isArray(apiResponse.data)) {
        animeList = apiResponse.data;
    } else if (Array.isArray(apiResponse)) {
        animeList = apiResponse;
    } else if (typeof apiResponse === 'object') {
        animeList = [apiResponse];
    }

    if (animeList.length === 0) {
        section.innerHTML = "<p>Aucun anime trouvé.</p>";
        return;
    }

    section.innerHTML = animeList.map(anim => `
        <div class="card">
            <h3>${anim.title || 'Sans titre'}</h3>
            <img src="${anim.image || ''}" alt="${anim.title || 'Anime'}">
            <p><strong>Classement :</strong> #${anim.ranking || 'N/A'}</p>
            <p><strong>Épisodes :</strong> ${anim.episodes || 'N/A'}</p>
            
            <div class="genres">
                ${anim.genres ? anim.genres.map(gen => `<span class="genre-tag">${gen}</span>`).join('') : ''}
            </div>

            <p class="synopsis">${anim.synopsis ? anim.synopsis.slice(0, 150) + '...' : 'Pas de synopsis.'}</p>
        </div>
    `).join('');
}