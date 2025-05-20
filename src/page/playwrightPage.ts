import { expect } from '@playwright/test';
import { page } from '../_configs/hooks';
import playwright from '../objetos/playwright';

export async function abrirTelaInstalation() {  
     await page.click(playwright.seletorBotaoGetStarted);
}

export async function verificarTelaInstalation() {
        
     await expect(page.locator(playwright.textInstallation)).toHaveText("Installation");
}