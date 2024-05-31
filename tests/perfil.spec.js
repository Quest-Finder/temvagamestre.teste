const { test } = require('@playwright/test');
import { PerfilPage } from '../pages/perfil.js';
import { ESTILOS_PREFERIDOS } from '../utils/constants.js';

test('Acessar perfil', async ({ page }) => {
  const estilos = [ESTILOS_PREFERIDOS.fantasiaHeroica, ESTILOS_PREFERIDOS.ninjaVsSamurai, ESTILOS_PREFERIDOS.espadaEFeiticaria]
  const perfilPage = new PerfilPage(page);
  await perfilPage.goto();
  await perfilPage.validarTituloDaPagina();
  await perfilPage.validarTituloBio();
  await perfilPage.validarBotaoExtenderBio();
  await perfilPage.validarBotaoReduzirBio();
  await perfilPage.validarTituloEstilosPreferidos();
  await perfilPage.validarEstilosDeJogoEscolhidos(estilos);
  await perfilPage.validarTituloConquistas();
  await perfilPage.validarConquistasAdquiridas();
});
