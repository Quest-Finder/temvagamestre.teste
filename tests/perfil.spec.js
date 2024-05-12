const { test, expect } = require('@playwright/test');
import { PerfilPage } from '../pages/perfil-page';

test('Acessar perfil', async ({ page }) => {
  const perfilPage = new PerfilPage(page);
  await perfilPage.goto();
  await perfilPage.conferirElementosTela();  
});

