require('cypress-plugin-tab')
import "../support/commands"
import CommonUtils from '../integration/common/CommonUtils'

beforeEach(function () {
        cy.visit('api-sisgemec-sisgemec-dev.dev.i.tj.pa.gov.br/publico/perfis')
        cy.visit('/')
        cy.login('470.036.530-79', '123456')
        cy.url({timeout: 20000}).should('eq', CommonUtils.getUrlPagina('urlPaginaInicial'));
        expect(cy.get('.btn-small > .material-icons', {timeout: 25000})).to.exist
})
