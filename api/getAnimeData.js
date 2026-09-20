const apiKey = '4b74dde7bbmshf6c9cb2ac2071f8p113619jsnce7bd4fbfa1c';


/**
 * Effectue une recherche dans animeDB
 * @param type {'titre' | 'id' | 'classement'} [type='titre'] Le type de recherche
 * @param param contenue de la recherche
 * @return {Promise<any>} json des cartes des animes
 */
async function getAnimeData(type,param) {
    let url = '';
    if (type === 'titre') {
        url = `https://anime-db.p.rapidapi.com/anime?search=${encodeURIComponent(param)}&page=1&size=10`;
    } else if (type === 'id') {
        url = `https://anime-db.p.rapidapi.com/anime/by-id/${param}`;
    } else {
        url = `https://anime-db.p.rapidapi.com/anime?sortBy=ranking&sortOrder=asc&page=${param}&size=1`;
    }


    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        return result.data ? result.data : [result];
    } catch (error) {
        console.error("Erreur lors de la récupération :", error);
    }
}