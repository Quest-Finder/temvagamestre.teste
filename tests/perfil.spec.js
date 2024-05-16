const { test } = require('@playwright/test');
import { PerfilPage } from '../pages/perfil.js';


test('Acessar perfil', async ({ page }) => {

  const perfilPage = new PerfilPage(page);
  await perfilPage.goto();
  await perfilPage.validarTitulo();
});

test('Validar dados do usuário', async ({ page }) => {
  const perfilPage = new PerfilPage(page);
  await perfilPage.goto();
  await perfilPage.validarNome();
  await perfilPage.validarPronome();
  await perfilPage.validarUsername();
  await perfilPage.validarUserTitle();
  await perfilPage.validarLocalResidencia();
  await perfilPage.validarIdade();
});

test('Validar Estilos de jogo e Conquistas', async ({ page }) => {
  const perfilPage = new PerfilPage(page);
  await perfilPage.goto();
  await perfilPage.validarEstilosPreferidos();
  await perfilPage.validarConquistas();

});

test('Validar Bio', async ({ page }) => {
  const perfilPage = new PerfilPage(page);
  await perfilPage.goto();
  await perfilPage.clicarExtenderBio();
  await perfilPage.clicarReduzirBio();
  
});
