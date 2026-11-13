User: voici la première partie de la consigne du travail de cette semainen"Semaine 8 — Harnais agentique : guider et
vérifier
Objectif de la séance
Un harnais agentique combine deux familles de mécanismes : les guides, qui orientent l’agent
avant et pendant son travail (feedforward), et les senseurs, qui lui donnent un retour sur le
résultat produit (feedback). Vous allez examiner les deux dans votre projet : vérifier ce que
les tests contrôlent, puis évaluer si les guides reflètent les consignes et conventions vues en
développement Web 2.
À la fin de la séance, vous devez pouvoir distinguer une instruction d’un contrôle, étayer vos
constats en consultant les fichiers et les résultats, et signaler les limites de votre analyse.
Déroulement
1. Repérer les guides et les senseurs
Avec GitHub Copilot, explorez le dépôt et repérez les guides et senseurs présents. Un guide
donne à l’agent des consignes en amont; un senseur observe le code ou son comportement et
produit un retour.
Classez les mécanismes dans cette matrice :
Guide — feedforward
Senseur — feedback
Inférentiel (interprété par
une IA)
Computationnel (règles ou
calculs exécutables)
Ex. AGENTS.md
Ex. générateur de code
Ex. revue de code par une IA
Ex. tests, compilation, linter
Pour chaque mécanisme réellement présent :
— indiquez son nom et le fichier ou l’outil correspondant;
— résumez ce qu’il demande, impose ou vérifie;
— donnez un exemple concret de règle ou de résultat;
— précisez s’il a été exécuté et vérifié pendant la séance, ou s’il est seulement décrit ou
configuré.
Ne remplissez pas artificiellement les quatre cases. Vous pouvez utiliser Copilot pour trouver et
résumer les éléments, mais ouvrez les fichiers et vérifiez ses affirmations.". Analyse le dépôt Gesta afin d'identifier les guides et les senseurs réellement présents.

Je travaille sur le point 1 d'un travail universitaire portant sur le harnais agentique.

Identifie :

1. Les guides feedforward : instructions Copilot, AGENTS.md, README, documentation ou autres consignes destinées à guider l'agent.
2. Les senseurs feedback inférentiels : mécanismes de revue ou d'analyse du code par une IA, s'ils existent.
3. Les guides computationnels : générateurs ou mécanismes exécutables qui orientent la production du code, s'ils existent.
4. Les senseurs computationnels : tests, lint, typecheck, build et autres contrôles automatisés.
Pour chaque mécanisme :

- Donne son nom exact.
- Indique son chemin de fichier ou son outil.
- Résume son rôle.
- Donne un exemple concret de règle ou de résultat.
- Indique s'il est configuré, exécuté ou effectivement vérifié.
Ne suppose pas qu'un mécanisme existe simplement parce qu'il est courant dans un projet.
N'invente aucun fichier ni résultat.
Signale les cases vides.
Ne modifie aucun fichier.

Présente les résultats sous forme de tableau.

Copilot: Je vais vérifier directement les fichiers de consignes, les configurations et les scripts de validation, puis distinguer ce qui est seulement configuré de ce qui a réellement été exécuté.

Ran terminal command: Get-ChildItem -Force -Recurse -File | Where-Object { $_.FullName -notmatch '\\node_modules\\|\\.git\\' } | Select-Object -ExpandProperty FullName

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\README.md"
}

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\package.json"
}

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\backend\\package.json"
}

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\frontend\\package.json"
}

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\.github\\copilot-instructions.md"
}

Read [](), lines 1 to 220
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\README.md",
  "view_range": [
    1,
    220
  ]
}

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\backend\\vitest.config.ts"
}

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\backend\\tsconfig.json"
}

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\frontend\\vite.config.ts"
}

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\frontend\\tsconfig.json"
}

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\.vscode\\settings.json"
}

Search for `AGENTS\.md|copilot|eslint|prettier|oxlint|vitest|test|typecheck|build|lint|ge...`

Les fichiers montrent déjà une matrice partiellement remplie : des consignes Copilot et des contrôles npm sont présents, tandis qu’aucun générateur de code ni mécanisme de revue IA dédié n’est encore établi. Je vérifie maintenant les configurations exactes et les résultats d’exécution, sans lancer le build qui pourrait produire des fichiers.

Read [](), lines 130 to 155
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\docs\\architecture.md",
  "view_range": [
    130,
    155
  ]
}

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\.github\\pull_request_template.md"
}

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\frontend\\.oxlintrc.json"
}

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\backend\\.oxlintrc.json"
}

Ran terminal command: git -C C:\3BIN\IA\projet\workspace\BINV32201-groupe-05 status --short --branch

Ran terminal command: Get-ChildItem -Force -Recurse -File | Where-Object { $_.Name -match '^(AGENTS\.md|.*instructions.*|.*prompt.*|.*agent.*|.*codegen.*|.*generate.*)$' -or $_.FullName -match '\\.github\\' } | Select-Object -ExpandProperty FullName

Ran terminal command: npm run typecheck

Ran terminal command: npm run lint

Ran terminal command: npm test

La première tentative de validation a échoué avant tout contrôle parce que le répertoire courant est le workspace parent, alors que `package.json` se trouve dans le sous-dossier du dépôt. Je relance les mêmes commandes depuis la racine réelle du projet; cet échec est donc un problème de chemin, pas un résultat du code.

Ran terminal command: Set-Location C:\3BIN\IA\projet\workspace\BINV32201-groupe-05; npm run lint

Ran terminal command: Set-Location C:\3BIN\IA\projet\workspace\BINV32201-groupe-05; npm run typecheck

Ran terminal command: Set-Location C:\3BIN\IA\projet\workspace\BINV32201-groupe-05; npm test

Ran terminal command: git -C C:\3BIN\IA\projet\workspace\BINV32201-groupe-05 status --short --branch

Search for `^`

Search for `^(  )?"(setup|build|lint|typecheck|test|check)"|npm run check|Oxlint|Vitest|n...`

Search for `^#|^##|npm run|Oxlint|Vitest|Vérification|Compilation`

Search for `"(build|lint|typecheck|test)"|oxlint|vitest|tsc`

Search for `AGENTS\.md|codegen|code generation|génér|scaffold|review agent|AI review|Copi...`

## Analyse du harnais agentique de Gesta

Analyse réalisée à partir des fichiers présents dans le dépôt et de l’exécution des commandes disponibles. Aucun fichier n’a été modifié.

