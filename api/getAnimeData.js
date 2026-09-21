const apiKey = sessionStorage.getItem('AnimeRequester-apiKey')


/**
 * Effectue une recherche dans animeDB
 * @param type {'titre' | 'id' | 'classement' | 'genre'} [type='titre'] Le type de recherche
 * @param param contenue de la recherche
 * @return {Promise<any>} json des cartes des animes
 */
export async function getAnimeData(type,param) {
    let url = '';
    if (type === 'titre') {
        url = `https://anime-db.p.rapidapi.com/anime?search=${encodeURIComponent(param)}&page=1&size=10`;
    } else if (type === 'id') {
        url = `https://anime-db.p.rapidapi.com/anime/by-id/${param}`;
    } else if(type==='classement') {
        url = `https://anime-db.p.rapidapi.com/anime?sortBy=ranking&sortOrder=asc&page=${param}&size=1`;
    }else{
        const genreList = Array.isArray(param) ? param.join(',') : param;
        url = `https://anime-db.p.rapidapi.com/anime?genres=${encodeURIComponent(genreList)}&page=1&size=10`;
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
        return await response.json();
    } catch (error) {
        console.error("Erreur lors de la récupération :", error);
    }
}