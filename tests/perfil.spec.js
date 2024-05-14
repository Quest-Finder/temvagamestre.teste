const { test, expect } = require('@playwright/test');
const { PATH } = require('../utils/constants');

test('acessar perfil', async ({ page }) => {
  await page.goto(PATH.perfil);

  await expect(page).toHaveTitle(/Tem Vaga Mestre/);

  await expect(
    page.getByRole('heading', { name: 'Estilos preferidos' })
  ).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Conquistas' })).toBeVisible();

  await page.getByRole('button', { name: 'Ver mais' }).click();
});