| Catégorie | Mécanisme exact | Fichier ou outil | Rôle | Exemple concret | État vérifié |
|---|---|---|---|---|---|
| **Guide feedforward — inférentiel** | Instructions Copilot | [`copilot-instructions.md`]() | Donne à l’agent les conventions d’architecture, de sécurité, d’imports TypeScript, de tests et de validation. | Les imports backend relatifs doivent utiliser l’extension `.ts`; les droits doivent être vérifiés côté backend. | **Configuré** dans le dépôt. Utilisé comme guide par Copilot, mais pas mesurable comme un test automatisé. |
| **Guide feedforward — inférentiel** | README du projet | [`README.md`]() | Guide les développeurs et l’agent sur l’installation, les commandes, l’architecture et les choix techniques. | `npm run check` doit exécuter le lint, le typecheck, les tests et le build. | **Configuré et consultable**; aucune exécution complète du README lui-même. |
| **Guide feedforward — inférentiel** | Documentation d’architecture et de contrats API | [`docs/architecture.md`](), [`backend/API.md`]() | Décrit les couches du système, les flux, les routes et les formats de réponse attendus. | Le backend suit le flux middleware → contrôleur → service → repository → SQLite. | **Configuré comme documentation** et référencé par les instructions Copilot; non exécuté. |
| **Guide feedforward — inférentiel** | Modèle de pull request | [`pull_request_template.md`]() | Oriente la vérification humaine avant une contribution. | La checklist demande que `npm run check` passe et que les tests couvrent les erreurs 400, 401, 403 et 404. | **Configuré**, mais aucune pull request n’a été évaluée pendant cette séance. |
| **Guide feedforward — inférentiel** | `AGENTS.md` | Aucun fichier trouvé | Ce type de guide n’est pas présent dans le dépôt. | — | **Case vide**. |
| **Senseur feedback — inférentiel** | Revue de code par une IA | Aucun mécanisme dédié trouvé | Aucun fichier ou workflow ne configure une revue automatique par IA. | Les instructions parlent de travail avec un agent, mais ne constituent pas une revue IA automatique. | **Case vide**; aucune revue IA du dépôt n’a été exécutée. |
| **Guide feedforward — computationnel** | Générateur ou codegen | Aucun générateur de code trouvé | Aucun outil ne produit automatiquement du code à partir d’un schéma ou d’un modèle. | Les scripts de base de données créent ou réinitialisent SQLite, mais ne génèrent pas du code source. | **Case vide**. |
| **Senseur feedback — computationnel** | Oxlint backend | [`backend/.oxlintrc.json`](), script `lint` de [`backend/package.json`]() | Vérifie les règles JavaScript/TypeScript, l’usage de `any`, `eqeqeq` et les règles Node. | `oxlint --deny-warnings`. | **Exécuté** avec `npm run lint`; réussite, aucune erreur affichée. |
| **Senseur feedback — computationnel** | Oxlint frontend | [`frontend/.oxlintrc.json`](), script `lint` de [`frontend/package.json`]() | Vérifie notamment les règles React Hooks, les dépendances d’effets et l’usage de `any`. | `react/rules-of-hooks` et `react/exhaustive-deps`. | **Exécuté** avec `npm run lint`; réussite, aucune erreur affichée. |
| **Senseur feedback — computationnel** | TypeScript backend et frontend | Scripts `typecheck` des [`backend/package.json`]() et [`frontend/package.json`]() | Vérifie la cohérence statique du code TypeScript. | Backend : `tsc --noEmit`; frontend : `tsc -b`. | **Exécuté** avec `npm run typecheck`; réussite pour les deux workspaces. |
| **Senseur feedback — computationnel** | Tests backend | [`backend/vitest.config.ts`](), répertoire [`backend/tests/`]() | Vérifie les routes, les permissions, les services et la base SQLite en mémoire avec Vitest/Supertest. | Résultat observé : **10 fichiers de test, 138 tests réussis**. | **Exécuté et vérifié** avec `npm test`. |
| **Senseur feedback — computationnel** | Tests frontend | Configuration de test dans [`frontend/vite.config.ts`](), répertoire [`frontend/tests/`]() | Vérifie les pages et composants React avec Vitest, jsdom et Testing Library. | Résultat observé : **8 fichiers de test, 52 tests réussis**. | **Exécuté et vérifié** avec `npm test`. |
| **Senseur feedback — computationnel** | Build | Scripts `build` des [`backend/package.json`]() et [`frontend/package.json`]() | Compile TypeScript, construit le frontend Vite et copie les migrations backend. | Backend : `tsc -p tsconfig.build.json`; frontend : `tsc -b && vite build`. | **Configuré mais non exécuté** pendant cette analyse, afin de ne pas produire de fichiers générés. |
| **Senseur feedback — computationnel** | Commande globale `check` | [`package.json`]() | Orchestre lint, typecheck, tests et build. | `npm run lint && npm run typecheck && npm run test && npm run build`. | **Configurée mais non exécutée intégralement**; les trois contrôles sans build ont été exécutés séparément. |

### Cases vides

- **Senseur inférentiel** : aucun mécanisme de revue ou d’analyse IA automatisé n’est configuré dans le dépôt.
- **Guide computationnel** : aucun générateur de code ou mécanisme de génération automatique de code n’a été identifié.
- **`AGENTS.md`** : absent du dépôt.

### Limites de l’analyse

Le lint, le typecheck et les tests ont été exécutés avec succès. Le build complet et la commande globale `npm run check` n’ont pas été exécutés, car le build peut produire des fichiers générés; leur configuration a seulement été vérifiée dans les scripts npm.

User: voici le deuxième point de la consigne "2. Première partie — Examiner les senseurs : couverture des tests
Le projet contient déjà des tests. Leur réussite ne prouve pas qu’ils couvrent toutes les exigences.
Construisez une matrice de traçabilité entre les exigences travaillées la séance précédente et les
tests qui les vérifient réellement.
Partir des exigences
Relisez le cahier des charges, en particulier EF-32 (candidater et retirer sa candidature) et
EF-33 (consulter ses candidatures et leur statut). Découpez-les en cas précis, avec le résultat
attendu : cas normaux, refus et limites. Par exemple, une offre non publiée ne doit pas accepter
de candidature et un étudiant ne doit pas voir les candidatures d’un autre.
Relier les tests aux cas
Explorez les tests existants, notamment les tests d’API s’il y en a. Pour chaque cas, relevez le
fichier, le nom du test et les assertions qui vérifient le résultat attendu.
Exigence
Cas à vérifier
Test existant
(fichier et nom)
Assertions utiles Couverture
EF-32
EF-33
Refuser une
candidature à
une offre non
publiée
Un étudiant ne
voit que ses
candidatures
…
…
…
…
Couvert /
Partiel / Absent
Couvert /
Partiel / Absent
Un cas est couvert seulement si les assertions portent effectivement sur son résultat attendu.
Un test qui appelle une route et reçoit une réponse ne suffit pas nécessairement. Notez aussi les
comportements testés qui ne correspondent pas à EF-32 ou EF-33, sans les rattacher à une
exigence au hasard.
Traiter les manques
Repérez les cas absents ou partiellement couverts. Choisissez les manques les plus importants
et ajoutez ou améliorez des tests avec les outils déjà utilisés dans le projet. Privilégiez les
vérifications possibles au niveau de l’API et du backend. Il n’est pas demandé de créer des
tests end-to-end ni de refaire toute la suite. Si un cas ne peut pas être vérifié avec les tests
disponibles, signalez cette limite et indiquez comment vous l’avez vérifié manuellement, le cas
échéant.
Lancez npm run check après vos modifications et relevez le résultat de chaque contrôle. Pour
un test ajouté, expliquez quel défaut" , Analyse le projet Gesta sans modifier aucun fichier.

Je dois réaliser une matrice de traçabilité entre les exigences EF-32 et EF-33 du cahier des charges et les tests automatisés existants.

1. Lis les exigences EF-32 et EF-33 dans `docs/cdc_gesta_developpement.md`.
2. Identifie tous les cas précis à vérifier pour chacune.
3. Explore les tests existants, en particulier les tests API et backend.
4. Pour chaque cas, indique :

- Le fichier de test.
- Le nom exact du test.
- Les assertions qui vérifient le comportement attendu.
- Le résultat attendu.
- Le niveau de couverture : Couvert, Partiel ou Absent.
5. Distingue les tests qui vérifient réellement le résultat attendu de ceux qui vérifient seulement qu'une route répond.
6. Identifie également les tests existants qui ne correspondent ni à EF-32 ni à EF-33.
N'invente aucun test ni aucune assertion.
Cite les chemins et les noms exacts.
Ne modifie aucun fichier.

Présente les résultats dans un tableau.

Copilot: Je vais relever les formulations exactes d’EF-32/EF-33, puis confronter chaque cas aux tests et assertions réellement présents, sans exécuter ni modifier le projet.

Search for `EF-32|EF-33`

Find files matching `backend/tests/**/*.ts`

Search for `application|candidatur|withdraw|retir|status|statut|offers`

Search for `describe\(|it\(|test\(`

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\backend\\tests\\applications.test.ts"
}

Read [](), lines 1 to 210
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\backend\\tests\\offers.test.ts",
  "view_range": [
    1,
    210
  ]
}

Read [](), lines 85 to 110
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\backend\\tests\\db\\seed.test.ts",
  "view_range": [
    85,
    110
  ]
}

Read [](), lines 1 to 240
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\backend\\tests\\helpers\\testApp.ts",
  "view_range": [
    1,
    240
  ]
}

Read [](), lines 165 to 250
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\backend\\tests\\db\\constraints.test.ts",
  "view_range": [
    165,
    250
  ]
}

Search for `it\(|expect\(`

Search for `it\(|expect\(`

Search for `applications|candidatur|withdraw|GET /applications|POST /offers/:offerId/appl...`

## 1. Exigences examinées

| Exigence | Formulation exacte |
|---|---|
| EF-32 | L’étudiant candidate à une offre publiée, avec un message facultatif. Il peut retirer sa candidature tant qu’elle n’a pas été traitée. |
| EF-33 | L’étudiant voit ses candidatures et leur statut : « En cours », « Retenue », « Non retenue » ou « Retirée ». |

Source : [docs/cdc_gesta_developpement.md:203-206]()

## 2. Matrice de traçabilité

