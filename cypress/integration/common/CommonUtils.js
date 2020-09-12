class CommonUtils {

   static ClickNgSelect(option, ordem_combo) {
      cy.get("ng-select") // get all ng-select elements
         .then((selects) => {
            let select = selects[ordem_combo]; // passamos a ordem do combo na tela
            cy.wrap(select) // permite o click usando cypress
               .click() // clica no primeiro ng-select
               .contains(option) // Filtra pelo texto passado
               .then((item) => {
                  cy.wrap(item).click({ force: true }); // Clica na opção
               });
         });
   }

   static selecionaOpcaoCombo(select, opcao) {
      cy.get(select) // pegar combobox indicado
         .then((select) => {
            cy.wrap(select) // permite o click usando cypress
               .click() // clica no ng-select
               .contains(opcao) // Filtra pelo texto passado
               .then((item) => {
                  cy.wrap(item).click({ force: true }); // Clica na opção
               });
         });
   }

   static geraNumeroAleatorio(numeroMaximo){
      return Math.floor(Math.random() * numeroMaximo + 1)
   }

   static clicaSeExistir(elemento) {
      cy.get('body').then(($body) => {
         if ($body.find(elemento).length) {
            cy.get(elemento).click()
         }
      })
   }

   static getUrlPagina(pagina){
      var json = this.readJSON()
      return json[pagina]
   }


   static readJSON() {
      return require('../../../cypress.json');
   }

   static getCaminhoAnexo(tipoArquivo) {
      var json = this.readJSON()
      if (tipoArquivo == 'pdf'){
         return json['anexoPdf']
      }
      return ''
   }

   static uploadFile(fileName, selector) {
      cy.get(selector).attachFile(fileName)
      cy.get(selector).trigger('change', { force: true })
   }

   static removeAcento (text)
{       
   //  text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;                 
}

}


export default CommonUtils