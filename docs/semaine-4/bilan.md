# Semaine 8 — Bilan du harnais agentique

## 1. Inventaire des guides et des senseurs

### Guides — feedforward

| Catégorie | Mécanisme | Emplacement | Rôle et exemple | Vérification |
|---|---|---|---|---|
| Guide inférentiel | Instructions Copilot | `.github/copilot-instructions.md` | Oriente l'agent sur l'architecture, les conventions TypeScript, la sécurité, les tests et la documentation. Exemple : les droits doivent rester vérifiés côté backend (`.github/copilot-instructions.md:79-80`). | Configuré et consulté ; ce n'est pas un contrôle automatisé. |
| Guide inférentiel | README du projet | `README.md` | Décrit l'installation, les commandes, les choix techniques et les limites du projet. Exemple : `npm run check` lance lint, typecheck, tests et build (`README.md:51-61`). | Configuré et consulté ; le document n'est pas exécuté comme un contrôle. |
| Guide inférentiel | Documentation d'architecture | `docs/architecture.md` | Décrit les couches backend, l'organisation MVVM frontend et les responsabilités des dossiers. Exemple : `controllers -> services -> repositories -> SQLite` (`docs/architecture.md:24-49`). | Configurée et consultée ; elle guide l'implémentation mais ne produit pas directement un résultat. |
| Guide inférentiel | Documentation API | `backend/API.md` | Décrit les routes, les formats JSON, l'authentification et les codes d'erreur. Exemple : `GET /applications` retourne les candidatures de l'étudiant connecté (`backend/API.md:195-228`). | Configurée et consultée ; vérifiée par comparaison avec les tests, pas exécutée seule. |
| Guide inférentiel | Modèle de pull request | `.github/pull_request_template.md` | Demande notamment de lancer `npm run check`, d'ajouter des tests et de maintenir l'API à jour. | Configuré ; aucune pull request n'a été évaluée pendant cette séance. |

### Senseurs — feedback

| Catégorie | Mécanisme | Emplacement ou outil | Rôle et exemple de résultat | Vérification |
|---|---|---|---|---|
| Senseur computationnel | Oxlint | `backend/.oxlintrc.json`, `frontend/.oxlintrc.json`, scripts `lint` | Vérifie les règles TypeScript, React Hooks, `eqeqeq` et l'interdiction de `any` explicite. | Exécuté avec `npm run lint` : réussite. |
| Senseur computationnel | TypeScript | Scripts `typecheck` de `backend/package.json` et `frontend/package.json` | Vérifie la cohérence statique du backend et du frontend. | Exécuté avec `npm run typecheck` : réussite. |
| Senseur computationnel | Tests backend | `backend/tests/`, Vitest et Supertest | Vérifie les routes et les règles métier sur une base SQLite en mémoire. | Exécuté : 10 fichiers et 138 tests réussis avant l'ajout du test EF-33 ; le test ciblé ajouté ensuite réussit également. |
| Senseur computationnel | Tests frontend | `frontend/tests/`, Vitest, jsdom et Testing Library | Vérifie le rendu et les interactions React. | Exécuté avec `npm test` : 8 fichiers et 52 tests réussis lors de la vérification initiale. |
| Senseur computationnel | Build | Scripts `build` backend et frontend | Compile TypeScript, construit Vite et copie les migrations backend. | Configuré mais non exécuté dans cette séance ; la commande peut produire des fichiers générés. |
| Senseur inférentiel | Revue de code IA automatisée | Aucun mécanisme dédié trouvé | Aucune revue IA ou workflow de revue automatique n'est configuré dans le dépôt. | Case vide. |

### Cases vides

- Aucun `AGENTS.md` trouvé.
- Aucun générateur de code ou mécanisme de codegen trouvé.
- Aucun senseur de revue de code IA automatisé trouvé.

## 2. Couverture des exigences EF-32 et EF-33

