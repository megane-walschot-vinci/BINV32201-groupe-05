## 1. Exigences examinées

| Exigence | Formulation exacte |
|---|---|
| EF-32 | L’étudiant candidate à une offre publiée, avec un message facultatif. Il peut retirer sa candidature tant qu’elle n’a pas été traitée. |
| EF-33 | L’étudiant voit ses candidatures et leur statut : « En cours », « Retenue », « Non retenue » ou « Retirée ». |

Source : `docs/cdc_gesta_developpement.md:203-206`

## 2. Matrice de traçabilité

| Exigence | Cas à vérifier | Test existant | Assertions utiles | Résultat attendu | Couverture |
|---|---|---|---|---|---|
| EF-32 | Un étudiant peut candidater à une offre publiée | `applications.test.ts`, `crée une candidature avec un message facultatif` | `response.status` vaut `201`; le corps contient `offerId`, le message et `status: "IN_PROGRESS"` | La candidature est créée avec le statut En cours | **Couvert** |
| EF-32 | Le message est facultatif | `applications.test.ts`, `accepte une candidature sans message` | `response.status` vaut `201`; `response.body.message` vaut `null` | Une candidature sans message est acceptée | **Couvert** |
| EF-32 | Une candidature à une offre non publiée est refusée | `applications.test.ts`, `refuse une offre qui n'est pas publiée` | `response.status` vaut `400`; code `INVALID_STATE` | La candidature est refusée | **Couvert** |
| EF-32 | Une offre inexistante est refusée | `applications.test.ts`, `retourne 404 pour une offre inconnue` | `response.status` vaut `404`; code `NOT_FOUND` | L’API signale que l’offre n’existe pas | **Couvert** |
| EF-32 | Seul un étudiant peut candidater | `applications.test.ts`, `refuse les profils non étudiants` | `response.status` vaut `403`; code `FORBIDDEN` | Un administrateur ne peut pas candidater | **Couvert** |
| EF-32 | Une candidature en cours peut être retirée | `applications.test.ts`, `retire sa candidature en cours sans supprimer la ligne` | Réponse `200`; statut `WITHDRAWN`; nouvelle consultation contenant la candidature avec `id: 1` et `status: "WITHDRAWN"` | La candidature devient Retirée et reste consultable | **Couvert** |
| EF-32 | Un étudiant peut retirer uniquement sa propre candidature | `applications.test.ts`, cas `d'un autre étudiant` | `response.status` vaut `404` | L’existence de la candidature d’un autre étudiant n’est pas révélée | **Couvert** |
| EF-32 | Une candidature retenue ne peut plus être retirée | `applications.test.ts`, cas `retenue` | `response.status` vaut `409` | Le retrait est refusé après traitement | **Couvert** |
| EF-32 | Une candidature non retenue ne peut plus être retirée | `applications.test.ts`, cas `non retenue` | `response.status` vaut `409` | Le retrait est refusé après traitement | **Couvert** |
| EF-32 | Une candidature déjà retirée ne peut pas être retirée une seconde fois | `applications.test.ts`, cas `déjà retirée` | `response.status` vaut `409` | Le retrait répétitif est refusé | **Couvert** |
| EF-32 | Une nouvelle candidature est possible après un retrait | `applications.test.ts`, `autorise une nouvelle candidature après un retrait` | `response.status` vaut `201`; `offerId` attendu | Une candidature retirée ne bloque pas une nouvelle candidature | **Couvert** |
| EF-32 | Les erreurs d’authentification et d’autorisation sont contrôlées | `applications.test.ts`, `refuse les profils non étudiants et les requêtes sans session` | Sans session : `401`; administrateur : `403` | Les accès non autorisés sont refusés | **Couvert** |
| EF-33 | Un étudiant voit ses propres candidatures | `applications.test.ts`, `retourne uniquement les candidatures de l'étudiant connecté` | Réponse `200`; longueur `2`; vérification des `offerId`; vérification des statuts `IN_PROGRESS` et `WITHDRAWN`; absence de `studentId` | L’étudiant reçoit ses candidatures et leurs statuts | **Couvert pour ces données** |
| EF-33 | Un étudiant ne voit pas les candidatures d’un autre étudiant | `applications.test.ts`, `ne mélange pas les candidatures de deux étudiants` | Chaque étudiant reçoit une seule candidature; `offerId` différents et attendus | Les résultats sont isolés par étudiant | **Couvert** |
| EF-33 | Le statut En cours est renvoyé | `applications.test.ts` | Présence de `IN_PROGRESS` dans les statuts retournés | Le statut est exposé par l’API | **Couvert** |
| EF-33 | Le statut Retirée est renvoyé | `applications.test.ts`, puis lignes 86-98 | Présence de `WITHDRAWN`; vérification après retrait | Le statut est exposé par l’API | **Couvert** |
| EF-33 | Les statuts Retenue et Non retenue sont renvoyés par `GET /applications` | `applications.test.ts`, `retourne les statuts retenue et non retenue de l'étudiant connecté` | Réponse `200`; longueur `2`; identifiants attendus avec `expect.arrayContaining`; statuts `SELECTED` et `REJECTED` avec `expect.arrayContaining` | L’API retourne les deux statuts pour l’étudiant concerné, sans candidature d’un autre étudiant | **Couvert** |
| EF-33 | Les libellés français affichés sont « En cours », « Retenue », « Non retenue », « Retirée » | Aucun test d’interface identifié dans ce périmètre | Les tests API vérifient les codes anglais (`IN_PROGRESS`, `WITHDRAWN`), pas les libellés affichés | Les libellés devraient être correctement traduits dans l’interface | **Absent** |

