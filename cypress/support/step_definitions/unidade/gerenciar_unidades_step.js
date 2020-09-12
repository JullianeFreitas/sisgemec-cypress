/// <reference types="Cypress"/>
import UnidadePage from '../../../integration/pages/unidade/UnidadePage'
import CommonUtils from '../../../integration/common/CommonUtils'
import { Given } from "cypress-cucumber-preprocessor/steps"
import { VariaveisCompartilhadas } from '../../../support/commands.js'

Given('eu abro a página de Gerenciar Unidades', () => {
    cy.get(UnidadePage.menuUnidade).click({force : true})
    cy.get(UnidadePage.gerenciarUnidade).click()
    cy.url().should('eq', CommonUtils.getUrlPagina('urlConsultarUnidades'), {timeout: 20000});
})

Given('escolho criar uma nova unidade', () => {
    cy.get(UnidadePage.botaoCadastrar).click()
    cy.url().should('eq', CommonUtils.getUrlPagina('urlCadastrarUnidades'), {timeout: 20000});
})

Given('preencho as informações da unidade com os seguintes parâmetros:', dataTable => {
    const table = dataTable.hashes()[0]

    let nomeUnidade = table['nome_unidade'] +' '+ String(CommonUtils.geraNumeroAleatorio(99))
    cy.get(UnidadePage.nomeUnidade).type(nomeUnidade)
    cy.salvarComo(nomeUnidade,'nomeUnidade')

    CommonUtils.selecionaOpcaoCombo(UnidadePage.tipoUnidade, table['tipo'])
    CommonUtils.selecionaOpcaoCombo(UnidadePage.comarca, table['comarca'])
    CommonUtils.selecionaOpcaoCombo(UnidadePage.competencia, table['competencia'])

    CommonUtils.selecionaOpcaoCombo(UnidadePage.coordenador, table['coordenador'])
    CommonUtils.clicaSeExistir(UnidadePage.botaoAdicionarPerfilUsuario)

    CommonUtils.selecionaOpcaoCombo(UnidadePage.coordenadorAdjunto, table['coordenador_adjunto'])
   
    CommonUtils.selecionaOpcaoCombo(UnidadePage.supervisor, table['supervisor'])
    CommonUtils.clicaSeExistir(UnidadePage.botaoAdicionarPerfilUsuario)
  
    cy.get(UnidadePage.email).click().type(table['email'])
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

    CommonUtils.selecionaOpcaoCombo(UnidadePage.turno, table['turno'])
    cy.get(UnidadePage.horaInicio).type(table['inicio'])
    cy.get(UnidadePage.horaFim).type(table['fim'])
    cy.get(UnidadePage.botaoAdicionarHorario).click()

    cy.get(UnidadePage.classeTabelas).should('contain.text', CommonUtils.removeAcento(table['turno']).toUpperCase())
    cy.get(UnidadePage.classeTabelas).should('contain.text', table['inicio'])
    cy.get(UnidadePage.classeTabelas).should('contain.text', table['fim'])
})

Given('salvo os dados e avanço para a próxima aba', () => {
    cy.get(UnidadePage.botaoSalvarAvancar).click()
})

Given('valido que os dados da aba Identificação foram salvos', () => {
    cy.get(UnidadePage.mensagemUnidadeCadastrada).click()
})

Given('informo os seguintes parâmetros para a aba Modalidade:', dataTable => {
    const table = dataTable.hashes()[0]

    cy.get(UnidadePage.ataInstalacao).type(table['ata_instalacao'], {force: true})
    cy.get(UnidadePage.portaria).type(table['portaria'])
    cy.get(UnidadePage.dataInstalacao).type(table['data_instalacao'])
    CommonUtils.selecionaOpcaoCombo(UnidadePage.statusCejusc, table['status_cejusc'])
    CommonUtils.selecionaOpcaoCombo(UnidadePage.modalidade, table['modalidade'])
   
})

Given('concluo o cadastro da unidade', () => {
    cy.get(UnidadePage.botaoConcluir).click()
    cy.get(UnidadePage.mensagemUnidadeCadastrada).click()
})

Given('preencho os dados do Convênio ou ACT com os seguintes parâmetros:', dataTable => {
    const table = dataTable.hashes()[0]
   
    cy.get(UnidadePage.convenente).type(table['convenente'])
    cy.get(UnidadePage.dataInicio).type(table['data_inicio'])
    cy.get(UnidadePage.dataFim).type(table['data_fim'])
    CommonUtils.uploadFile(CommonUtils.getCaminhoAnexo('pdf'), UnidadePage.anexarArquivo)
    cy.get(UnidadePage.botaoAdicionarConvenioAct).click()
})

Given('valido que a unidade criada é retornada na tela de consulta de unidades', () => {
    cy.url().should('eq', CommonUtils.getUrlPagina('urlConsultarUnidades'), {timeout: 20000})
    let nomeUnidade = VariaveisCompartilhadas.nomeUnidade
    cy.get(UnidadePage.pesquisarUnidade).type(nomeUnidade, {force: true})
    cy.get(UnidadePage.botaoPesquisar).click()
    cy.get(UnidadePage.classeTabelas).should('contain.text', nomeUnidade)

})