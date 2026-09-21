import { getAnimeData } from '../../api/getAnimeData.js';
import { renderCards } from './renderer/cardsListRenderer.js';

const searchTypeSelect = document.getElementById('search-type');
const textContainer = document.getElementById('search-input');
const genreContainer = document.getElementById('input-genre-container');
const form = document.getElementById('search-form');
const label = document.getElementById('param-label');



document.addEventListener('DOMContentLoaded', () => {
    openModal('modalApiKey');

    const btnValidApi = document.getElementById('btn-valid-api');
    if (btnValidApi) {
        btnValidApi.addEventListener('click', validApiKey);
    }

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
            param = document.getElementById('search-input').value.trim();
            if (!param) return;
        }

        const data = await getAnimeData(type, param);
        renderCards(data);
    });

});

/**
 * affichage de la liste des genres d'anim
 */
function toggleGenre(){
    if (searchTypeSelect.value === 'genre') {
        label.textContent = "Sélectionnez un ou plusieurs genres :";
        textContainer.style.display = 'none';
        genreContainer.style.display = 'block';
    } else {
        label.textContent = "Paramètre :";
        textContainer.style.display = 'block';
        genreContainer.style.display = 'none';
    }
}

/**
 * valide la clé api dans la session storage
 */
function validApiKey(){
    const input = document.getElementById('apiKeyInput');
    if(input.value===''){
        return;
    }
    if(input.value==='debug'){//TODO a sup
        closeModal('modalApiKey');
    }
    sessionStorage.setItem('AnimeRequester-apiKey', input.value);
    closeModal('modalApiKey');
}