| Exigence | Cas à vérifier | Test existant | Assertions utiles | Résultat attendu | Couverture |
|---|---|---|---|---|---|
| EF-32 | Un étudiant peut candidater à une offre publiée | [`applications.test.ts`](), `crée une candidature avec un message facultatif` | `response.status` vaut `201`; le corps contient `offerId`, le message et `status: "IN_PROGRESS"` | La candidature est créée avec le statut En cours | **Couvert** |
| EF-32 | Le message est facultatif | [`applications.test.ts`](), `accepte une candidature sans message` | `response.status` vaut `201`; `response.body.message` vaut `null` | Une candidature sans message est acceptée | **Couvert** |
| EF-32 | Une candidature à une offre non publiée est refusée | [`applications.test.ts`](), `refuse une offre qui n'est pas publiée` | `response.status` vaut `400`; code `INVALID_STATE` | La candidature est refusée | **Couvert** |
| EF-32 | Une offre inexistante est refusée | [`applications.test.ts`](), `retourne 404 pour une offre inconnue` | `response.status` vaut `404`; code `NOT_FOUND` | L’API signale que l’offre n’existe pas | **Couvert** |
| EF-32 | Seul un étudiant peut candidater | [`applications.test.ts`](), `refuse les profils non étudiants` | `response.status` vaut `403`; code `FORBIDDEN` | Un administrateur ne peut pas candidater | **Couvert** |
| EF-32 | Une candidature en cours peut être retirée | [`applications.test.ts`](), `retire sa candidature en cours sans supprimer la ligne` | Réponse `200`; statut `WITHDRAWN`; nouvelle consultation contenant la candidature avec `id: 1` et `status: "WITHDRAWN"` | La candidature devient Retirée et reste consultable | **Couvert** |
| EF-32 | Un étudiant peut retirer uniquement sa propre candidature | [`applications.test.ts`](), cas `d'un autre étudiant` | `response.status` vaut `404` | L’existence de la candidature d’un autre étudiant n’est pas révélée | **Couvert** |
| EF-32 | Une candidature retenue ne peut plus être retirée | [`applications.test.ts`](), cas `retenue` | `response.status` vaut `409` | Le retrait est refusé après traitement | **Couvert** |
| EF-32 | Une candidature non retenue ne peut plus être retirée | [`applications.test.ts`](), cas `non retenue` | `response.status` vaut `409` | Le retrait est refusé après traitement | **Couvert** |
| EF-32 | Une candidature déjà retirée ne peut pas être retirée une seconde fois | [`applications.test.ts`](), cas `déjà retirée` | `response.status` vaut `409` | Le retrait répétitif est refusé | **Couvert** |
| EF-32 | Une nouvelle candidature est possible après un retrait | [`applications.test.ts`](), `autorise une nouvelle candidature après un retrait` | `response.status` vaut `201`; `offerId` attendu | Une candidature retirée ne bloque pas une nouvelle candidature | **Couvert** |
| EF-32 | Les erreurs d’authentification et d’autorisation sont contrôlées | [`applications.test.ts`](), `refuse les profils non étudiants et les requêtes sans session` | Sans session : `401`; administrateur : `403` | Les accès non autorisés sont refusés | **Couvert** |
| EF-33 | Un étudiant voit ses propres candidatures | [`applications.test.ts`](), `retourne uniquement les candidatures de l'étudiant connecté` | Réponse `200`; longueur `2`; vérification des `offerId`; vérification des statuts `IN_PROGRESS` et `WITHDRAWN`; absence de `studentId` | L’étudiant reçoit ses candidatures et leurs statuts | **Couvert pour ces données** |
| EF-33 | Un étudiant ne voit pas les candidatures d’un autre étudiant | [`applications.test.ts`](), `ne mélange pas les candidatures de deux étudiants` | Chaque étudiant reçoit une seule candidature; `offerId` différents et attendus | Les résultats sont isolés par étudiant | **Couvert** |
| EF-33 | Le statut En cours est renvoyé | [`applications.test.ts`]() | Présence de `IN_PROGRESS` dans les statuts retournés | Le statut est exposé par l’API | **Couvert** |
| EF-33 | Le statut Retirée est renvoyé | [`applications.test.ts`](), puis lignes 86-98 | Présence de `WITHDRAWN`; vérification après retrait | Le statut est exposé par l’API | **Couvert** |
| EF-33 | Les statuts Retenue et Non retenue sont renvoyés par `GET /applications` | Aucun test API identifié | Les tests de consultation ne vérifient que `IN_PROGRESS` et `WITHDRAWN` | L’API devrait retourner `SELECTED` et `REJECTED` | **Partiel** |
| EF-33 | Les libellés français affichés sont « En cours », « Retenue », « Non retenue », « Retirée » | Aucun test d’interface identifié dans ce périmètre | Les tests API vérifient les codes anglais (`IN_PROGRESS`, `WITHDRAWN`), pas les libellés affichés | Les libellés devraient être correctement traduits dans l’interface | **Absent** |

## 3. Tests liés aux candidatures mais ne vérifiant pas directement EF-32 ou EF-33

| Fichier et test | Ce qui est vérifié | Relation avec EF-32/EF-33 |
|---|---|---|
| [`applications.test.ts:172`](), `bloque tout doublon non retiré, quel que soit son statut` | Refus d’une deuxième candidature avec le code `APPLICATION_EXISTS` | Règle métier supplémentaire, non explicitement formulée dans EF-32 ou EF-33 |
| [`applications.test.ts:195`](), `valide le corps et la longueur du message` | Refus d’un message vide ou de plus de 2 000 caractères | Validation technique du champ facultatif, mais limite non indiquée par EF-32 |
| [`db/seed.test.ts:20`](), `respecte les volumes du cahier des charges` | Vérifie notamment le nombre minimal de candidatures | Vérifie les données de démonstration, pas le comportement des routes |
| [`db/seed.test.ts:93`](), `couvre tous les statuts de candidature et une offre à plusieurs candidats` | Vérifie que le seed contient les quatre statuts | Prépare les données de test, mais ne vérifie pas que l’API les restitue correctement |
| [`db/seed.test.ts:157`](), `le stage issu d'une offre correspond à l'offre attribuée et à la candidature retenue` | Cohérence entre stage, offre et candidature retenue | Concerne surtout les règles de stage et de sélection, pas EF-32/EF-33 |

Les autres suites backend — [auth.test.ts](), [companies.test.ts](), [health.test.ts](), [offers.test.ts](), [permissions.test.ts](), ainsi que les tests de migrations et de contraintes — vérifient d’autres fonctionnalités et ne sont pas rattachées à EF-32 ou EF-33.

## 4. Limites constatées

- Les tests API vérifient principalement les codes de statut anglais, pas l’affichage des libellés français.
- Le seed contient bien les quatre statuts (`IN_PROGRESS`, `SELECTED`, `REJECTED`, `WITHDRAWN`), mais aucun test ne vérifie que les quatre sont retournés par `GET /applications`.
- Les tests vérifient des résultats précis; ils ne se limitent donc pas à constater qu’une route répond.
- Aucun fichier n’a été modifié et aucun nouveau test n’a été ajouté.

User: Analyse les tests frontend qui concernent EF-33 (consultation des candidatures et affichage de leur statut).

Je veux savoir si les quatre statuts suivants sont testés dans l'interface :

- IN_PROGRESS : En cours
- SELECTED : Retenue
- REJECTED : Non retenue
- WITHDRAWN : Retirée
Pour chaque statut, indique :

1. Le fichier de test.
2. Le nom exact du test.
3. Les assertions qui vérifient le libellé affiché.
4. Si le cas est couvert, partiellement couvert ou absent.
Si aucun test ne vérifie ces libellés, indique-le clairement.

Ne modifie aucun fichier. Je veux uniquement une analyse fondée sur les tests réellement présents dans le dépôt.

Copilot: Je vais rechercher les tests frontend et le code d’affichage des candidatures/statuts, puis vérifier les assertions exactes sans modifier le dépôt.

Search for `IN_PROGRESS|SELECTED|REJECTED|WITHDRAWN|En cours|Retenue|Non retenue|Retirée|...`

Find files matching `frontend/tests/**/*.{ts,tsx}`

Find files matching `frontend/src/**/*.{ts,tsx}`

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\frontend\\tests\\ApplicationsPage.test.tsx"
}

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\frontend\\src\\pages\\ApplicationsPage.tsx"
}

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\frontend\\src\\models\\application.ts"
}

Search for `APPLICATION_STATUS_LABELS|Retenue|Non retenue|Retirée|En cours`

## Analyse des tests frontend pour EF-33

Un seul test frontend vérifie explicitement les quatre statuts :

- Fichier : [`frontend/tests/ApplicationsPage.test.tsx:19`]()
- Nom exact : `affiche les quatre statuts en français`