La matrice détaillée se trouve dans
[`couverture-exigences-fonctionnelles.md`](./couverture-exigences-fonctionnelles.md).

Les principaux constats sont :

- EF-32 est couvert par les tests de création, de retrait, de refus et de réinscription.
- EF-33 est couvert pour les quatre codes de statut API :
  `IN_PROGRESS`, `SELECTED`, `REJECTED` et `WITHDRAWN`.
- L'isolement entre étudiants est vérifié par `ne mélange pas les candidatures de deux étudiants`.
- Les libellés français sont vérifiés séparément dans
  `frontend/tests/ApplicationsPage.test.tsx`, test `affiche les quatre statuts en français`.
- Les tests de seed vérifient la présence des statuts dans les données, mais ne remplacent pas les tests de restitution de l'API.

## 3. Modifications et vérification

### Modification réalisée

Dans `backend/tests/applications.test.ts`, le test
`retourne les statuts retenue et non retenue de l'étudiant connecté` a été ajouté.

Il :

1. crée une base de test en mémoire avec `createTestDatabase()` ;
2. prépare deux candidatures appartenant à Mateusz, une `SELECTED` et une `REJECTED` ;
3. appelle `GET /applications` avec son jeton étudiant ;
4. vérifie le code HTTP `200` ;
5. vérifie que les deux candidatures attendues et les deux statuts sont présents.

Le défaut ciblé était une route qui répondrait `200` mais omettrait `SELECTED` ou `REJECTED`,
ou retournerait la candidature d'un autre étudiant. Les assertions sur la longueur, les
identifiants et les statuts feraient échouer le test dans ces cas.

### Commandes et résultats

| Commande | Résultat |
|---|---|
| `npm run lint` | Réussite pour le backend et le frontend lors de la vérification initiale. |
| `npm run typecheck` | Réussite pour le backend et le frontend lors de la vérification initiale. |
| `npm test` | Backend : 10 fichiers et 138 tests réussis ; frontend : 8 fichiers et 52 tests réussis lors de la vérification initiale. |
| `npm exec vitest run backend/tests/applications.test.ts` | Après l'ajout et la correction du test : 1 fichier et 22 tests réussis. |
| `npm run check` | Non exécuté après l'ajout du test ; le bilan le signale explicitement plutôt que d'inventer un résultat. |

### Limites

- Le build complet n'a pas été exécuté dans cette séance de vérification ; sa réussite n'est donc pas affirmée.
- Les tests API vérifient les codes anglais des statuts. Les libellés français sont vérifiés par un test frontend distinct.
- La réussite des tests ne prouve pas la couverture de toutes les exigences du cahier des charges.
- Le mode démo est sans mot de passe ; il ne constitue pas une authentification de production.

## 4. Audit des guides à la lumière de Web 2

L'audit complet se trouve dans
[`audit-guides-web2.md`](./audit-guides-web2.md).

Il conclut notamment que les guides couvrent :

- l'organisation du code et l'architecture MVVM ;
- le typage TypeScript et les type guards ;
- les conventions REST et la documentation d'API ;
- la séparation authentification/autorisation ;
- les tests et contrôles automatisés.

Les principaux écarts ou couvertures partielles concernent :

- l'authentification réelle avec mots de passe hachés ;
- la validation frontend en complément de la validation backend ;
- la pureté du rendu React et la gestion détaillée des données externes ;
- l'accessibilité, absente des guides examinés.

## 5. Activité optionnelle

Le senseur d'architecture optionnel n'a pas été réalisé. Aucun mécanisme d'architecture
supplémentaire n'est donc proposé dans ce bilan.

## Conclusion

Le dépôt contient des guides feedforward et des senseurs computationnels réels. La couverture
EF-33 a été complétée pour les quatre statuts de candidature, puis vérifiée par le test backend
ciblé. Les limites et les contrôles non exécutés sont signalés explicitement.
