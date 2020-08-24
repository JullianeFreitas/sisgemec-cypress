class CommonUtils {

    static ClickNgSelect(option, ordem_combo) {
        cy.get("ng-select") // get all ng-select elements
         .then((selects) => {
            let select = selects[ordem_combo]; // passamos a ordem do combo na tela
            cy.wrap(select) // permite o click usando cypress
               .click() // clica no primeiro ng-select
               .contains(option) // Filtra pelo texto passado
               .then((item) => {
                  cy.wrap(item).click(); // Clica na opção
                 
               });
         });
      }

}

export default CommonUtils