| Statut API | Libellé attendu | Assertion exacte | Couverture |
|---|---|---|---|
| `IN_PROGRESS` | `En cours` | `expect(await screen.findByText("En cours")).toBeInTheDocument();` | **Couvert** |
| `SELECTED` | `Retenue` | `expect(screen.getByText("Retenue")).toBeInTheDocument();` | **Couvert** |
| `REJECTED` | `Non retenue` | `expect(screen.getByText("Non retenue")).toBeInTheDocument();` | **Couvert** |
| `WITHDRAWN` | `Retirée` | `expect(screen.getByText("Retirée")).toBeInTheDocument();` | **Couvert** |

Le test fournit effectivement les quatre statuts à l’interface :

```ts
application("IN_PROGRESS", 1),
application("SELECTED", 2),
application("REJECTED", 3),
application("WITHDRAWN", 4),
```

Puis il vérifie la présence des quatre libellés français dans le DOM.

## Autre test frontend pertinent

| Fichier et test | Vérification | Couverture EF-33 |
|---|---|---|
| [`frontend/tests/ApplicationsPage.test.tsx:36`](), `permet de retirer uniquement une candidature en cours` | Vérifie la présence du libellé `En cours` et d’un bouton `Retirer` | **Partiel** : confirme l’affichage du statut `IN_PROGRESS`, mais ne vérifie pas les quatre statuts |

## Conclusion

Les quatre libellés sont testés dans l’interface par le test `affiche les quatre statuts en français`. Aucun des quatre statuts n’est donc absent ou seulement partiellement couvert pour la vérification de son libellé d’affichage.

Le mapping utilisé par l’interface est défini dans [`frontend/src/utils/labels.ts:8-12`](). Aucun fichier n’a été modifié.

User: Dans le fichier backend/tests/applications.test.ts, analyse précisément la couverture de EF-33 concernant la consultation des candidatures.

Je veux savoir si la route GET /applications est testée avec les quatre statuts :

- IN_PROGRESS
- SELECTED
- REJECTED
- WITHDRAWN
Vérifie les tests existants et leurs assertions.

Indique :

1. Quels statuts sont effectivement vérifiés dans la réponse de GET /applications.
2. Quels statuts sont absents des assertions de consultation.
3. Si les tests existants qui manipulent SELECTED et REJECTED vérifient réellement leur restitution par GET /applications ou s'ils vérifient uniquement d'autres comportements.
Ne modifie aucun fichier. Appuie chaque constat sur le nom exact du test et les assertions présentes.

Copilot: ## Couverture de `GET /applications` pour EF-33

Fichier analysé : [`backend/tests/applications.test.ts`]()

| Statut | Vérifié dans la réponse de `GET /applications` ? | Preuve |
|---|---|---|
| `IN_PROGRESS` | Oui | Test `retourne uniquement les candidatures de l'étudiant connecté` : l’assertion vérifie `["IN_PROGRESS", "WITHDRAWN"]` via `response.body.map(...status)`. |
| `WITHDRAWN` | Oui | Même test : le tableau attendu contient `WITHDRAWN`. Le test `retire sa candidature en cours sans supprimer la ligne` vérifie aussi après consultation `mine.body[0]` avec `status: "WITHDRAWN"`. |
| `SELECTED` | Non | Aucun `GET /applications` ne vérifie ce statut. `SELECTED` apparaît seulement dans le test de retrait, comme candidature qui doit être refusée. |
| `REJECTED` | Non | Aucun `GET /applications` ne vérifie ce statut. `REJECTED` apparaît seulement dans le test de retrait, comme candidature qui doit être refusée. |

### Assertions de consultation effectivement présentes

Dans le test [`retourne uniquement les candidatures de l'étudiant connecté`]() :

```ts
expect(response.status).toBe(200);
expect(response.body).toHaveLength(2);
expect(response.body.map((application) => application.offerId)).toEqual([
  OFFER.FLEET_APP,
  OFFER.BILLING_API,
]);
expect(response.body.map((application) => application.status)).toEqual([
  "IN_PROGRESS",
  "WITHDRAWN",
]);
```

Ce test vérifie donc réellement la restitution de `IN_PROGRESS` et `WITHDRAWN` par `GET /applications`.

Le test [`ne mélange pas les candidatures de deux étudiants`]() vérifie l’isolement des résultats :

```ts
expect(lucas.status).toBe(200);
expect(youssef.status).toBe(200);
expect(lucas.body).toHaveLength(1);
expect(youssef.body).toHaveLength(1);
expect(lucas.body[0].offerId).toBe(OFFER.FLEET_APP);
expect(youssef.body[0].offerId).toBe(OFFER.BILLING_API);
```

Il ne vérifie pas le champ `status`.

## Cas `SELECTED` et `REJECTED`

Dans [`refuse une candidature %s`](), les valeurs `SELECTED` et `REJECTED` sont utilisées pour tester `PATCH /applications/:id/withdraw` :

```ts
["retenue", 3, STUDENT.MATEUSZ_KOWALSKI, 409],
["non retenue", 4, STUDENT.LEA_MERTENS, 409],
```

L’assertion est uniquement :

```ts
expect(response.status).toBe(expectedStatus);
```

Elle vérifie que le retrait est refusé avec le statut HTTP `409`, pas que `SELECTED` ou `REJECTED` est restitué par `GET /applications`.

Dans [`bloque tout doublon non retiré, quel que soit son statut`](), ces statuts sont également seulement injectés en base :

```ts
for (const status of ["SELECTED", "REJECTED"] as const) {
  db.prepare("UPDATE applications SET status = ? WHERE id = 1").run(status);
  // ...
  expect(response.status).toBe(409);
  expect(response.body.error.code).toBe("APPLICATION_EXISTS");
}
```

Là encore, le test porte sur le refus d’une nouvelle candidature, et non sur la restitution par `GET /applications`.

## Conclusion

- Statuts réellement vérifiés dans la réponse de `GET /applications` : **`IN_PROGRESS` et `WITHDRAWN`**.
- Statuts absents des assertions de consultation : **`SELECTED` et `REJECTED`**.
- Les tests qui manipulent `SELECTED` et `REJECTED` vérifient uniquement le refus du retrait ou d’un doublon. Ils ne testent pas leur restitution par `GET /applications`.
- La couverture backend de EF-33 est donc **partielle** pour les quatre statuts.

User: Nous avons identifié un manque de couverture backend pour EF-33.

Dans backend/tests/applications.test.ts, le test « retourne uniquement les candidatures de l'étudiant connecté » vérifie actuellement uniquement IN_PROGRESS et WITHDRAWN dans la réponse de GET /applications.

Je souhaite ajouter un test qui vérifie également que les statuts SELECTED et REJECTED sont correctement retournés par GET /applications.

Analyse la structure actuelle du projet et propose une modification minimale du fichier de test.

Le test doit :

- utiliser les outils et helpers déjà présents ;
- préparer des candidatures avec les statuts SELECTED et REJECTED ;
- appeler GET /applications avec l'identité de l'étudiant concerné ;
- vérifier le code HTTP 200 ;
- vérifier que les deux statuts sont effectivement présents dans la réponse ;
- vérifier que l'étudiant ne reçoit que ses propres candidatures.
Ne modifie aucun fichier pour le moment. Présente-moi le code proposé et explique son fonctionnement.

Copilot: Je vais vérifier les identifiants et les candidatures du seed afin que le test proposé utilise réellement deux candidatures appartenant au même étudiant, sans supposer la structure des données.

Read [](), lines 1 to 75
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\backend\\tests\\applications.test.ts",
  "view_range": [
    1,
    75
  ]
}

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\backend\\tests\\helpers\\testDatabase.ts"
}

Search for `APPLICATION|applications|MATEUSZ|LEA|LUCAS|INES`

Read file
Completed with input: {
  "command": "Get-Content C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\backend\\src\\db\\seed\\offersData.ts | Select-Object -Skip 150 -First 65",
  "description": "Lire les données des candidatures du seed"
}
Tool execution failed: "path": Required

Ran terminal command: Get-Content C:\3BIN\IA\projet\workspace\BINV32201-groupe-05\backend\src\db\seed\offersData.ts | Select-Object -Skip 150 -First 65

La modification minimale consiste à ajouter un test dans le bloc `describe("GET /applications")`. Le seed contient déjà une candidature `SELECTED` pour Mateusz et une candidature `REJECTED` pour Léa. Le test peut réaffecter la seconde à Mateusz, avec une autre offre, afin d’éviter une violation de la contrainte d’unicité étudiant/offre.

Ajouter `APPLICATION` à l’import :

