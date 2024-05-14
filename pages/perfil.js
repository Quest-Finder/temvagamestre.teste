const { expect } = require('@playwright/test');
const { PATH } = require('../utils/constants');

exports.PerfilPage = class PerfilPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(PATH.perfil);
  }

  async clicarExtenderBio() {
    const extenderBioButton = "//button[contains(.,'Ver mais')]";
    await this.page.click(extenderBioButton);
  }

  async clicarReduzirBio() {
    const reduzirBioButton = "//button[contains(.,'Ver menos')]";
    await this.page.click(reduzirBioButton);
  }

  async validarTitulo() {
    await expect(this.page).toHaveTitle(/Tem Vaga Mestre/);
  }

  async validarEstilosPreferidos() {
    const estilosPreferidos = "(//h1[contains(.,'Estilos preferidos')])[1]";
    await expect(this.page.locator(estilosPreferidos)).toBeVisible();
  }
  async validarConquistas() {
    const conquistas = "(//h1[contains(.,'Conquistas')])[1]";
    await expect(this.page.locator(conquistas)).toBeVisible();
  }
};
