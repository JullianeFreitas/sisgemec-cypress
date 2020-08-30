/// <reference types="cypress"/>
import UnidadePage from '../../../integration/pages/unidade/UnidadePage'
import CommonUtils from '../../../integration/common/CommonUtils'
import { Given } from "cypress-cucumber-preprocessor/steps";
 

Given('eu abro a página de Gerenciar Unidades', () => {
    cy.get(UnidadePage.menuUnidade).click({force : true})
    cy.get(UnidadePage.gerenciarUnidade).click()
    cy.wait(4000)
})

Given('escolho criar um novo', () => {
    cy.get(UnidadePage.botaoCadastrar).click()
})

Given('preencho as informações da unidade com os seguintes parâmetros:', dataTable => {
    const table = dataTable.hashes()[0]

    cy.get(UnidadePage.nomeUnidade).type(table['nome_unidade'] +' '+ String(parseInt(Math.random() * 100)))
    CommonUtils.ClickNgSelect(table['tipo'], 0)
    CommonUtils.ClickNgSelect(table['comarca'], 1)
    CommonUtils.ClickNgSelect(table['competencia'], 2)


    // revisar clique no popup de adição de perfil
    CommonUtils.ClickNgSelect(table['coordenador'], 3)
    cy.get(UnidadePage.botaoAdicionarPerfilUsuario).click()
    CommonUtils.ClickNgSelect(table['coordenador_adjunto'], 4)
   
    CommonUtils.ClickNgSelect(table['supervisor'], 5)
    cy.get(UnidadePage.botaoAdicionarPerfilUsuario).click()
  
    cy.wait(2000)
    cy.get(UnidadePage.email).type(table['email'])
    cy.get(UnidadePage.telefone).type(table['telefone'])
    cy.get(UnidadePage.celular).type(table['celular'])
})


Given('informo o CEP {string}', cep => {
    cy.get(UnidadePage.cep).type(cep)
    cy.get(UnidadePage.botaoBuscaCep).click()
})

Given('informo que o número do endereço é {string}', numero => {
    cy.get(UnidadePage.numeroEndereco).type(numero)
})

Given('informo o horário de funcionamento com os seguintes parâmetros:', dataTable => {
    const table = dataTable.hashes()[0]

    CommonUtils.ClickNgSelect(table['turno'], 6)
    cy.get(UnidadePage.horaInicio).type(table['inicio'])
    cy.get(UnidadePage.horaFim).type(table['fim'])

    cy.get(UnidadePage.botaoAdicionarHorario).click()

})

Given('salvo os dados e avanço para a próxima aba', () => {
    cy.get(UnidadePage.botaoSalvarAvancar).click()
})



Given('valido que os dados da aba Identificação foram salvos', () => {
    cy.get(UnidadePage.mensagemUnidadeCadastrada).click()
})



Given('informo os seguintes parâmetros para a aba Modalidade:', dataTable => {
    const table = dataTable.hashes()[0]
    cy.wait(2000)
    cy.get(UnidadePage.ataInstalacao).type(table['ata_instalacao'])
    cy.get(UnidadePage.portaria).type(table['portaria'])
    cy.get(UnidadePage.dataInstalacao).type(table['data_instalacao'])
    CommonUtils.ClickNgSelect(table['status_cejusc'], 0)
    CommonUtils.ClickNgSelect(table['modalidade'], 1)
   

})



Given('concluo o cadastro da unidade e valido se foi salva com sucesso', () => {
    cy.get(UnidadePage.botaoConcluir).click()
    cy.get(UnidadePage.mensagemUnidadeCadastrada).click()
})