```ts
import { APPLICATION, OFFER, STUDENT } from "../src/db/seed/seedIds.ts";
```

Puis ajouter ce test :

```ts
it("retourne les statuts retenue et non retenue de l'étudiant connecté", async () => {
  const db = createTestDatabase();

  db.prepare(
    `UPDATE applications
     SET student_id = ?, offer_id = ?, status = ?
     WHERE id = ?`,
  ).run(
    STUDENT.MATEUSZ_KOWALSKI,
    OFFER.DATA_QUALITY,
    "REJECTED",
    APPLICATION.LEA_CLOUD_MIGRATION,
  );

  app = createTestApp(db);

  const response = await request(app)
    .get("/applications")
    .set("Authorization", tokenFor("STUDENT", STUDENT.MATEUSZ_KOWALSKI));

  expect(response.status).toBe(200);
  expect(response.body).toHaveLength(2);
  expect(response.body.map((application: { id: number }) => application.id)).toEqual([
    APPLICATION.MATEUSZ_CLOUD_MIGRATION,
    APPLICATION.LEA_CLOUD_MIGRATION,
  ]);
  expect(response.body.map((application: { status: string }) => application.status)).toEqual([
    "SELECTED",
    "REJECTED",
  ]);
});
```

### Fonctionnement

- `createTestDatabase()` crée une base SQLite en mémoire avec le seed.
- La candidature de Mateusz est déjà `SELECTED`.
- La candidature de Léa est réaffectée à Mateusz, à l’offre `DATA_QUALITY`, et devient `REJECTED`.
- `app = createTestApp(db)` fait utiliser cette base préparée par l’application.
- La requête est envoyée avec le jeton de Mateusz.
- `status === 200` vérifie le succès de la consultation.
- `toHaveLength(2)` et la liste exacte des identifiants vérifient que seules les deux candidatures de Mateusz sont retournées.
- La dernière assertion vérifie réellement la restitution de `SELECTED` et `REJECTED` par `GET /applications`.

Aucun fichier n’a été modifié.

User: Ajoute le test proposé dans backend/tests/applications.test.ts pour vérifier que GET /applications retourne les statuts SELECTED et REJECTED.

Respecte la structure existante et ne modifie aucun autre fichier.

Copilot: J’ajoute uniquement le test ciblé dans le bloc `GET /applications`, ainsi que l’import d’identifiants nécessaire, puis je lancerai la suite backend concernée.

Edit []()

Ran terminal command: Set-Location C:\3BIN\IA\projet\workspace\BINV32201-groupe-05; npm exec vitest run backend/tests/applications.test.ts

Le test a révélé que l’API trie les candidatures dans l’ordre inverse de leur date, et non par identifiant. Je corrige l’assertion pour vérifier le contenu exact sans imposer un ordre qui n’est pas requis par EF-33.

Edit []()

Ran terminal command: Set-Location C:\3BIN\IA\projet\workspace\BINV32201-groupe-05; npm exec vitest run backend/tests/applications.test.ts

Ran terminal command: git -C C:\3BIN\IA\projet\workspace\BINV32201-groupe-05 diff -- backend/tests/applications.test.ts

Ran terminal command: git -C C:\3BIN\IA\projet\workspace\BINV32201-groupe-05 status --short

Test ajouté dans [`backend/tests/applications.test.ts`]().

- Prépare deux candidatures de Mateusz avec les statuts `SELECTED` et `REJECTED`.
- Vérifie la réponse HTTP `200`.
- Vérifie que seules ses deux candidatures sont retournées.
- Vérifie la présence des deux statuts.

Validation :

```text
Test Files  1 passed
Tests       22 passed
```

Seul [backend/tests/applications.test.ts]() a été modifié.

User: voici la consigne du point 3 "3. Deuxième partie — Auditer les guides à la lumière de Web 2
Les guides influencent le travail de l’agent avant qu’un test ou un autre senseur ne donne
son retour. Examinez les consignes réellement fournies à l’agent dans le dépôt (par exemple
AGENTS.md, les instructions de Copilot ou les guides du projet) et comparez-les aux consignes
et conventions de développement web enseignées en Web 2.
1. Repérez les guides applicables à votre projet et lisez-les en entier.
2. À partir de vos supports, notes ou consignes de Web 2, relevez les attentes perti
nentes : architecture, organisation du code, conventions, validation des entrées, sécurité,
accessibilité ou autres sujets effectivement abordés.
3. Comparez chaque attente avec les guides : est-elle couverte, couverte en partie, absente,
ou en contradiction avec une consigne? Appuyez chaque constat sur un passage du guide
et une source de Web 2.
4. Rédigez un court rapport indiquant ce qui correspond, ce qui ne correspond pas ou
manque, et ce qu’il serait utile d’ajouter ou de préciser dans les guides.
Ne déduisez pas qu’une pratique était demandée en Web 2 si vous ne pouvez pas retrouver la
consigne ou le support correspondant. Vous pouvez demander à Copilot de repérer des passages,
mais vérifiez vous-mêmes les sources et les consignes proposées.
Attente ou
convention de Web 2
(source)
Guide examiné
(fichier et passage)
Correspondance
Écart ou ajout
proposé
…
…
Oui / Partielle / Non
/ Contradiction
…
Le rapport est un audit : formulez des recommandations justifiées. Ne modifiez les guides que
si le travail demandé par votre enseignant consiste aussi à les corriger." , Nous réalisons le point 3 du travail sur le harnais agentique.

Analyse les supports du dépôt `BINV2150A-slides` (cours Web 2) et les guides de notre projet `BINV32201-groupe-05`.

Je veux terminer rapidement l'audit.

1. Identifie les consignes et conventions réellement enseignées en Web 2 qui sont pertinentes pour notre projet : architecture, organisation du code, TypeScript, API REST, sécurité, authentification, React, validation des entrées et tests.
2. Pour chacune, donne le fichier Markdown, le numéro de séance et le passage exact du cours.
3. Retrouve les consignes correspondantes dans les guides de Gesta, notamment `.github/copilot-instructions.md`, `README.md`, `docs/architecture.md` et `backend/API.md`.
4. Construis directement la matrice suivante :
Attente Web 2 (source précise)Guide examiné (fichier et passage)CorrespondanceÉcart ou ajout proposé

Utilise uniquement des consignes réellement présentes dans les slides. Indique Oui, Partielle, Non ou Contradiction.

Ne modifie aucun fichier. Ne crée aucune consigne de Web 2 qui ne figure pas dans les supports. Si une information manque, indique-le clairement.

Copilot: Je vais d’abord localiser les supports `BINV2150A-slides`, puis lire les passages pertinents et les guides Gesta correspondants pour construire une matrice fondée uniquement sur des sources vérifiables.

Ran terminal command: Get-ChildItem C:\3BIN\IA\projet\workspace -Force | Select-Object Name,FullName,Attributes

Ran terminal command: Get-ChildItem C:\3BIN\IA\projet\workspace\BINV32201-groupe-05 -Force -File | Select-Object Name,FullName

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\docs\\architecture.md"
}

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\backend\\API.md"
}

Search for `architecture|TypeScript|REST|API|sécurité|authentification|React|validation|t...`

Ran terminal command: Get-ChildItem C:\3BIN\IA\projet\workspace\BINV2150A-slides -Recurse -File | Select-Object -ExpandProperty FullName

Search for `REST|API|HTTP|status|statut|JSON|route|endpoint`

Search for `TypeScript|type guard|interface|type |strict|any|typage`

Search for `sécurité|authentification|autorisation|validation|entrée|injection|mot de pas...`

Search for `architecture|couche|séparation|responsabil|organisation|MVVM|modèle|composant...`

Search for `React|test|tests|Vitest|Testing Library|accessib|ARIA|formulaire|input`

Read [](), lines 390 to 440
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV2150A-slides\\seance-02\\slides.md",
  "view_range": [
    390,
    440
  ]
}

Read [](), lines 1 to 35
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV2150A-slides\\seance-02\\slides.md",
  "view_range": [
    1,
    35
  ]
}

Read [](), lines 14 to 42
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV2150A-slides\\seance-03\\slides.md",
  "view_range": [
    14,
    42
  ]
}

Read [](), lines 28 to 75
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV2150A-slides\\seance-04\\slides.md",
  "view_range": [
    28,
    75
  ]
}

Read [](), lines 378 to 400
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV2150A-slides\\seance-04\\slides.md",
  "view_range": [
    378,
    400
  ]
}

Read [](), lines 320 to 350
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV2150A-slides\\seance-01\\slides.md",
  "view_range": [
    320,
    350
  ]
}

