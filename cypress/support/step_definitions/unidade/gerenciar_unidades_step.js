/// <reference types="Cypress"/>
import unidade from '../../../integration/factory/unidade/UnidadeFactory'

Given('que eu abra a página de Gerenciar Unidades', () => {
    unidade.abrirPaginaGerenciarUnidade()
})

Given('escolha criar uma nova unidade', () => {
    unidade.abrirTelaCriarUnidade()
})

Given('preencha as informações da unidade com os seguintes parâmetros:', dataTable => {
    const table = dataTable.hashes()[0]
    unidade.preencherInformacoesBasicasUnidades(table) 
})

Given('informe o CEP {string}', cep => {
    unidade.preencherCEP(cep)
})

Given('informe que o número do endereço é {string}', numero => {
    unidade.preencherNumeroEndereco(numero)
})

Given('informe o horário de funcionamento com os seguintes parâmetros:', dataTable => {
    const table = dataTable.hashes()[0]
    unidade.preencherInformacoesHorarioFuncionamento(table)
})

Given('valido que o horário de funcionamento foi adicionado à grid', () => {
    unidade.validarHorarioFuncionamentoGrid()
})

Given('salvo os dados e avanço para a próxima aba', () => {
    unidade.salvarAvancar()
})

Given('valido que os dados da aba Identificação foram salvos', () => {
    unidade.validarSalvarAbaIdentificacao()
})

Given('informo os seguintes parâmetros para a aba Modalidade:', dataTable => {
    const table = dataTable.hashes()[0]
    unidade.preencherAbaModalidade(table)  
})

Given('concluo o cadastro da unidade', () => {
    unidade.finalizarCadastro()
})

Given('preencho os dados do Convênio ou ACT com os seguintes parâmetros:', dataTable => {
    const table = dataTable.hashes()[0]
    unidade.preencherConvencioACT(table)
})

Given('valido que a unidade criada é retornada na tela de consulta de unidades', () => {
    unidade.consultarUnidadePorNome()
    unidade.validarExistenciaUnidadeGrid()
})

Given('valido que foi exibida a seguinte mensagem:', dataTable => {
    const table = dataTable.hashes()[0]
    unidade.validarCaixaMensagem(table['mensagem'])
})

Given('altero o nome da unidade para {string}', nomeUnidade => {
    unidade.definirNomeUnidade(nomeUnidade)
})

Given('busque pela unidade {string}', nomeUnidade => {
    unidade.consultarUnidadePorNome(nomeUnidade)
})
