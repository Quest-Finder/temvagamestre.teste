const { expect } = require('@playwright/test');
const { PATH } = require('../utils/constants');

exports.PerfilPage = class PerfilPage {

  VER_MAIS_BTN = "//button[contains(.,'Ver mais')]"


  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(PATH.perfil);
  }

  async validarTituloDaPagina() {
    await expect(this.page).toHaveTitle(/Tem Vaga Mestre/);
  }

  async validarTituloBio() {
    const bioTitlle = "//h2[contains(.,'Bio')]";
    await expect(this.page.locator(bioTitlle)).toBeVisible();
  }

  async validarBotaoExtenderBio() {
    await expect(this.page.locator(this.VER_MAIS_BTN)).toBeVisible();
  }

  async clicarBotaoExtenderBio() {
    await this.page.click(this.VER_MAIS_BTN);
  }

  async validarEClicarBotaoReduzirBio() {
    const botaoReduzirBio = "//button[contains(.,'Ver menos')]";
    await expect(this.page.locator(botaoReduzirBio)).toBeVisible();
    await this.page.click(botaoReduzirBio);
  }

  async validarTituloEstilosPreferidos() {
    const tituloEstilosPreferidos = "(//h1[contains(.,'Estilos preferidos')])[1]";
    await expect(this.page.locator(tituloEstilosPreferidos)).toBeVisible();
  }

  async validarEstilosDeJogoEscolhidos() {
    const FantasiaHeroica = "//span[@title='Fantasia heroica']";
    const NinjaVsSamurai = "//span[@title='Ninja vs Samurai']";
    const EspadaEFeiticaria = "//span[@title='Espada e feitiçaria']";

    await expect(this.page.locator(FantasiaHeroica)).toBeVisible();
    await expect(this.page.locator(NinjaVsSamurai)).toBeVisible();
    await expect(this.page.locator(EspadaEFeiticaria)).toBeVisible();
  };
   
  async validarTituloConquistas() {
    const conquistas = "(//h1[contains(.,'Conquistas')])[1]";
    await expect(this.page.locator(conquistas)).toBeVisible();
  };

  async validarConquistasAdquiridas() {
    const ReiDasRolagens = "//p[contains(.,'Rei das rolagens')]";
    const NinjaVsSamurai = "//p[contains(.,'Mestre raiz')]";

    await expect(this.page.locator(ReiDasRolagens)).toBeVisible();
    await expect(this.page.locator(NinjaVsSamurai)).toBeVisible();
  };
}