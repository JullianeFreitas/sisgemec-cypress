class UnidadePage {

    static menuUnidade = '#mat-expansion-panel-header-1'
    static gerenciarUnidade = '#cdk-accordion-child-1 > .mat-expansion-panel-body > .item-list > .menu-item > .text > .line-break'

    static pesquisarUnidade = '#nomeCejusc'
    static escolherComarca = '.ng-select-container'
    static botaoPesquisar = '.btn-right'
    static botaoCadastrar = '.btn-green'

    // NOVA UNIDADE

    static nomeUnidade = '#nmlocal'
    static tipoUnidade = '#entipounidade > .ng-select-container > .ng-value-container > .ng-input > input'
    static comarca = '#comarca > .ng-select-container > .ng-value-container > .ng-input > input'
    static competencia = '#encompetencia > .ng-select-container > .ng-value-container > .ng-input > input'
    static coordenador = '#coordenador > .ng-select-container > .ng-value-container > .ng-input > input'
    static coordenadorAdjunto = '#coordenadoradjunto > .ng-select-container > .ng-value-container > .ng-input > input'
    static supervisor = '#supervisor > .ng-select-container > .ng-value-container > .ng-input > input'
    static email = '#dsemail'
    static telefone = '#notelefone'
    static celular = '#nocelular'

    static cep = '#dscep'
    static botaoBuscaCep = ':nth-child(7) > .btn'
    static numeroEndereco = '#nonumero'

    static horaInicio = ':nth-child(2) > #hrinicio'
    static horaFim = ':nth-child(3) > #hrinicio'
    static botaoAdicionarHorario = 'fieldset > :nth-child(3) > .btn'


    
    static botaoAdicionarPerfilUsuario = '.swal2-confirm'


    static botaoSalvarAvancar = '.btn-green'
    static mensagemUnidadeCadastrada = '.swal2-confirm'

    //ABA MODALIDADE

    static ataInstalacao = '#dsatainstalacao'
    static portaria = '#noportaria'
    static dataInstalacao = '#dtinstalacao'
    static statusCejusc = '#flstatuscejusc > .ng-select-container > .ng-value-container > .ng-input > input'
    static modalidade = '#enmodalidade > .ng-select-container > .ng-value-container > .ng-input > input'
    static botaoConcluir = '.btn-green'

    //CONVENIO/ACT

    static convenente = '#nmconvenente'
    static dataInicio = '#dtinicio'
    static dataFim = '#dtfim'
    static anexarArquivo = '#inputUpload'
    static botaoAdicionarConvenioAct = '.col-sm-2 > .btn'


}

export default UnidadePage