import 'cypress-file-upload';

 Cypress.Commands.add("login", (usuario, password) => {
    cy.get('#login').type(usuario).tab().type(password)
    cy.get('.jumbotron > .center').click()
 })

 //responsável por armazenar variáveis que serão usadas em mais de um step e precisam ser compartilhadas entre eles
Cypress.Commands.add('salvarComo', (valor, chave) => {
  variaveisCompartilhadas[chave] = valor;
  return valor; 
})

export const variaveisCompartilhadas = {}