
# Audit des guides du projet Gesta à la lumière du cours Web 2

## 1. Objectif de l'audit

L'objectif de cet audit est de comparer les consignes et conventions enseignées dans le cours Web 2 avec les guides présents dans le projet Gesta.

Les fichiers examinés sont :

- `.github/copilot-instructions.md`
- `README.md`
- `docs/architecture.md`
- `backend/API.md`

Les supports du cours Web 2 (`BINV2150A-slides`) ont également été consultés afin d'identifier les attentes concernant l'architecture, l'organisation du code, TypeScript, React, les API REST, la sécurité, la validation des entrées et les tests.

## 2. Matrice de comparaison

| Attente Web 2 (source précise) | Guide examiné (fichier et passage) | Correspondance | Écart ou ajout proposé |
|---|---|---|---|
| **Organisation du code par types, données et composants** — Séance 10, `slides.md:14` : « Définir des types dans models/ », « Définir des données dans data/ », « components/ — Affichage ». | `docs/architecture.md:89` : description des dossiers `models/`, `services/`, `utils/`, `hooks/`, `components/` et `pages/`. | Oui | L'organisation du projet correspond au principe présenté en cours. |
| **Architecture MVVM côté React** — Séance 1, `slides.md:61` : mention de l'architecture MVVM. | `.github/copilot-instructions.md:58` : séparation `pages -> hooks -> services/utils -> models`. | Oui | Le guide reprend explicitement cette organisation. |
| **Responsabilité claire des composants** — Séance 8, `slides.md:313` : « Chaque composant a une responsabilité ». | `docs/architecture.md:95` : les composants sont réutilisables et les pages assemblent hooks et composants. | Oui | Il serait utile de rappeler explicitement le principe d'une responsabilité claire par composant. |
| **Typage des modèles et des props avec TypeScript** — Séance 8, `slides.md:90` et Séance 10, `slides.md:64`. | `docs/architecture.md:91` : les modèles contiennent les types des données reçues de l'API. `.github/copilot-instructions.md:51` : distinction entre DBO, objets métier et DTO. | Oui | Les guides reprennent les principes de structuration et de typage des données. |
| **Utilisation de type guards** — Séance 1, `slides.md:329` : « Type guard — Vérifier le type d'une variable pour affiner le type ». | `README.md:80` : validation par type guards écrits à la main. `docs/architecture.md:92` : validation JSON avec un type guard. | Oui | La correspondance est directe. |
| **API REST : verbes HTTP et codes de réponse** — Séance 2, `slides.md:14` : GET, POST, PUT, PATCH, DELETE et codes HTTP. | `backend/API.md:28`, `backend/API.md:176` et `backend/API.md:195` : documentation des codes et des routes. | Oui | Les méthodes et les réponses HTTP sont documentées dans le projet. |
| **Documenter et tester les routes** — Séance 2, `slides.md:407` : « Documentez l'entièreté des routes existantes » et « N'oubliez pas de mettre à jour la documentation et de tester vos routes ». | `README.md:63` : référence à `backend/API.md`. `.github/copilot-instructions.md:97` : documentation API et exemples REST à maintenir à jour. | Oui | Il serait utile de rappeler explicitement que chaque modification de route doit être accompagnée de tests. |
| **Séparer authentification et autorisation** — Séance 3, `slides.md:14` : « Authentification : Qui es-tu ? » et « Autorisation : Que peux-tu faire ? ». | `docs/architecture.md:70` : distinction entre `authenticate` et `authorize`. `.github/copilot-instructions.md:79` : contrôle des droits côté backend. | Oui | Les guides reprennent clairement cette distinction. |
| **Utiliser un token JWT pour identifier l'utilisateur et protéger les routes** — Séance 3, `slides.md:29`. | `backend/API.md:8` : utilisation de l'en-tête Authorization. `docs/architecture.md:72` : description du jeton et de sa vérification. | Oui | Le principe est documenté, avec une particularité : le mode démo du projet. |
| **Ne pas stocker les mots de passe en clair et utiliser un hash avec salt** — Séance 4, `slides.md:31` et `slides.md:395`. | `backend/API.md:15` et `README.md:117` : la connexion réelle n'est pas implémentée et le mode démo fonctionne sans mot de passe. | Partielle | Les guides signalent la limite du mode démo, mais ne décrivent pas le stockage sécurisé des mots de passe pour une future authentification réelle. |
| **Valider les entrées côté frontend et backend** — Séance 12, `slides.md:190` et `slides.md:303` : validation HTML native et nécessité de valider également côté backend. | `docs/architecture.md:41` : validation des paramètres et du corps dans les contrôleurs. `.github/copilot-instructions.md:81` : validation des entrées dans les contrôleurs et règles dans les services. | Partielle | La validation backend est documentée. La validation HTML et frontend pourrait être davantage précisée. |
| **Tester le backend** — Séance 4, `slides.md:395` : « Testez entièrement votre backend ». | `README.md:57` : commandes `npm test`, `npm run lint`, `npm run typecheck`, `npm run build` et `npm run check`. `.github/copilot-instructions.md:12` : recommandation d'utiliser `npm run check`. | Oui | Les guides définissent plusieurs contrôles automatisés pour vérifier le projet. |
| **Vérifier les données externes avec des type guards et gérer les erreurs** — Séance 17, `slides.md:340` : valeur lue de type `unknown`, type guard et `try/catch` autour de JSON.parse. | `.github/copilot-instructions.md:65` et `docs/architecture.md:92` : validation du JSON avec des type guards. | Partielle | Les type guards sont présents, mais la gestion de `unknown` et de `try/catch` n'est pas explicitement détaillée pour chaque lecture externe. |
| **Éviter les effets de bord pendant le rendu React** — Séance 17, `slides.md:332` : « Rendu pur — Pas d'effet de bord pendant le rendu ». | `.github/copilot-instructions.md:65` : les hooks gèrent les états de chargement et d'erreur et annulent les requêtes en cours. | Partielle | La gestion des hooks est documentée, mais la règle de pureté du rendu pourrait être formulée plus explicitement. |
| **Accessibilité des contrôles** — Séance 8, `slides.md:251` : exemple d'utilisation de `aria-label` pour un bouton sans texte. | Aucun passage équivalent identifié dans les quatre guides examinés. | Non | Ajouter des consignes concernant les labels des champs, les noms accessibles des boutons et la navigation au clavier. |

