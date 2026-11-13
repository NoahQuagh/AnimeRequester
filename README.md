# Anime Requester

https://noahquagh.github.io/AnimeRequester/

**Anime Requester** est une application web moderne et responsive permettant de rechercher des informations sur des animes en interrogeant l'API. 

L'application offre une interface dynamique avec gestion de thème (Clair/Sombre), recherche multi-critères.

---

##  Fonctionnalités

-  Recherche Multi-critères :
  - Par Titre : Recherche textuelle d'un anime.
  - Par Identifiant : Recherche directe via l'ID de l'anime.
  - Par Classement : Affichage selon le rang/pagination.
  - Par Genre(s) : Sélection multiple via des cases à cocher (*Action, Fantasy, Sci-Fi...*).
-  Thème Clair / Sombre : Basculement dynamique du thème avec sauvegarde de la préférence dans le `sessionStorage`.


---

##  Technologies Utilisées

- HTML5 :
- CSS3 :
- **JavaScript (ES6+) :** Programmation asynchrone (`async/await`), requêtes HTTP (`fetch`), manipulation du DOM et modules.
- **Tabler Icons & Google Fonts :** Pour l'iconographie et la typographie.

---

##  Structure du Projet

```text
AnimeRequester/
├── index.html                  # Page principale de l'application
├── api/
│   └── getAnimeData.js         # Module effectuant les requêtes fetch vers l'API
│   └── getAnimeGenre.js         # Module effectuant les requêtes fetch vers l'API pour avoir la liste des genres
└── assets/
    ├── js/
    │   ├── scriptSearchAnim.js # Script principal 
    │   ├── theme.js            # Script de gestion du thème Clair/Sombre
    │   └── renderer/
    │       └── cardsListRenderer.js   # Module de rendu HTML des cartes d'animes
    │       └── genreListRenderer.js   # Module de rendu HTML des checkboxs de genre
    └── style/
        ├── styleAnimeRequest.css    # Styles généraux
        ├── palette.css              # Variables CSS pour les thèmes
        └── optionTheme.css          # Style du bouton de changement de thème
