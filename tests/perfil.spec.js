const { test } = require('@playwright/test');
import { PerfilPage } from '../pages/perfil.js';

test('Acessar perfil', async ({ page }) => {
  const perfilPage = new PerfilPage(page);
  await perfilPage.goto();
  await perfilPage.validarTituloDaPagina();
  await perfilPage.validarTituloBio();
  await perfilPage.validarBotaoExtenderBio();
  await perfilPage.clicarBotaoExtenderBio();
  await perfilPage.validarEClicarBotaoReduzirBio();
  await perfilPage.validarTituloEstilosPreferidos();
  await perfilPage.validarEstilosDeJogoEscolhidos();
  await perfilPage.validarTituloConquistas();
  await perfilPage.validarConquistasAdquiridas();
});