## 3. Synthèse des résultats

L'analyse montre que les guides du projet Gesta reprennent plusieurs conventions importantes enseignées dans le cours Web 2.

### 3.1. Points de correspondance

Les correspondances les plus importantes concernent :

- L'organisation et la séparation du code.
- L'architecture MVVM côté React.
- La séparation des responsabilités entre composants.
- L'utilisation de TypeScript et des types.
- La validation des données avec des type guards.
- La structuration et la documentation des API REST.
- La distinction entre authentification et autorisation.
- La mise en place de tests et de contrôles automatisés.

### 3.2. Points partiellement couverts

Certains éléments sont seulement partiellement repris dans les guides :

- **Authentification :** le projet utilise actuellement un mode démo sans mot de passe. Les guides signalent cette limite, mais ne décrivent pas une future authentification réelle avec stockage sécurisé des mots de passe.
- **Validation des entrées :** la validation côté backend est documentée, mais les règles de validation côté frontend pourraient être davantage précisées.
- **Gestion des données externes :** les type guards sont mentionnés, mais la gestion de `unknown` et des erreurs pourrait être explicitée.
- **React :** la gestion des hooks est documentée, mais la règle de pureté du rendu pourrait être formulée plus clairement.

### 3.3. Éléments absents

Aucune consigne générale concernant l'accessibilité n'a été identifiée dans les quatre guides examinés.

Le cours présente pourtant un exemple d'utilisation de `aria-label` pour un bouton sans texte.

Il serait donc pertinent d'ajouter des recommandations concernant les labels des champs, les noms accessibles des boutons et la navigation au clavier.

## 4. Recommandations

À la suite de cet audit, plusieurs améliorations pourraient être envisagées :

1. **Validation des formulaires :** préciser que les données doivent être vérifiées côté frontend et côté backend.
2. **Accessibilité :** ajouter des consignes concernant les labels des champs, les noms accessibles des boutons et la navigation au clavier.
3. **React :** rappeler que le rendu des composants doit rester pur et que les effets de bord doivent être gérés dans les hooks appropriés.
4. **Sécurité :** préciser les exigences à respecter lorsqu'une authentification réelle sera implémentée, notamment concernant le stockage sécurisé des mots de passe.
5. **Tests et documentation :** rappeler que toute modification d'une route API doit conduire à vérifier les tests et à mettre à jour la documentation correspondante.

Ces recommandations visent à améliorer les instructions données à GitHub Copilot sans modifier les conventions déjà correctement documentées.

## 5. Limites de l'audit

Cet audit porte sur les consignes écrites dans les quatre guides examinés et sur les supports du cours Web 2 consultés.

Une correspondance entre une consigne du cours et un guide ne garantit pas que la pratique est effectivement respectée dans tout le code du projet.

De même, l'absence d'une consigne dans les guides ne signifie pas nécessairement que la pratique est absente du code.

Les constats sont donc limités aux documents examinés.

## 6. Conclusion

Dans l'ensemble, les guides de Gesta sont cohérents avec plusieurs principes enseignés en Web 2, notamment en matière d'architecture, de React, de TypeScript, d'API REST, de sécurité et de tests.

L'audit met néanmoins en évidence plusieurs possibilités d'amélioration, en particulier concernant l'accessibilité, la validation frontend et certaines règles React.

Les guides constituent une base utile pour orienter le travail de GitHub Copilot, mais certaines consignes gagneraient à être formulées plus explicitement.

Aucun fichier de guide ni aucun code source n'a été modifié dans le cadre de cet audit.
