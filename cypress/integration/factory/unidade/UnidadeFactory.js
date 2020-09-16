import page from '../../pages/unidade/UnidadePage'
import CommonUtils from '../../common/CommonUtils'
import { VariaveisCompartilhadas } from '../../../support/commands'

class UnidadeFactory {

    static abrirPaginaGerenciarUnidade(){
        cy.get(page.menuUnidade).click({force : true})
        cy.get(page.gerenciarUnidade).click()
        cy.url({timeout: 20000}).should('eq', CommonUtils.getUrlPagina('urlConsultarUnidades'));
    }
    static abrirTelaCriarUnidade(){
        cy.get(page.botaoCadastrar).click()
        cy.url().should('eq', CommonUtils.getUrlPagina('urlCadastrarUnidades'), {timeout: 20000});
    }
    static preencherInformacoesBasicasUnidades(table){
        let nomeUnidade
        if (table['nome_unidade'] == null || table['nome_unidade'] == "") {
            nomeUnidade = 'Unidade Cy '+ String(CommonUtils.geraNumeroAleatorio(99))
        } else {
            nomeUnidade = table['nome_unidade'] 
        }
        cy.get(page.nomeUnidade).type(nomeUnidade)
        CommonUtils.gravarVariavel('nomeUnidade', nomeUnidade)
    
        CommonUtils.selecionaOpcaoCombo(page.tipoUnidade, table['tipo'])
        CommonUtils.selecionaOpcaoCombo(page.comarca, table['comarca'])
        CommonUtils.selecionaOpcaoCombo(page.competencia, table['competencia'])
    
        CommonUtils.selecionaOpcaoCombo(page.coordenador, table['coordenador'])
        CommonUtils.clicaSeExistir(page.caixaMensagem)
    
        CommonUtils.selecionaOpcaoCombo(page.coordenadorAdjunto, table['coordenador_adjunto'])
       
        CommonUtils.selecionaOpcaoCombo(page.supervisor, table['supervisor'])
        CommonUtils.clicaSeExistir(page.caixaMensagem)
      
        cy.get(page.email).clear().type(table['email'], { delay: 100 })
        cy.get(page.telefone).type(table['telefone'])
        cy.get(page.celular).type(table['celular'])
    }
    static preencherCEP(cep){
        cy.get(page.cep).clear().type(cep, { delay: 100 })
        cy.get(page.botaoBuscaCep).should('be.visible').click()
    }
    static preencherNumeroEndereco(numero){
        cy.get(page.numeroEndereco).type(numero)
    }
    static preencherInformacoesHorarioFuncionamento(table){
        CommonUtils.selecionaOpcaoCombo(page.turno, table['turno'])
        cy.get(page.horaInicio).type(table['inicio'])
        cy.get(page.horaFim).type(table['fim'])
        cy.get(page.botaoAdicionarHorario).click()
        CommonUtils.gravarVariavel('hora_inicio', table['inicio'])
        CommonUtils.gravarVariavel('hora_fim', table['fim'])
        CommonUtils.gravarVariavel('turno', table['turno'])
    }
    static validarHorarioFuncionamentoGrid(){
        let turno = CommonUtils.retornarVariavel('turno')
        let horaInicio = CommonUtils.retornarVariavel('hora_inicio')
        let horaFim = CommonUtils.retornarVariavel('hora_fim')
        cy.get(page.classeTabelas).should('contain.text', CommonUtils.removeAcento(turno).toUpperCase())
        cy.get(page.classeTabelas).should('contain.text', horaInicio)
        cy.get(page.classeTabelas).should('contain.text', horaFim)
    }
    static salvarAvancar(){
        cy.get(page.botaoSalvarAvancar).click()
    }
    static preencherConvencioACT(table){
        cy.get(page.convenente).type(table['convenente'])
        cy.get(page.dataInicio).type(table['data_inicio'])
        cy.get(page.dataFim).type(table['data_fim'])
        CommonUtils.uploadFile(CommonUtils.getCaminhoAnexo('pdf'), page.anexarArquivo)
        cy.get(page.botaoAdicionarConvenioAct).click()
    }
    static finalizarCadastro(){
        cy.get(page.botaoConcluir).click()
    }
    static validarSalvarAbaIdentificacao(){
        cy.get(page.mensagemUnidadeCadastrada).should('exist')
        cy.get(page.mensagemUnidadeCadastrada).click()
    }
    static preencherAbaModalidade(table){
        cy.get(page.ataInstalacao).clear().type(table['ata_instalacao'], { delay: 100 })
        cy.get(page.portaria).type(table['portaria'])
        cy.get(page.dataInstalacao).type(table['data_instalacao'])
        CommonUtils.selecionaOpcaoCombo(page.statusCejusc, table['status_cejusc'])
        CommonUtils.selecionaOpcaoCombo(page.modalidade, table['modalidade'])
    }
    static consultarUnidadePorNome(nomeUnidade = ""){
        cy.url().should('eq', CommonUtils.getUrlPagina('urlConsultarUnidades'), {timeout: 20000})
        if (nomeUnidade == "" | nomeUnidade == null){
            nomeUnidade = CommonUtils.retornarVariavel('nomeUnidade')
        }
        cy.get(page.pesquisarUnidade).type(nomeUnidade, {force: true})
        cy.get(page.botaoPesquisar).click()
    }
    static validarExistenciaUnidadeGrid(){
        let nomeUnidade = CommonUtils.retornarVariavel('nomeUnidade')
        cy.get(page.classeTabelas).should('contain.text', nomeUnidade)
    }
    static validarCaixaMensagem(mensagem){
        cy.get(page.textoCaixaMensagem).should('contain', mensagem)
        cy.get(page.botaoOkCaixaMensagem).click()  
    }
    static definirNomeUnidade(nomeUnidade){
        nomeUnidade = nomeUnidade+ ' ' +String(CommonUtils.geraNumeroAleatorio(99))
        cy.get(page.nomeUnidade).clear().type(nomeUnidade)
        CommonUtils.gravarVariavel('nomeUnidade', nomeUnidade)
    }
}
export default UnidadeFactory