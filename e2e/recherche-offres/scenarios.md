# Scénarios E2E — Recherche d’offres

## Scénario 1 — Recherche avec résultat

- État initial : un étudiant est connecté sur la page Offres, sans filtre de période. Les offres publiées « Assistant conversationnel interne » et « Tableau de bord de qualité des données » sont visibles.
- Action : saisir `conversationnel` dans le champ « Rechercher une offre ».
- Résultat attendu : seule l’offre « Assistant conversationnel interne » reste affichée. L’offre « Tableau de bord de qualité des données » disparaît de la liste.

## Scénario 2 — Recherche sans résultat

- État initial : un étudiant est connecté sur la page Offres, sans filtre de période. Les deux offres publiées du scénario 1 sont visibles et le champ de recherche est vide.
- Action : saisir `zzzintrouvable` dans le champ « Rechercher une offre ».
- Résultat attendu : aucune offre ne s’affiche et un message indique qu’aucune offre ne correspond à la recherche.