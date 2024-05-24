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
    const extenderBioButton = { role: 'button', name: 'Ver mais' };
    await this.page
      .getByRole(extenderBioButton.role, { name: extenderBioButton.name })
      .click();
  }

  async clicarReduzirBio() {
    const extenderBioButton = { role: 'button', name: 'Ver menos' };
    await this.page
      .getByRole(extenderBioButton.role, { name: extenderBioButton.name })
      .click();
  }

  async validarTextoBio(bio) {
    await expect(this.page.getByText(bio)).toBeVisible();
    await expect(this.page.getByText(bio)).toHaveText(bio);
  }

  async validarTitulo() {
    await expect(this.page).toHaveTitle(/Tem Vaga Mestre/);
  }

  async validarEstilosPreferidos() {
    const estilosPreferidos = "(//h1[contains(.,'Estilos preferidos')])[1]";
    await expect(this.page.locator(estilosPreferidos)).toBeVisible();
  }
  async validarTituloConquistas() {
    const conquistas = { role: 'heading', name: 'Conquistas' };
    await expect(
      this.page.getByRole(conquistas.role, { name: conquistas.name })
    ).toBeVisible();
  }

  async validarInsigniasRecebidas(conquistas) {
    conquistas.forEach(async (insignia) => {
      const localizador = "//p[contains(.,'" + insignia + "')]";
      await expect(this.page.locator(localizador)).toBeVisible();
      await expect(this.page.locator(localizador)).toHaveText(insignia);
      console.log(insignia);
    });
  }

  async validarNome(nome) {
    const nomeUsuario = "//h2[contains(.,'Lucas Marcelo')]";
    await expect(this.page.locator(nomeUsuario)).toBeVisible();
    await expect(this.page.locator(nomeUsuario)).toHaveText(nome);
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
    const userTitle =
      "//h2[contains(.,'Mestre D&D com 15 anos de experiência')]";
    await expect(this.page.locator(userTitle)).toBeVisible();
  }

  async validarLocalResidencia(cidade, pais) {
    const residencia = `${cidade} | ${pais}`;
    const localResidencia = { role: 'heading', name: residencia };
    await expect(
      this.page.getByRole(localResidencia.role, { name: localResidencia.name })
    ).toBeVisible();
    await expect(
      this.page.getByRole(localResidencia.role, { name: localResidencia.name })
    ).toHaveText(residencia);
  }

  async validarIdade(idade) {
    const idadeUsuario = { role: 'heading', name: `${idade} anos` };
    const idadeUser = `${idade} anos`;
    await expect(
      this.page.getByRole(idadeUsuario.role, { name: idadeUsuario.name })
    ).toBeVisible();
    await expect(
      this.page.getByRole(idadeUsuario.role, { name: idadeUsuario.name })
    ).toHaveText(idadeUser);
  }
};
