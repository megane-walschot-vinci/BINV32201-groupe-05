# Bilan — Playwright MCP et tests E2E

## 1. Scénarios choisis

[Voir les deux scénarios E2E](../e2e/recherche-offres/scenarios.md)

J’ai testé la recherche d’offres avec un compte étudiant, sans filtre de période. J’ai choisi deux cas pour vérifier à la fois le filtrage et l’affichage quand aucun titre ne correspond.

| Scénario | Action | Résultat attendu |
| --- | --- | --- |
| 1 — Avec résultat | Chercher `conversationnel` | Seule l’offre « Assistant conversationnel interne » reste affichée. |
| 2 — Sans résultat | Chercher `zzzintrouvable` | Le tableau disparaît et le message « Aucune offre ne correspond à votre recherche. » s’affiche. |

## 2. Vérification avec Playwright MCP

J’ai exécuté le scénario 1 avec Copilot. Le premier essai a échoué parce que Playwright MCP ne trouvait pas Chrome. J’ai relancé le serveur avec Edge, puis je me suis connectée avec le compte étudiant de test.

- `Navigate to a URL` a ouvert Gesta sur `http://localhost:5173`. Le premier `Page snapshot` a montré l’écran de connexion.
- `Fill form` a saisi `conversationnel` dans le champ « Rechercher une offre ». Le `Page snapshot` suivant a montré une seule offre.
- L’offre « Assistant conversationnel interne » est restée affichée et « Tableau de bord de qualité des données » a disparu de la liste.

[Conversation Copilot — Playwright MCP](./conversation-playwright-mcp.md)

## 3. Tests automatisés avec Playwright Test

Les deux tests sont dans `e2e/recherche-offres/recherche-offres.spec.ts`. Ils utilisent la configuration `playwright.config.ts` et passent par l’interface de Gesta.

- Le scénario 1 vérifie que le tableau contient deux lignes après la recherche, soit l’en-tête et l’offre attendue. Il vérifie aussi que l’autre offre a disparu.
- Le scénario 2 vérifie que le tableau disparaît et que le message d’absence de résultat est visible.

| Exécution sur Chromium | Résultat |
| --- | --- |
| Premier passage | 2 tests réussis en 1,9 s |
| Deuxième passage | 2 tests réussis en 1,5 s |

Résultat de `npm run check` : 

`npm run check` a réussi. Le lint, la vérification des types et les builds backend et frontend sont passés. Vitest a validé 142 tests backend et 53 tests frontend. Les deux tests E2E ont été exécutés séparément avec Playwright Test.


[Conversation Copilot — Création des tests E2E](./conversation-playwright-test.md)

## 4. Vérification du défaut temporaire

J’ai désactivé le filtre par titre en mettant `pattern: null` dans `offers.repository.ts`. Les deux tests ont échoué. Dans le scénario 1, le tableau contenait 5 lignes au lieu de 2. Dans le scénario 2, le message d’absence de résultat ne s’affichait pas.

J’ai remis le filtre d’origine et relancé les mêmes tests. Les deux ont réussi en 1,8 s. Cette vérification montre que les tests détectent bien une régression du filtre.

## 5. Comparaison des deux approches

**À quoi sert Playwright MCP ?** Il donne à Copilot des outils pour piloter le navigateur depuis le chat. Par exemple, Copilot a utilisé `Fill form` pour saisir le mot recherché, puis `Page snapshot` pour lire le résultat.

**Qu’apporte Playwright Test ?** Les actions et les résultats attendus sont écrits dans des fichiers de test. On peut rejouer les mêmes vérifications sans Copilot après chaque modification de Gesta.

**Quand utiliser chaque approche ?** J’utiliserais MCP pour explorer un parcours ou comprendre un problème d’affichage. J’utiliserais Playwright Test pour vérifier régulièrement qu’un parcours connu fonctionne toujours.