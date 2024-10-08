const { test } = require('@playwright/test');
import { PerfilPage } from '../pages/perfil.js';
import { PERFIL } from '../utils/constants.js';

test('Acessar perfil', async ({ page }) => {
  const perfilPage = new PerfilPage(page);
  await perfilPage.goto();
  await perfilPage.validateTitle();
});

test('Validar dados do usuário', async ({ page }) => {
  const perfilPage = new PerfilPage(page);
  await perfilPage.goto();
  await perfilPage.validarNome(PERFIL.jogador.nome);
  await perfilPage.validarPronome(PERFIL.jogador.pronome);
  await perfilPage.validarUsername(PERFIL.jogador.username);
  await perfilPage.validarUserTitle(PERFIL.jogador.titulo);
  await perfilPage.validarLocalResidencia(
    PERFIL.jogador.cidade,
    PERFIL.jogador.pais
  );
  await perfilPage.validarIdade(PERFIL.jogador.idade);
});

test('Validar Estilos de jogo e Conquistas', async ({ page }) => {
  const perfilPage = new PerfilPage(page);
  await perfilPage.goto();
  await perfilPage.validarEstilosDeJogoEscolhidos(
    PERFIL.jogador.estilosPreferidos
  );
  await perfilPage.validateTitleEstilosPreferidos();
  await perfilPage.validateTitleConquistas();
  await perfilPage.validarInsigniasRecebidas(PERFIL.jogador.conquistas);
});

test('Validar Bio', async ({ page }) => {
  const perfilPage = new PerfilPage(page);
  await perfilPage.goto();
  await perfilPage.clicarExtenderBio();
  await perfilPage.clicarReduzirBio();
  await perfilPage.validarTextoBio(PERFIL.jogador.bio);
});
