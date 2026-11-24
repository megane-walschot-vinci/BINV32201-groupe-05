import { expect, test } from '@playwright/test';

const assistantOffer = 'Assistant conversationnel interne';
const dataQualityOffer = 'Tableau de bord de qualité des données';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Louis Claes', exact: true }).click();
  await page.getByRole('link', { name: 'Offres' }).click();

  await expect(page.getByRole('combobox', { name: 'Filtrer par période' })).toHaveValue('');
  await expect(page.getByRole('searchbox', { name: 'Rechercher une offre' })).toHaveValue('');
  await expect(page.getByRole('cell', { name: assistantOffer, exact: true })).toBeVisible();
  await expect(page.getByRole('cell', { name: dataQualityOffer, exact: true })).toBeVisible();
});

test('Scénario 1 — la recherche conserve uniquement l’offre correspondante', async ({ page }) => {
  await page.getByRole('searchbox', { name: 'Rechercher une offre' }).fill('conversationnel');

  const rows = page.getByRole('table').getByRole('row');
  await expect(rows).toHaveCount(2);
  await expect(page.getByRole('cell', { name: assistantOffer, exact: true })).toBeVisible();
  await expect(page.getByRole('cell', { name: dataQualityOffer, exact: true })).toHaveCount(0);
});

test('Scénario 2 — une recherche sans résultat affiche le message adapté', async ({ page }) => {
  await page.getByRole('searchbox', { name: 'Rechercher une offre' }).fill('zzzintrouvable');

  await expect(page.getByText('Aucune offre ne correspond à votre recherche.', { exact: true }))
    .toBeVisible();
  await expect(page.getByRole('table')).toHaveCount(0);
});
