import { getAnimeData } from '../../api/getAnimeData.js';
import { renderCards } from './renderer/cardsListRenderer.js';
import { getAnimeGenre } from '../../api/getAnimeGenre.js';
import { renderGenre } from './renderer/genreListRenderer.js';

const searchTypeSelect = document.getElementById('search-type');
const textContainer = document.getElementById('search-input');
const genreContainer = document.getElementById('genreList');
const form = document.getElementById('search-form');
const label = document.getElementById('param-label');

document.addEventListener('DOMContentLoaded', async () => {
    const genreList = await getAnimeGenre();
    renderGenre(genreList);

    searchTypeSelect.addEventListener('change', () => {
        toggleGenre();
    });

    form.addEventListener('reset', () => {
        setTimeout(() => {
            toggleGenre();
            document.getElementById('ressult-zone').innerHTML = '';
        }, 0);
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const type = searchTypeSelect.value;
        let param;

        if (type === 'genre') {
            const checkedBoxes = document.querySelectorAll('input[name="genre"]:checked');
            param = Array.from(checkedBoxes).map(cb => cb.value);

            if (param.length === 0) {
                return;
            }
        } else {
            param = textContainer.value.trim();
            if (!param) return;
        }

        const data = await getAnimeData(type, param);
        renderCards(data);
    });
});

/**
 * Affichage de la liste des genres d'anime
 */
function toggleGenre() {
    if (searchTypeSelect.value === 'genre') {
        label.textContent = "Genres :";
        textContainer.style.display = 'none';
        genreContainer.style.display = 'block';
    } else {
        label.textContent = "Paramètre :";
        textContainer.style.display = 'block';
        genreContainer.style.display = 'none';
    }
}