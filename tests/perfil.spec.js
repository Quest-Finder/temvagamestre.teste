const { test } = require('@playwright/test');
import { PerfilPage } from '../pages/perfil.js';
import { CONQUISTAS, PERFIL } from '../utils/constants.js';

test('Acessar perfil', async ({ page }) => {
  const perfilPage = new PerfilPage(page);
  await perfilPage.goto();
  await perfilPage.validarTitulo();
});

test('Validar dados do usuário', async ({ page }) => {
  const perfilPage = new PerfilPage(page);
  await perfilPage.goto();
  await perfilPage.validarNome(PERFIL.jogador.nome);
  await perfilPage.validarPronome();
  await perfilPage.validarUsername();
  await perfilPage.validarUserTitle();
  await perfilPage.validarLocalResidencia(
    PERFIL.jogador.cidade,
    PERFIL.jogador.pais
  );
  await perfilPage.validarIdade(PERFIL.jogador.idade);
});

test('Validar Estilos de jogo e Conquistas', async ({ page }) => {
  const perfilPage = new PerfilPage(page);
  const conquistas = [CONQUISTAS.reiDasRolagens, CONQUISTAS.mestreRaiz];
  await perfilPage.goto();
  await perfilPage.validarEstilosPreferidos();
  await perfilPage.validarTituloConquistas();
  await perfilPage.validarInsigniasRecebidas(conquistas);
});

test('Validar Bio', async ({ page }) => {
  const perfilPage = new PerfilPage(page);
  await perfilPage.goto();
  await perfilPage.clicarExtenderBio();
  await perfilPage.clicarReduzirBio();
  await perfilPage.validarTextoBio(PERFIL.jogador.bio);
});