## 3. Tests liés aux candidatures mais ne vérifiant pas directement EF-32 ou EF-33

| Fichier et test | Ce qui est vérifié | Relation avec EF-32/EF-33 |
|---|---|---|
| `applications.test.ts:172`, `bloque tout doublon non retiré, quel que soit son statut` | Refus d’une deuxième candidature avec le code `APPLICATION_EXISTS` | Règle métier supplémentaire, non explicitement formulée dans EF-32 ou EF-33 |
| `applications.test.ts:195`, `valide le corps et la longueur du message` | Refus d’un message vide ou de plus de 2 000 caractères | Validation technique du champ facultatif, mais limite non indiquée par EF-32 |
| `db/seed.test.ts:20`, `respecte les volumes du cahier des charges` | Vérifie notamment le nombre minimal de candidatures | Vérifie les données de démonstration, pas le comportement des routes |
| `db/seed.test.ts:93`, `couvre tous les statuts de candidature et une offre à plusieurs candidats` | Vérifie que le seed contient les quatre statuts | Prépare les données de test, mais ne vérifie pas que l’API les restitue correctement |
| `db/seed.test.ts:157`, `le stage issu d'une offre correspond à l'offre attribuée et à la candidature retenue` | Cohérence entre stage, offre et candidature retenue | Concerne surtout les règles de stage et de sélection, pas EF-32/EF-33 |

Les autres suites backend — `auth.test.ts`, `companies.test.ts`, `health.test.ts`, `offers.test.ts`, `permissions.test.ts`, ainsi que les tests de migrations et de contraintes — vérifient d’autres fonctionnalités et ne sont pas rattachées à EF-32 ou EF-33.

## 4. Limites constatées

- Les tests API vérifient principalement les codes de statut anglais, pas l’affichage des libellés français.
- Le seed contient les quatre statuts (`IN_PROGRESS`, `SELECTED`, `REJECTED`, `WITHDRAWN`) et les tests API vérifient maintenant leur restitution par `GET /applications`.
- Les tests vérifient des résultats précis; ils ne se limitent donc pas à constater qu’une route répond.
- Un test backend a été ajouté dans `backend/tests/applications.test.ts` pour vérifier la restitution de `SELECTED` et `REJECTED`.
