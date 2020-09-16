/// <reference types="Cypress"/>

Given('que eu acesse a página de Consulta Pública de Mediadores Certificados', () => {
    unidade.abrirPaginaGerenciarUnidade()
})

Given('', dataTable => {
    const table = dataTable.hashes()[0]
    unidade.preencherInformacoesBasicasUnidades(table) 
})

Given('', cep => {
    unidade.preencherCEP(cep)
})