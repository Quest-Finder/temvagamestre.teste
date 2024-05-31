const { expect } = require('@playwright/test');
const { PATH, ESTILOS_PREFERIDOS } = require('../utils/constants');
const { TIMEOUT } = require('dns');
const { error } = require('console');
const exp = require('constants');

exports.PerfilPage = class PerfilPage {

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
    const bioTitle = "//h2[contains(.,'Bio')]";
    await expect(this.page.locator(bioTitle)).toBeVisible();
  }

  async validarBotaoExtenderBio() {
    const botaoExtenderBio = "//button[contains(.,'Ver mais')]";
    await expect(this.page.locator(botaoExtenderBio)).toBeVisible();
    await this.page.click(botaoExtenderBio);
  }

  async validarBotaoReduzirBio() {
    const botaoReduzirBio = "//button[contains(.,'Ver menos')]";
    await expect(this.page.locator(botaoReduzirBio)).toBeVisible();
    await this.page.click(botaoReduzirBio);
  }

  async validarTituloEstilosPreferidos() {
    const tituloEstilosPreferidos = "(//h1[contains(.,'Estilos preferidos')])[1]";
    await expect(this.page.locator(tituloEstilosPreferidos)).toBeVisible();
  }

  async validarEstilosDeJogoEscolhidos(estilos) {
    estilos.forEach(async(estilo) => {
      const localizador = "//span[@title='"+estilo+"']";
      await expect(this.page.locator(localizador)).toBeVisible();

      await expect(this.page.locator(localizador)).toHaveText(estilo);
    })
  };
       
  async validarTituloConquistas() {
    const conquistas = "(//h1[contains(.,'Conquistas')])[1]";
    await expect(this.page.locator(conquistas)).toBeVisible();
  };

  async validarConquistasAdquiridas() {
    const ReiDasRolagens = "//p[contains(.,'Rei das rolagens')]";
    const MestreRaiz = "//p[contains(.,'Mestre raiz')]";

    await expect(this.page.locator(ReiDasRolagens)).toBeVisible();
    await expect(this.page.locator(MestreRaiz)).toBeVisible();
  };
}