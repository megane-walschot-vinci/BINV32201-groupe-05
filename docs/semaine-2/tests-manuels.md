# Tests manuels — candidatures

Ces scénarios concernent les parcours de candidature des exigences EF-32 et
EF-33. Les résultats observés ci-dessous correspondent aux essais réellement
effectués.

## 1. Liste vide pour Louis

**Préconditions**

- Louis est connecté.
- Louis n'a aucune candidature.

**Étapes**

1. Ouvrir la page « Mes candidatures ».

**Résultat attendu**

- La page affiche l'état de liste vide.

**Résultat observé**

- La liste vide a été affichée correctement.

## 2. Candidater et retrouver sa candidature avec le statut « En cours »

**Préconditions**

- Louis est connecté.
- Une offre publiée est disponible.

**Étapes**

1. Depuis la liste des offres, candidater à l'offre.
2. Ouvrir la page « Mes candidatures ».

**Résultat attendu**

- La candidature apparaît avec le statut « En cours ».

**Résultat observé**

- La candidature de Louis est apparue avec le statut « En cours ».

## 3. Retrouver la candidature après rechargement

**Préconditions**

- Louis a une candidature affichée avec le statut « En cours ».

**Étapes**

1. Recharger la page « Mes candidatures ».

**Résultat attendu**

- La candidature est toujours affichée avec le statut « En cours ».

**Résultat observé**

- La candidature a été retrouvée après rechargement.

## 4. Séparation des candidatures entre étudiants

**Préconditions**

- Louis possède une candidature.
- Un autre étudiant peut se connecter.

**Étapes**

1. Se déconnecter de Louis.
2. Se connecter avec l'autre étudiant.
3. Ouvrir la page « Mes candidatures ».

**Résultat attendu**

- La candidature de Louis n'apparaît pas.

**Résultat observé**

- La candidature de Louis n'est pas apparue pour l'autre étudiant.

## 5. Annuler la confirmation de retrait

**Préconditions**

- Une candidature de Louis est au statut « En cours ».
- Le bouton « Retirer » est disponible.

**Étapes**

1. Cliquer sur « Retirer ».
2. Annuler la confirmation.

**Résultat attendu**

- La candidature reste au statut « En cours ».

**Résultat observé**

- La confirmation a été annulée et le statut est resté inchangé.

## 6. Confirmer le retrait

**Préconditions**

- Une candidature de Louis est au statut « En cours ».
- Le bouton « Retirer » est disponible.

**Étapes**

1. Cliquer sur « Retirer ».
2. Confirmer le retrait.

**Résultat attendu**

- Le statut de la candidature devient « Retirée ».

**Résultat observé**

- Le retrait a été confirmé et le statut est devenu « Retirée ».

## 7. Conserver le statut retiré après rechargement

**Préconditions**

- Une candidature de Louis est au statut « Retirée ».

**Étapes**

1. Recharger la page « Mes candidatures ».

**Résultat attendu**

- Le statut « Retirée » est conservé.
- Le bouton « Retirer » n'est plus affiché.

**Résultat observé**

- Le statut « Retirée » a été conservé après rechargement et le bouton
  « Retirer » était absent.

## 8. Candidater à nouveau après retrait

**Préconditions**

- Louis possède une candidature retirée pour une offre.
- Louis est connecté.

**Étapes**

1. Depuis la liste des offres, candidater à nouveau à cette offre.
2. Ouvrir la page « Mes candidatures ».

**Résultat attendu**

- Une nouvelle candidature peut être créée après le retrait.

**Résultat observé**

- Une nouvelle candidature a pu être créée après le retrait.

## Limite des vérifications manuelles

Le refus du retrait d'une candidature déjà traitée n'a pas été testé
manuellement. Il est couvert par les tests automatisés.
