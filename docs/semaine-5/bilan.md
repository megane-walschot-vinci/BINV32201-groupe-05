# Bilan de la phase 5

## Audit des tests de candidatures (EF-32 et EF-33)

| Cas vérifié | Ce que le test vérifiait déjà | Manque confirmé |
| --- | --- | --- |
| Retrait d’une candidature en cours | Un seul bouton « Retirer », la confirmation et l’envoi du `PATCH` | Le test ne vérifiait pas que la candidature affichait « Retirée » après le retrait. |


J’ai complété le test de retrait dans `frontend/tests/ApplicationsPage.test.tsx`. Après le retrait, le test vérifie que la liste est rechargée, que la ligne « Offre 1 » affiche « Retirée » et que son bouton « Retirer » disparaît.

J’ai lancé `npm run test -w frontend -- --run tests/ApplicationsPage.test.tsx`. Les 4 tests du fichier passent.

## Recherche d’offres avec le TDD (EF-30)

Avant de valider les tests, j’ai regardé ce que le test avec la période `P2` et la recherche `"  rEaCt  "` vérifiait. Il attend une seule offre et teste en même temps la casse, les espaces et le filtre par période.

Avant l’implémentation, l’API renvoyait 7 offres au lieu d’une. Après l’ajout de la recherche, le même test passe. Les tests ciblés passent aussi (23 côté backend et 7 côté frontend).

`npm run check` réussit, avec 142 tests backend et 53 tests frontend. Le lint, la vérification des types et le build passent également.


Dans le navigateur, j’ai vérifié que la recherche « rEaCt » avec le filtre P2 affiche une seule offre. En effaçant la recherche, les offres de P2 réapparaissent. Avec « zzzintrouvable », un message indique qu’aucune offre ne correspond.


## Crédits IA – GitHub Copilot

- Asma : 21 % du quota utilisé.
- Mégane : 7 % du quota utilisé.