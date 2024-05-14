const { test } = require('@playwright/test');
import { PerfilPage } from '../pages/perfil.js';

test('Acessar perfil', async ({ page }) => {
  const perfilPage = new PerfilPage(page);
  await perfilPage.goto();
  await perfilPage.validarTitulo();
  await perfilPage.clicarExtenderBio();
  await perfilPage.clicarReduzirBio();
  await perfilPage.validarEstilosPreferidos();
  await perfilPage.validarConquistas();
});
