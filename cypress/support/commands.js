import 'cypress-file-upload';

 Cypress.Commands.add("login", (usuario, password) => {
    cy.get('#login').type(usuario).tab().type(password)
    cy.get('.jumbotron > .center').click()
 })
 