Read [](), lines 1 to 145
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV2150A-slides\\seance-10\\slides.md",
  "view_range": [
    1,
    145
  ]
}

Read [](), lines 240 to 355
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV2150A-slides\\seance-08\\slides.md",
  "view_range": [
    240,
    355
  ]
}

Read [](), lines 180 to 205
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV2150A-slides\\seance-12\\slides.md",
  "view_range": [
    180,
    205
  ]
}

Read [](), lines 295 to 310
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV2150A-slides\\seance-12\\slides.md",
  "view_range": [
    295,
    310
  ]
}

Read [](), lines 312 to 345
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV2150A-slides\\seance-17\\slides.md",
  "view_range": [
    312,
    345
  ]
}

Read [](), lines 68 to 110
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV2150A-slides\\seance-07\\slides.md",
  "view_range": [
    68,
    110
  ]
}

Search for `^`

Search for `^`

Search for `^`

Search for `^`

## Guides examinés

- [`.github/copilot-instructions.md`]()
- [`README.md`]()
- [`docs/architecture.md`]()
- [`backend/API.md`]()

## Matrice d’audit Web 2 / Gesta

| Attente Web 2 — source précise | Guide examiné — fichier et passage | Correspondance | Écart ou ajout proposé |
|---|---|---|---|
| **Organisation par types, données et composants** — Séance 10 : « Définir des types dans `models/` », « Définir des données dans `data/` », « `components/` — Affichage » ([slides.md:14]()) | [`docs/architecture.md:89`]() décrit `models/`, `services/`, `utils/`, `hooks/`, `components/` et `pages/`. | **Oui** | La correspondance est explicite et plus détaillée que le support. |
| **Architecture MVVM côté React** — Séance 1 : le cours mentionne « architecture MVVM » dans la partie React ([slides.md:61]()) | [`copilot-instructions.md:58`]() : « The frontend follows the course's MVVM-style separation: `pages -> hooks -> services/utils -> models` ». | **Oui** | Le guide reprend directement la convention du cours. |
| **Responsabilité claire des composants et composition React** — Séance 8 : « Chaque composant a une responsabilité » et les composants forment un arbre ([slides.md:313]()) | [`docs/architecture.md:95`]() : les `components/` sont réutilisables et les `pages/` assemblent hooks et composants. | **Oui** | Le guide pourrait ajouter explicitement la règle « un composant = une responsabilité », mais l’organisation la reflète déjà. |
| **Typage des modèles et des props avec TypeScript** — Séance 8 : « Une interface décrit la forme de l'objet `props` » ([slides.md:90]()) ; Séance 10 : le modèle reprend exactement le DTO backend ([slides.md:64]() | [`docs/architecture.md:91`]() : `models/` contient les types des données reçues de l’API. [`copilot-instructions.md:51`]() distingue DBO, objets métier et DTO. | **Oui** | Le principe DTO/modèles est clairement documenté. |
| **Utiliser des type guards pour vérifier les données externes** — Séance 1 : « Type guard — Vérifier le type d'une variable pour affiner le type » ([slides.md:329]()) | [`README.md:80`]() : « Validation par type guards écrits à la main ». [`docs/architecture.md:92`]() impose la validation JSON avec un type guard. | **Oui** | Correspondance directe. |
| **API REST : verbes, chemins et codes HTTP** — Séance 2 : « GET, POST, PUT, PATCH, DELETE » et codes `200, 201, 204, 400, 401, 403, 404, 500` ([slides.md:14]()) | [`backend/API.md:28`]() documente les codes et leurs cas. Les routes sont détaillées dans [`backend/API.md:176`]() et [`backend/API.md:195`](). | **Oui** | Les conventions REST et les résultats HTTP sont documentés route par route. |
| **Documenter toutes les routes et tester les routes** — Séance 2 : « Documentez l'entièreté des routes existantes » et « N'oubliez pas de mettre à jour la documentation et de tester vos routes » ([slides.md:407]()) | [`README.md:63`]() référence `backend/API.md`. [`copilot-instructions.md:97`]() demande de garder la documentation API et les exemples REST synchronisés. | **Oui** | Le guide pourrait préciser que chaque modification de route doit être accompagnée d’un test, mais cette pratique est déjà suggérée par la checklist de pull request. |
| **Séparer authentification et autorisation** — Séance 3 : « Authentification : Qui es-tu ? » et « Autorisation : Que peux-tu faire ? » ([slides.md:14]()) | [`docs/architecture.md:70`]() distingue `authenticate` et `authorize`. [`copilot-instructions.md:79`]() impose l’autorisation côté backend. | **Oui** | Correspondance très claire. |
| **Utiliser un token JWT pour identifier l’utilisateur et protéger les routes** — Séance 3 : « Le token est envoyé à chaque requête pour prouver l'identité de l'utilisateur » ([slides.md:29]()) | [`backend/API.md:8`]() exige `Authorization`. [`docs/architecture.md:72`]() décrit le jeton et sa vérification. | **Oui** | Le projet applique cette convention, avec la particularité documentée du mode démo. |
| **Ne pas stocker les mots de passe en clair ; utiliser un hash avec salt** — Séance 4 : « on stocke un hash du mot de passe, pas le mot de passe lui-même » et recommandation de vérifier la base ([slides.md:31](), [slides.md:395]()) | [`backend/API.md:15`]() indique que la connexion réelle n’est pas implémentée et que le mode démo fonctionne « sans mot de passe ». [`README.md:117`]() rappelle la même limite. | **Partielle** | Le guide signale honnêtement la limite, mais aucune consigne ne décrit une authentification réelle avec stockage haché. À préciser si une authentification de production est ajoutée. |
| **Valider les entrées côté frontend et backend** — Séance 12 : « `required`, `min`, `max`, `type="email"` : validation HTML native » et « la validation du frontend [...] ne remplace pas celle du backend » ([slides.md:190](), [slides.md:303]()) | [`docs/architecture.md:41`]() attribue aux contrôleurs la validation des paramètres et du corps. [`copilot-instructions.md:81`]() demande de valider les entrées dans les contrôleurs et d’appliquer les règles dans les services. | **Partielle** | La validation backend est explicite. La validation HTML/frontend n’est pas formulée comme règle générale dans les guides. Ajouter cette précision serait utile pour les formulaires. |
| **Tester entièrement le backend** — Séance 4 : « Testez entièrement votre backend » ([slides.md:395]()) | [`README.md:57`]() fournit `npm run lint`, `npm run typecheck`, `npm test`, `npm run build` et `npm run check`. [`copilot-instructions.md:12`]() recommande `npm run check`. | **Oui** | Les guides définissent une vérification automatisée plus précise que le support. |
| **Validation sûre des données lues depuis une API ou un stockage** — Séance 17 : « Valeur lue = `unknown`, vérifiée par un type guard, `try/catch` autour de `JSON.parse` » ([slides.md:340]()) | [`copilot-instructions.md:65`]() impose aux services frontend de valider le JSON avec des type guards. [`docs/architecture.md:92`]() confirme cette règle. | **Partielle** | Les type guards sont couverts, mais la règle `unknown`/`try-catch` concerne surtout le stockage local et n’est pas explicitement reprise pour chaque lecture externe. |
| **Éviter les effets de bord pendant le rendu React et gérer le réseau dans les effets/hooks** — Séance 17 : « Rendu pur — Pas d'effet de bord pendant le rendu » et « Effet de bord — ... réseau » ([slides.md:332]()) | [`copilot-instructions.md:65`]() : les hooks possèdent l’état de chargement/erreur et annulent les requêtes en cours. | **Partielle** | La gestion des hooks et de l’annulation est prescrite, mais la règle générale de pureté du rendu n’est pas explicitement écrite. |
| **Accessibilité des contrôles et formulaires** — Dans les extraits consultés, les slides montrent notamment l’usage d’un `aria-label` pour un bouton sans texte ([slides.md:251]()). | Aucun passage équivalent n’a été retrouvé dans [`copilot-instructions.md`](), [`README.md`](), [`docs/architecture.md`]() ou [`backend/API.md`](). | **Non** | Ajouter une consigne sur les labels associés aux champs, les noms accessibles des boutons et la navigation clavier, si l’accessibilité fait partie du périmètre évalué. |

## Synthèse

