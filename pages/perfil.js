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

  async validarNome() {
    const nomeUsuario = "//h2[contains(.,'Lucas Marcelo')]";
    await expect(this.page.locator(nomeUsuario)).toBeVisible();
  }

  async validarPronome() {
    const pronomeUsuario = "//h2[contains(.,'(Ele - Dele)')]";
    await expect(this.page.locator(pronomeUsuario)).toBeVisible();
  }
  
  async validarUsername() {
    const username = "//h2[contains(.,'@mestremarcelo')]";
    await expect(this.page.locator(username)).toBeVisible();
  }

  async validarUserTitle() {
    const userTitle = "//h2[contains(.,'Mestre D&D com 15 anos de experiência')]";
    await expect(this.page.locator(userTitle)).toBeVisible();
  }

  async validarLocalResidencia() {
    const localResidencia = "//h3[contains(.,'São Paulo | Brasil')]";
    await expect(this.page.locator(localResidencia)).toBeVisible();
  }

  async validarIdade() {
    const idadeUsuario = "//h2[contains(.,'35 anos')]";
    await expect(this.page.locator(idadeUsuario)).toBeVisible();
  }

};
