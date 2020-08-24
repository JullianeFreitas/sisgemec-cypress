/// <reference types="cypress"/>
import AgendaPage from '../../../integration/pages/agenda/AgendaPage'
import CommonUtils from '../../../integration/common/CommonUtils'
import { Given } from "cypress-cucumber-preprocessor/steps";
 

Given('eu abro a página de Agendar Evento', () => {
    cy.get('#mat-expansion-panel-header-4 > .mat-content > div > .title').click({force : true})
    cy.get('#cdk-accordion-child-4 > .mat-expansion-panel-body > .item-list > .menu-item > .text > .line-break').click()
    cy.wait(2000)
})

Given('informo que o título do evento é {string}', titulo => {
    cy.get(AgendaPage.titulo).type(titulo)
})

Given('informo o Tipo Evento e o Tipo Demanda com os parâmetros:', dataTable  => {
    const table = dataTable.hashes()

    CommonUtils.ClickNgSelect(table[0]['tipo_evento'], 0)
    CommonUtils.ClickNgSelect(table[0]['tipo_demanda'], 1)

})

Given('informo que o número do processo é {string}', processo => {
    if (processo == null || processo == ""){
        processo = parseInt(Math.random() * 100000000000000000000)

    }
    cy.get(AgendaPage.numeroProcesso).type(processo)
})


Given('informo que a data do evento é {string}', data => {
    cy.get(AgendaPage.dataEvento).type(data)
})

Given('informo que o horário inicial do evento é {string}', hora_inicio => {
    cy.get(AgendaPage.horaInicio).type(hora_inicio)
})

Given('gero a lista de participantes', () => {
    cy.get(AgendaPage.gerarLista).click()
})

Given('escolho o participante {string} da grid', ordem => {
    cy.wait(3000)
    const participante = AgendaPage.getParticipante(ordem)
    cy.get(participante).click({force: true})
})

Given('informo a descrição do evento com os parâmetros:', dataTable  => {
    const table = dataTable.hashes()
    cy.get(AgendaPage.descricaoEvento).type(table[0]['descricao'])
})

Given('salvo o evento', () => {
    cy.get(AgendaPage.salvarEventoBotao).click()
})

Given('valido que o evento foi salvo', () => {
    expect(cy.get(AgendaPage.mensagemEventoCadastrado)).to.exist
})


Given('repito o evento com o modo de repetição {string}', () => {
    expect(cy.get(AgendaPage.mensagemEventoCadastrado)).to.exist
})