- **Correspondances fortes :** architecture en couches, MVVM React, séparation des responsabilités, TypeScript, type guards, API REST, documentation des routes, séparation authentification/autorisation et contrôles automatisés.
- **Correspondances partielles :** authentification réelle avec mots de passe hachés, validation frontend complémentaire, pureté du rendu React et gestion détaillée des données externes.
- **Manque principal identifié :** aucune consigne générale d’accessibilité n’apparaît dans les guides Gesta.
- **Limite importante :** le projet documente explicitement un mode démo sans mot de passe. Il ne faut donc pas présenter cette authentification comme conforme à une authentification de production basée sur un mot de passe haché.

Aucun fichier n’a été modifié.

User: regarde le fiche d'exercices au complet "Semaine 8 — Harnais agentique : guider et
vérifier
Objectif de la séance
Un harnais agentique combine deux familles de mécanismes : les guides, qui orientent l’agent
avant et pendant son travail (feedforward), et les senseurs, qui lui donnent un retour sur le
résultat produit (feedback). Vous allez examiner les deux dans votre projet : vérifier ce que
les tests contrôlent, puis évaluer si les guides reflètent les consignes et conventions vues en
développement Web 2.
À la fin de la séance, vous devez pouvoir distinguer une instruction d’un contrôle, étayer vos
constats en consultant les fichiers et les résultats, et signaler les limites de votre analyse.
Déroulement
1. Repérer les guides et les senseurs
Avec GitHub Copilot, explorez le dépôt et repérez les guides et senseurs présents. Un guide
donne à l’agent des consignes en amont; un senseur observe le code ou son comportement et
produit un retour.
Classez les mécanismes dans cette matrice :
Guide — feedforward
Senseur — feedback
Inférentiel (interprété par
une IA)
Computationnel (règles ou
calculs exécutables)
Ex. AGENTS.md
Ex. générateur de code
Ex. revue de code par une IA
Ex. tests, compilation, linter
Pour chaque mécanisme réellement présent :
— indiquez son nom et le fichier ou l’outil correspondant;
1
— résumez ce qu’il demande, impose ou vérifie;
— donnez un exemple concret de règle ou de résultat;
— précisez s’il a été exécuté et vérifié pendant la séance, ou s’il est seulement décrit ou
configuré.
Ne remplissez pas artificiellement les quatre cases. Vous pouvez utiliser Copilot pour trouver et
résumer les éléments, mais ouvrez les fichiers et vérifiez ses affirmations.
2. Première partie — Examiner les senseurs : couverture des tests
Le projet contient déjà des tests. Leur réussite ne prouve pas qu’ils couvrent toutes les exigences.
Construisez une matrice de traçabilité entre les exigences travaillées la séance précédente et les
tests qui les vérifient réellement.
Partir des exigences
Relisez le cahier des charges, en particulier EF-32 (candidater et retirer sa candidature) et
EF-33 (consulter ses candidatures et leur statut). Découpez-les en cas précis, avec le résultat
attendu : cas normaux, refus et limites. Par exemple, une offre non publiée ne doit pas accepter
de candidature et un étudiant ne doit pas voir les candidatures d’un autre.
Relier les tests aux cas
Explorez les tests existants, notamment les tests d’API s’il y en a. Pour chaque cas, relevez le
fichier, le nom du test et les assertions qui vérifient le résultat attendu.
Exigence
Cas à vérifier
Test existant
(fichier et nom)
Assertions utiles Couverture
EF-32
EF-33
Refuser une
candidature à
une offre non
publiée
Un étudiant ne
voit que ses
candidatures
…
…
…
…
Couvert /
Partiel / Absent
Couvert /
Partiel / Absent
Un cas est couvert seulement si les assertions portent effectivement sur son résultat attendu.
Un test qui appelle une route et reçoit une réponse ne suffit pas nécessairement. Notez aussi les
comportements testés qui ne correspondent pas à EF-32 ou EF-33, sans les rattacher à une
exigence au hasard.
2
Traiter les manques
Repérez les cas absents ou partiellement couverts. Choisissez les manques les plus importants
et ajoutez ou améliorez des tests avec les outils déjà utilisés dans le projet. Privilégiez les
vérifications possibles au niveau de l’API et du backend. Il n’est pas demandé de créer des
tests end-to-end ni de refaire toute la suite. Si un cas ne peut pas être vérifié avec les tests
disponibles, signalez cette limite et indiquez comment vous l’avez vérifié manuellement, le cas
échéant.
Lancez npm run check après vos modifications et relevez le résultat de chaque contrôle. Pour
un test ajouté, expliquez quel défaut le ferait échouer; vérifiez ce point seulement si vous pouvez
le faire sans risque pour le projet.
3. Deuxième partie — Auditer les guides à la lumière de Web 2
Les guides influencent le travail de l’agent avant qu’un test ou un autre senseur ne donne
son retour. Examinez les consignes réellement fournies à l’agent dans le dépôt (par exemple
AGENTS.md, les instructions de Copilot ou les guides du projet) et comparez-les aux consignes
et conventions de développement web enseignées en Web 2.
1. Repérez les guides applicables à votre projet et lisez-les en entier.
2. À partir de vos supports, notes ou consignes de Web 2, relevez les attentes perti
nentes : architecture, organisation du code, conventions, validation des entrées, sécurité,
accessibilité ou autres sujets effectivement abordés.
3. Comparez chaque attente avec les guides : est-elle couverte, couverte en partie, absente,
ou en contradiction avec une consigne? Appuyez chaque constat sur un passage du guide
et une source de Web 2.
4. Rédigez un court rapport indiquant ce qui correspond, ce qui ne correspond pas ou
manque, et ce qu’il serait utile d’ajouter ou de préciser dans les guides.
Ne déduisez pas qu’une pratique était demandée en Web 2 si vous ne pouvez pas retrouver la
consigne ou le support correspondant. Vous pouvez demander à Copilot de repérer des passages,
mais vérifiez vous-mêmes les sources et les consignes proposées.
Attente ou
convention de Web 2
(source)
Guide examiné
(fichier et passage)
Correspondance
Écart ou ajout
proposé
…
…
Oui / Partielle / Non
/ Contradiction
…
Le rapport est un audit : formulez des recommandations justifiées. Ne modifiez les guides que
si le travail demandé par votre enseignant consiste aussi à les corriger.
3
4. Optionnel — Imaginer un senseur d’architecture
Demandez-vous si votre projet aurait besoin d’un senseur qui vérifie son architecture. Choisissez
un problème architectural concret et récurrent dans votre projet, puis proposez une façon de le
détecter.
Précisez :
— quelle règle d’architecture serait vérifiée et pourquoi;
— à quel moment le senseur fonctionnerait (test, commande de vérification, CI, revue
assistée, etc.) ;
— quelles données il examinerait et quel résultat il produirait;
— un exemple de violation qui devrait déclencher un retour;
— les faux positifs, limites et coûts possibles.
Il n’est pas nécessaire d’implémenter ce senseur. Une proposition concrète et vérifiable suffit.
Si vous ne faites pas cette extension, finalisez le rapport et préparez une courte restitution de
vos constats.
Livrable : bilan du harnais
Dans le dossier docs/ du dépôt, ajoutez semaine-3.md, avec :
— Inventaire : la matrice guides/senseurs, avec les emplacements, rôles, exemples et
vérifications effectuées.
— Couverture des exigences : la matrice des cas EF-32 et EF-33, les tests correspondants
et les manques identifiés.
— Modifications et vérification : les tests ajoutés ou améliorés, les commandes lancées
et leurs résultats, ainsi que les vérifications manuelles et limites.
— Audit des guides:lesattentes de Web 2 utilisées comme références, les correspondances,
les écarts et les ajouts proposés.
— Optionnel — senseur d’architecture : la règle envisagée, son mode de fonctionnement
et ses limites, si vous avez fait cette activité.
Décrivez ce que vous avez réellement vérifié. Un trou de couverture bien identifié vaut mieux
qu’un test déclaré couvrant sans preuve. Remettez le bilan et les éventuelles modifications des
tests dans votre dépôt Git, avec les commits poussés sur GitHub." nous avons fait les points 1, 2 et 3, mais pas le 4 car il est optionel. maintenant que nous souhaiton fair le bilan, dis moi si tu as déjà repondu à cette partie "— Inventaire : la matrice guides/senseurs, avec les emplacements, rôles, exemples et
vérifications effectuées." et cette partie "— Modifications et vérification : les tests ajoutés ou améliorés, les commandes lancées
et leurs résultats, ainsi que les vérifications manuelles et limites.", si oui, envoye moi les réponses, si non, dis moi quoi faire pour répondre à ces deux consignes. Base toi sur la fiche d'exercices et de consigne pour me répondre, sachant que nous avons déjà répondu aux deux autres points dans "\docs\semaine-4"

