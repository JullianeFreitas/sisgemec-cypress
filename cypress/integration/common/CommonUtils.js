class CommonUtils {

    static ClickNgSelect(option, ordem_combo) {
        cy.get("ng-select") // get all ng-select elements
         .then((selects) => {
            let select = selects[ordem_combo]; // passamos a ordem do combo na tela
            cy.wrap(select) // permite o click usando cypress
               .click() // clica no primeiro ng-select
               .contains(option) // Filtra pelo texto passado
               .then((item) => {
                  cy.wrap(item).click({force: true}); // Clica na opção
               });
         });
      }


static clicarSeExistir(elemento){

   cy.get('.content')
    .then($conteudo => {
      if ($conteudo.hasClass(elemento)) {
         cy.log('passou aqui')
         cy.get(elemento).click()
     }
      })
   }

}


export default CommonUtils