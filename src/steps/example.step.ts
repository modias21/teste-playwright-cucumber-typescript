import { Given, When, Then } from '@cucumber/cucumber';
import { abrirTelaInstalation, verificarTelaInstalation } from '../page/playwrightPage';

Given('eu tenho um setup para testes', function () {

});

When('eu realizo uma ação', async () => {

    abrirTelaInstalation();
});

Then('eu devo ver o resultado esperado', async () => {
    verificarTelaInstalation();
});