Copilot: Je vais vérifier le contenu de `docs/semaine-4` et l’état actuel du test ajouté afin de distinguer ce qui est déjà documenté de ce qui manque précisément pour le livrable.

Ran terminal command: Get-ChildItem C:\3BIN\IA\projet\workspace\BINV32201-groupe-05\docs\semaine-4 -Force -File | Select-Object Name,FullName
Tool execution failed with exit code 1

Ran terminal command: Get-ChildItem C:\3BIN\IA\projet\workspace\BINV32201-groupe-05\docs\semaine-4 -Force -Recurse | Select-Object FullName,Length
Tool execution failed with exit code 1

Search for `Inventaire|guide|senseur|Modifications|vérification|npm run|test|lint|typeche...`

Ran terminal command: git -C C:\3BIN\IA\projet\workspace\BINV32201-groupe-05 status --short; git -C C:\3BIN\IA\projet\workspace\BINV32201-groupe-05 diff --stat; git -C C:\3BIN\IA\projet\workspace\BINV32201-groupe-05 diff -- backend/tests/applications.test.ts
Tool execution failed with exit code 1

## 1. Inventaire guides/senseurs

**Oui, cette partie a déjà été réalisée** dans notre première analyse :

- matrice des guides feedforward et senseurs feedback ;
- fichiers concernés ;
- rôle de chaque mécanisme ;
- exemples de règles ou résultats ;
- distinction entre configuré, exécuté et vérifié ;
- cases vides signalées : pas d’`AGENTS.md`, pas de générateur de code, pas de revue IA automatisée.

Cependant, elle n’est pas encore regroupée dans un fichier de bilan. Le fichier [`docs/semaine-4/audit-guides-web2.md`]() contient seulement l’audit Web 2 du point 3, pas l’inventaire complet du point 1.

Il faudra donc reprendre la matrice d’inventaire dans le futur fichier demandé :

```text
docs/semaine-3.md
```

Même si le nom `semaine-3.md` paraît incohérent avec « Semaine 8 », c’est bien le nom indiqué par la fiche.

## 2. Modifications et vérification

Cette partie est **partiellement documentée**.

### Ce qui a été fait

Un test a été ajouté dans [`backend/tests/applications.test.ts`]() :

```text
retourne les statuts retenue et non retenue de l'étudiant connecté
```

Il vérifie :

- une réponse HTTP `200` ;
- deux candidatures appartenant au même étudiant ;
- la présence de `SELECTED` ;
- la présence de `REJECTED` ;
- l’absence de candidatures d’un autre étudiant, au moyen de la longueur et des identifiants attendus.

Le test ciblé a été exécuté avec :

```bash
npm exec vitest run backend/tests/applications.test.ts
```

Résultat :

```text
Test Files  1 passed
Tests       22 passed
```

Le test avait d’abord échoué parce qu’il supposait un ordre des résultats. L’assertion a ensuite été corrigée avec `expect.arrayContaining`, car l’ordre n’était pas une exigence d’EF-33.

### Ce qui manque pour satisfaire complètement la consigne

La fiche demande explicitement :

```bash
npm run check
```

après les modifications, avec le résultat de chaque contrôle. Cette commande n’a pas encore été exécutée après l’ajout du test.

Il faut donc lancer depuis la racine du projet :

```powershell
Set-Location C:\3BIN\IA\projet\workspace\BINV32201-groupe-05
npm run check
```

Puis relever séparément :

1. `lint` : réussite ou erreurs ;
2. `typecheck` : réussite ou erreurs ;
3. `test` : nombre de fichiers et tests réussis ;
4. `build` : réussite ou erreurs.

Il faudra également mettre à jour le bilan, car [`docs/semaine-4/couverture-exigences-fonctionnelles.md`]() indique encore :

- qu’aucun nouveau test n’a été ajouté ;
- que `SELECTED` et `REJECTED` sont seulement partiellement couverts.

Cette information était exacte avant l’ajout du test, mais elle est maintenant obsolète.

## Conclusion

| Partie du livrable | État |
|---|---|
| Inventaire guides/senseurs | **Déjà analysé**, mais à intégrer dans le fichier de bilan |
| Modifications apportées | **Réalisées** : test ajouté |
| Test ciblé | **Vérifié** : 22 tests réussis |
| `npm run check` après modification | **À faire** |
| Mise à jour du bilan et des anciennes conclusions | **À faire** |
| Point 4, senseur d’architecture | **Optionnel**, peut être omis |

Le bilan final devra donc réunir les points 1, 2 et 3, corriger la couverture EF-33 et documenter le résultat complet de `npm run check`.

User: je sais que le prof a écris "semaine-3" dans la fiche, mais il s'est trompé, il nous l'a dit, c'est bien semaine 4. Complètes donc le dossier \docs\semaine-4 pour finir le bilan, comme demandé dans le consigne. dis moi si tu modifie les deux fichiers deja présents dans le dossier, et explique moi ce que tu ajoutes dans le dossier. ne modifies rien d'autre dans d'autres dossier, travail uniquement dans le dossier \docs\semaine-4

Copilot: Je vais compléter uniquement `docs/semaine-4`, en conservant les deux documents existants comme sources et en ajoutant un bilan `semaine-4.md`. Je vérifierai aussi les affirmations obsolètes liées au test maintenant ajouté, sans toucher aux autres dossiers.

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\docs\\semaine-4\\couverture-exigences-fonctionnelles.md"
}

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\docs\\semaine-4\\audit-guides-web2.md"
}

Ran terminal command: Get-ChildItem C:\3BIN\IA\projet\workspace\BINV32201-groupe-05\docs\semaine-4 -Force -File | Select-Object Name,Length
Tool execution failed with exit code 1

Le dossier contient bien les deux parties déjà rédigées, mais la matrice EF-32/EF-33 est devenue obsolète depuis l’ajout du test `SELECTED`/`REJECTED`, et sa conclusion affirme encore qu’aucun test n’a été ajouté. Je vais mettre à jour ces deux fichiers et ajouter le bilan final `semaine-4.md`, uniquement dans ce dossier.

Edit [](), [](), []()

Le bilan est maintenant ajouté et les deux documents existants sont cohérents avec l’état actuel du projet : la couverture EF-33 mentionne le nouveau test, et l’audit ne prétend plus qu’aucun code n’a changé. Je vérifie une dernière fois le contenu du bilan et les références aux trois fichiers du dossier.

Read []()
Completed with input: {
  "path": "C:\\3BIN\\IA\\projet\\workspace\\BINV32201-groupe-05\\docs\\semaine-4\\semaine-4.md"
}

Search for `Aucun fichier n’a été modifié|aucun nouveau test|SELECTED|REJECTED|npm run ch...`

Ran terminal command: Get-ChildItem C:\3BIN\IA\projet\workspace\BINV32201-groupe-05\docs\semaine-4 -Force -File | Select-Object Name,Length
Tool execution failed with exit code 1

Oui, j’ai modifié les **deux fichiers déjà présents** dans `docs/semaine-4` et ajouté un troisième fichier :

### Fichiers modifiés

1. [`couverture-exigences-fonctionnelles.md`]()
   - Mise à jour de EF-33.
   - Le test `SELECTED`/`REJECTED` est maintenant indiqué comme **Couvert**.
   - Suppression de l’affirmation selon laquelle aucun test n’avait été ajouté.
   - Actualisation des limites.

2. [`audit-guides-web2.md`]()
   - Correction de la conclusion qui indiquait qu’aucun code source n’avait été modifié.
   - Précision que les guides n’ont pas été modifiés, mais qu’un test backend a été ajouté séparément.

### Fichier ajouté

3. [`semaine-4.md`]()
   - Inventaire complet des guides et senseurs.
   - Matrice des cases vides.
   - Synthèse de la couverture EF-32 et EF-33.
   - Description du test ajouté.
   - Commandes exécutées et résultats réellement obtenus.
   - Défaut ciblé par le test.
   - Limites et commandes non exécutées.
   - Référence vers l’audit Web 2 existant.
   - Mention que l’activité optionnelle du senseur d’architecture n’a pas été réalisée.

Aucun fichier situé dans un autre dossier n’a été modifié. Le dossier `docs/semaine-4` contient donc maintenant les trois éléments nécessaires au bilan.

User: renome le fichier "semaine-4.md" en "bilan.md", dans le dossier "docs\semaine-4"

Copilot: Je renomme uniquement le fichier du bilan dans `docs/semaine-4`.

Edit [](), []()

Le fichier a été renommé en [`bilan.md`]() dans `docs/semaine-4`.