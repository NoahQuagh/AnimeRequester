# Anime Requester

https://noahquagh.github.io/AnimeRequester/

**Anime Requester** est une application web moderne et responsive permettant de rechercher des informations sur des animes en interrogeant l'API [Anime DB](https://rapidapi.com/dev132/api/anime-db) (via RapidAPI). 

L'application offre une interface dynamique avec gestion de thème (Clair/Sombre), recherche multi-critères, et une fenêtre modale sécurisée pour la gestion de la clé d'API.

---

##  Fonctionnalités

-  Recherche Multi-critères :
  - Par Titre : Recherche textuelle d'un anime.
  - Par Identifiant : Recherche directe via l'ID de l'anime.
  - Par Classement : Affichage selon le rang/pagination.
  - Par Genre(s) : Sélection multiple via des cases à cocher (*Action, Fantasy, Sci-Fi...*).
-  Gestion de la clé API : Interface modale au démarrage permettant d'entrer sa clé RapidAPI (stockée de manière temporaire dans le `sessionStorage`).
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
│   └── getAnimeData.js         # Module effectuant les requêtes fetch vers Anime DB
└── assets/
    ├── js/
    │   ├── scriptSearchAnim.js # Script principal (gestion du formulaire et des événements)
    │   ├── theme.js            # Script de gestion du thème Clair/Sombre
    │   ├── modal.js            # Script de contrôle de la modale Clé API
    │   └── renderer/
    │       └── cardsListRenderer.js # Module de rendu HTML des cartes d'animes
    └── style/
        ├── styleAnimeRequest.css    # Styles généraux
        ├── palette.css              # Variables CSS pour les thèmes
        ├── optionTheme.css          # Style du bouton de changement de thème
        └── modal.css                # Style de la fenêtre modale
