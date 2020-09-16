/// <reference types="Cypress"/>
import unidade from '../../../integration/factory/unidade/UnidadeFactory'

Given('eu abro a página de Gerenciar Unidades', () => {
    unidade.abrirPaginaGerenciarUnidade()
})

Given('escolho criar uma nova unidade', () => {
    unidade.abrirTelaCriarUnidade()
})

Given('preencho as informações da unidade com os seguintes parâmetros:', dataTable => {
    const table = dataTable.hashes()[0]
    unidade.preencherInformacoesBasicasUnidades(table) 
})

Given('informo o CEP {string}', cep => {
    unidade.preencherCEP(cep)
})

Given('informo que o número do endereço é {string}', numero => {
    unidade.preencherNumeroEndereco(numero)
})

Given('informo o horário de funcionamento com os seguintes parâmetros:', dataTable => {
    const table = dataTable.hashes()[0]
    unidade.preencherInformacoesHorarioFuncionamento(table)
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