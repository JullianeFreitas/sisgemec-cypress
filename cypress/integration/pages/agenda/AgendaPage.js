class AgendaPage {

    static titulo = '.titulo > input'
    static numeroProcesso = '.numero-processo > .ng-untouched'
    static dataEvento = '.data-evento > .ng-pristine'
    static horaInicio = '.hora-inicio > .ng-untouched'
    static horaFim = '.hora-termino > .ng-untouched'
    static chPrevista = '.carga-horaria-prevista > input'
    static gerarLista = '.gerar-lista > .btn'

    static checkboxParticipanteUm = '#mat-checkbox-1-input'
    static checkboxParticipanteDois = '#mat-checkbox-2-input'
    static checkboxParticipanteTres = '#mat-checkbox-3-input'

    static repetirEvento = '.repetir-evento > #destinatario > .ng-select-container > .ng-value-container > .ng-input > input'
    static modoRepeticao = '.modo-repeticao > .validate > .ng-select-container > .ng-value-container > .ng-input > input'
    static ocorreAte = '.ocorre-ate > .ng-untouched'
    static repeteDomingo = '.weekDays-selector > :nth-child(1)'
    static repeteSegunda = ':nth-child(2) > label > p'
    static repeteTerca = ':nth-child(3) > label > p'
    static repeteQuarta = ':nth-child(4) > label > p'
    static repeteQuinta = ':nth-child(5) > label > p'
    static repeteSexta = ':nth-child(6) > label > p'
    static repeteSabado = ':nth-child(7) > label > p'

    static descricaoEvento = '.ql-editor'

    static salvarEventoBotao = '.justify-content-center > .btn-right'
    static mensagemEventoCadastrado = '#swal2-title'

    static getParticipante(ordem){
        if (ordem == 1)
            return this.checkboxParticipanteUm
        else if (ordem == 2)
            return this.checkboxParticipanteDois
        else if (ordem == 3)
            return this.checkboxParticipanteTres
        else 
            return null
    }
 
}

export default AgendaPage