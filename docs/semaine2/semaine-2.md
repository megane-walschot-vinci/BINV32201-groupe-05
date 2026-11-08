# Bilan de développement — semaine 2

## Référence et périmètre

Référence fonctionnelle : [docs/cdc_gesta_developpement.md](../cdc_gesta_developpement.md),
exigences **EF-32** et **EF-33**.

La semaine 2 a porté sur le parcours étudiant des candidatures :

- reprise de la création de candidature existante ;
- ajout de la consultation des candidatures ;
- ajout du retrait d'une candidature encore en cours.

La sélection des candidats et la création du stage restent hors périmètre.

## Règles métier retenues

- Une candidature dont le statut est différent de `WITHDRAWN` bloque une nouvelle
  candidature du même étudiant pour la même offre.
- Une nouvelle candidature est autorisée après retrait.
- Le retrait est réservé à la candidature de l'étudiant connecté.
- Seule une candidature `IN_PROGRESS` peut être retirée.
- Le retrait passe le statut à `WITHDRAWN` et conserve la ligne en base.

## Réalisation

La création existante a été conservée avec ses contrôles serveur : étudiant authentifié,
offre publiée, message facultatif et blocage des doublons.

La consultation est disponible via `GET /applications`. Le serveur détermine l'étudiant
avec la session et ne prend pas de `studentId` client pour filtrer les résultats. La
réponse contient notamment l'offre, l'entreprise, l'année, la période, le message et le
statut.

Le retrait est disponible via `PATCH /applications/:id/withdraw`. La mise à jour SQL est
conditionnelle au propriétaire et au statut `IN_PROGRESS`, afin d'éviter un retrait
accepté après un changement concurrent de statut.

## Principaux fichiers concernés

Les fichiers ci-dessous correspondent aux changements fonctionnels de la branche par
rapport à `main`.

### Backend

- [`backend/src/app.ts`](../../backend/src/app.ts) : assemblage des routes protégées.
- [`backend/src/controllers/applications.controller.ts`](../../backend/src/controllers/applications.controller.ts) :
  validation des identifiants et routes de création, consultation et retrait.
- [`backend/src/services/applications.service.ts`](../../backend/src/services/applications.service.ts) :
  contrôle des étudiants, de la propriété et des transitions de statut.
- [`backend/src/repositories/applications.repository.ts`](../../backend/src/repositories/applications.repository.ts) :
  jointure de consultation et mise à jour conditionnelle du retrait.
- [`backend/src/models/application.ts`](../../backend/src/models/application.ts) et
  [`backend/src/mappers/application.mapper.ts`](../../backend/src/mappers/application.mapper.ts) :
  types DBO, domaine et DTO.
- [`backend/src/db/migrations/002_application_active_unique.sql`](../../backend/src/db/migrations/002_application_active_unique.sql) :
  unicité d'une candidature non retirée par étudiant et par offre.
- [`backend/API.md`](../../backend/API.md) : contrats des routes de candidatures.

### Frontend

- [`frontend/src/pages/ApplicationsPage.tsx`](../../frontend/src/pages/ApplicationsPage.tsx) :
  page « Mes candidatures », statuts français, retrait et états d'interface.
- [`frontend/src/hooks/useApplications.ts`](../../frontend/src/hooks/useApplications.ts) :
  chargement, annulation et rechargement après retrait.
- [`frontend/src/services/applications.service.ts`](../../frontend/src/services/applications.service.ts) :
  appels de consultation et de retrait.
- [`frontend/src/App.tsx`](../../frontend/src/App.tsx) et
  [`frontend/src/components/NavBar.tsx`](../../frontend/src/components/NavBar.tsx) :
  route et accès réservés aux étudiants.
- [`frontend/src/utils/labels.ts`](../../frontend/src/utils/labels.ts) :
  traduction des quatre statuts.

### Tests

- [`backend/tests/applications.test.ts`](../../backend/tests/applications.test.ts) :
  création, séparation des étudiants, permissions et retrait.
- [`frontend/tests/ApplicationsPage.test.tsx`](../../frontend/tests/ApplicationsPage.test.tsx) :
  statuts, liste vide, confirmation et retrait.
- [`frontend/tests/NavBar.test.tsx`](../../frontend/tests/NavBar.test.tsx) :
  visibilité de la navigation étudiante.

## Vérifications manuelles confirmées

Les scénarios suivants ont été vérifiés manuellement :

- affichage d'une liste vide ;
- création d'une candidature puis affichage du statut « En cours » ;
- conservation de la candidature après rechargement ;
- séparation des candidatures entre deux étudiants ;
- annulation de la confirmation de retrait ;
- retrait confirmé ;
- conservation du statut « Retirée » après rechargement ;
- disparition du bouton de retrait après retrait ;
- nouvelle candidature possible après retrait.

Les refus de retrait d'une candidature traitée sont couverts par les tests automatisés,
mais n'ont pas été vérifiés manuellement.

## Vérifications automatisées

La dernière exécution de `npm run check` a réussi :

- lint backend et frontend ;
- vérification TypeScript backend et frontend ;
- **138 tests backend réussis** ;
- **52 tests frontend réussis** ;
- build backend et frontend réussi.

Exemple de test automatisé présent : [`backend/tests/applications.test.ts`](../../backend/tests/applications.test.ts)
vérifie que le retrait d'une candidature `IN_PROGRESS` conserve la candidature avec le
statut `WITHDRAWN`, puis qu'une nouvelle candidature pour la même offre est acceptée.

## Difficultés et limites

La fonctionnalité devait préserver la séparation entre identité de session et identifiants
fournis par le client ; les consultations et retraits utilisent donc toujours l'étudiant
authentifié côté serveur. La mise à jour conditionnelle a également été nécessaire pour
refuser un retrait si la candidature n'est plus `IN_PROGRESS`.

La sélection des candidats et la création du stage ne sont pas implémentées. Elles restent
les limites fonctionnelles de cette étape.
