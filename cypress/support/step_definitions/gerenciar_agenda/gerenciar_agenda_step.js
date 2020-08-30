/// <reference types="cypress"/>
import AgendaPage from '../../../integration/pages/agenda/AgendaPage'
import CommonUtils from '../../../integration/common/CommonUtils'
import { Given } from "cypress-cucumber-preprocessor/steps";
 

Given('eu abro a página de Agendar Evento', () => {
    cy.get(AgendaPage.menuAgenda).click({force : true})
    cy.get(AgendaPage.gerenciarAgenda).click()
    cy.wait(4000)
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

Given('escolho o participante com os parâmetros:', dataTable => {
    // implementar um while pra tratar varios
    const table = dataTable.hashes()
    cy.wait(3000)
    CommonUtils.ClickNgSelect(table[0]['dia'], 6)
    cy.wait(5000)
    cy.get('.mat-elevation-z0 [type="checkbox"]').eq(0).click({force: true})

    // const participante = AgendaPage.getParticipante(table[0]['ordem_grid'])
    // cy.get(participante).click({force: true})
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


Given('repito o evento com o modo de repetição {string}', modo_repeticao => {
    CommonUtils.ClickNgSelect("Sim", 4)
    CommonUtils.ClickNgSelect(modo_repeticao, 5)
})

Given('repito o evento até a data {string}', data_fim => {
    cy.get(AgendaPage.ocorreAte).type(data_fim)
})

Given('valido que todos os dias da semana foram selecionados', () => {
    // refazer
    cy.get(AgendaPage.repeteDomingo).should('not.be.checked')
    cy.get(AgendaPage.repeteSegunda).should('not.be.checked')
    cy.get(AgendaPage.repeteTerca).should('not.be.checked')
    cy.get(AgendaPage.repeteQuarta).should('not.be.checked')
    cy.get(AgendaPage.repeteQuinta).should('not.be.checked')
    cy.get(AgendaPage.repeteSexta).should('not.be.checked')
    cy.get(AgendaPage.repeteSabado).should('not.be.checked')
})