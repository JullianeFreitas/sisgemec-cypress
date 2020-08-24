require('cypress-plugin-tab')
import "../support/commands"
import postgreSQL from 'cypress-postgresql'

postgreSQL.loadDBCommands()

beforeEach(function () {
        cy.visit('api-sisgemec-sisgemec-dev.dev.i.tj.pa.gov.br/publico/perfis')
        cy.visit('/')
        cy.login('470.036.530-79', '123456')
})
