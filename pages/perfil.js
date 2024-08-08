const { expect } = require('@playwright/test');
const { PATH } = require('../utils/constants');

exports.PerfilPage = class PerfilPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(PATH.perfil);
  }

  async validateTitle() {
    await expect(this.page).toHaveTitle(/Tem Vaga Mestre/);
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

  async validateTitleEstilosPreferidos() {
    const tituloEstilosPreferidos = {
      role: 'heading',
      name: 'Estilos preferidos',
    };
    await expect(
      this.page.getByRole(tituloEstilosPreferidos.role, {
        name: tituloEstilosPreferidos.name,
      })
    ).toBeVisible();
  }

  async validarEstilosDeJogoEscolhidos(estilos) {
    estilos.forEach(async (estilo) => {
      const localizador = "//span[@title='" + estilo + "']";
      await expect(this.page.locator(localizador)).toBeVisible();

      await expect(this.page.locator(localizador)).toHaveText(estilo);
    });
  }

  async validateTitleConquistas() {
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
    const nomeUsuario = { role: 'heading', name: nome };
    await expect(
      this.page.getByRole(nomeUsuario.role, { name: nomeUsuario.name })
    ).toBeVisible();
    await expect(
      this.page.getByRole(nomeUsuario.role, { name: nomeUsuario.name })
    ).toHaveText(nome);
  }

  async validarPronome(pronome) {
    const pronomeUsuario = { role: 'heading', name: `(${pronome})` };
    await expect(
      this.page.getByRole(pronomeUsuario.role, { name: pronomeUsuario.name })
    ).toBeVisible();
    await expect(
      this.page.getByRole(pronomeUsuario.role, { name: pronomeUsuario.name })
    ).toHaveText(pronomeUsuario.name);
  }

  async validarUsername(username) {
    const usernamePerfil = { role: 'heading', name: username };
    await expect(
      this.page.getByRole(usernamePerfil.role, { name: usernamePerfil.name })
    ).toBeVisible();
    await expect(
      this.page.getByRole(usernamePerfil.role, { name: usernamePerfil.name })
    ).toHaveText(username);
  }

  async validarUserTitle(title) {
    const userTitle = { role: 'heading', name: title };
    await expect(
      this.page.getByRole(userTitle.role, { name: userTitle.name })
    ).toBeVisible();
    await expect(
      this.page.getByRole(userTitle.role, { name: userTitle.name })
    ).toHaveText(title);
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
