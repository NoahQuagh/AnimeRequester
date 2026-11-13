/**
 * Récupère la liste des genres d'animes depuis Tenrai
 */
export async function getAnimeGenre() {
    try {
        const response = await fetch('https://api.tenrai.org/v1/genres/anime?filter=genres');
        if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`);

        const result = await response.json();
        return result.data || [];
    } catch (error) {
        console.error("Erreur lors du chargement des genres :", error);
        return [];
    }
}