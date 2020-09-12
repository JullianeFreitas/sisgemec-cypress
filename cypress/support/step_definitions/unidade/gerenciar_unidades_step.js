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

    cy.get(UnidadePage.nomeUnidade).type(table['nome_unidade'] +' '+ String(CommonUtils.geraNumeroAleatorio(99)))

    CommonUtils.selecionaOpcaoCombo(UnidadePage.tipoUnidade, table['tipo'])
    CommonUtils.selecionaOpcaoCombo(UnidadePage.comarca, table['comarca'])
    CommonUtils.selecionaOpcaoCombo(UnidadePage.competencia, table['competencia'])

    CommonUtils.selecionaOpcaoCombo(UnidadePage.coordenador, table['coordenador'])
    CommonUtils.clicaSeExistir(UnidadePage.botaoAdicionarPerfilUsuario)

    CommonUtils.selecionaOpcaoCombo(UnidadePage.coordenadorAdjunto, table['coordenador_adjunto'])
   
    CommonUtils.selecionaOpcaoCombo(UnidadePage.supervisor, table['supervisor'])
    CommonUtils.clicaSeExistir(UnidadePage.botaoAdicionarPerfilUsuario)
  
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

    // CommonUtils.ClickNgSelect(table['turno'], 6)
    CommonUtils.selecionaOpcaoCombo(UnidadePage.turno, table['turno'])
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
    CommonUtils.selecionaOpcaoCombo(UnidadePage.statusCejusc, table['status_cejusc'])
    CommonUtils.selecionaOpcaoCombo(UnidadePage.modalidade, table['modalidade'])
   
})

Given('concluo o cadastro da unidade e valido se foi salva com sucesso', () => {
    cy.get(UnidadePage.botaoConcluir).click()
    cy.get(UnidadePage.mensagemUnidadeCadastrada).click()
})

Given('preencho os dados do Convênio ou ACT com os seguintes parâmetros:', dataTable => {
    const table = dataTable.hashes()[0]
   
    cy.get(UnidadePage.convenente).type(table['convenente'])
    cy.get(UnidadePage.dataInicio).type(table['data_inicio'])
    cy.get(UnidadePage.dataFim).type(table['data_fim'])
    CommonUtils.uploadFile(CommonUtils.getCaminhoAnexoPdf(), UnidadePage.anexarArquivo)
    cy.get(UnidadePage.botaoAdicionarConvenioAct).click()
})