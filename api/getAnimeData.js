/**
 * Effectue une recherche dans l'API Tenrai
 * @param {'titre' | 'id' | 'classement' | 'genre'} [type='titre'] Le type de recherche
 * @param {string|number|Array} param Contenu de la recherche
 * @return {Promise<any>} JSON de réponse de l'API Tenrai
 */
export async function getAnimeData(type, param) {
    const baseUrl = 'https://api.tenrai.org/v1';
    let url = '';

    if (type === 'titre') {
        url = `${baseUrl}/anime?q=${encodeURIComponent(param)}&page=1&limit=10`;
    } else if (type === 'id') {
        url = `${baseUrl}/anime/${encodeURIComponent(param)}`;
    } else if (type === 'classement') {
        url = `${baseUrl}/anime?order_by=rank&sort=asc&page=${encodeURIComponent(param)}&limit=1`;
    } else {
        const genreList = Array.isArray(param) ? param.join(',') : param;
        url = `${baseUrl}/anime?genres=${encodeURIComponent(genreList)}&page=1&limit=30`;
    }

    try {
        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 404) {
                return { data: [] };
            }
            throw new Error(`Erreur HTTP ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Erreur lors de la récupération :", error);
        return null;
    }
}