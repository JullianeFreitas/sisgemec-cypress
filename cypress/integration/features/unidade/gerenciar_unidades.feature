    #language: pt
    Funcionalidade: Validações Unidades

    @unidade
    Esquema do Cenário: Criar uma unidade - Modalidade Interno
    Dado eu abro a página de Gerenciar Unidades
    E escolho criar uma nova unidade
    E preencho as informações da unidade com os seguintes parâmetros:
    | nome_unidade   | tipo   | comarca   | competencia   | coordenador   | coordenador_adjunto   | supervisor   | email   | telefone   | celular   |
    | <nome_unidade> | <tipo> | <comarca> | <competencia> | <coordenador> | <coordenador_adjunto> | <supervisor> | <email> | <telefone> | <celular> |
    E informo o CEP "66.010-145"
    E informo que o número do endereço é "42"
    E informo o horário de funcionamento com os seguintes parâmetros:
    | turno | inicio | fim   |
    | Manhã | 08:00  | 12:00 |
    Entao salvo os dados e avanço para a próxima aba
    E valido que os dados da aba Identificação foram salvos
    E informo os seguintes parâmetros para a aba Modalidade:
    | ata_instalacao | portaria | data_instalacao | status_cejusc | modalidade |
    | 145            | 2014     | 2020-01-01      | Ativo         | Interno    |
    Entao concluo o cadastro da unidade
    E valido que a unidade criada é retornada na tela de consulta de unidades

    Exemplos:
    | nome_unidade  | tipo   | comarca | competencia | coordenador     | coordenador_adjunto | supervisor       | email             | telefone       | celular        |
    |  Unidade Cy   | CEJUSC | BELÉM   | Todas       | Laura Sebastian | Getulio Vargas      | Regiane Winarski | unidade@email.com | (99)99999-9999 | (99)99999-9999 |

    @unidade
    Esquema do Cenário: Criar uma unidade - Modalidade ACT/Convênio
    Dado eu abro a página de Gerenciar Unidades
    E escolho criar uma nova unidade
    E preencho as informações da unidade com os seguintes parâmetros:
    | nome_unidade   | tipo   | comarca   | competencia   | coordenador   | coordenador_adjunto   | supervisor   | email   | telefone   | celular   |
    | <nome_unidade> | <tipo> | <comarca> | <competencia> | <coordenador> | <coordenador_adjunto> | <supervisor> | <email> | <telefone> | <celular> |
    E informo o CEP "66.010-145"
    E informo que o número do endereço é "42"
    E informo o horário de funcionamento com os seguintes parâmetros:
    | turno | inicio | fim   |
    | Manhã | 08:00  | 12:00 |
    Entao salvo os dados e avanço para a próxima aba
    E valido que os dados da aba Identificação foram salvos
    E informo os seguintes parâmetros para a aba Modalidade:
    | ata_instalacao | portaria | data_instalacao | status_cejusc | modalidade |
    | 145            | 2014     | 2020-01-01      | Ativo         |     ACT    |
    E preencho os dados do Convênio ou ACT com os seguintes parâmetros:
    | convenente | data_inicio | data_fim  |
    | Conv Teste |  2020-01-01 | 2020-05-01|
    Entao concluo o cadastro da unidade
    E valido que a unidade criada é retornada na tela de consulta de unidades

    Exemplos:
    | nome_unidade  | tipo   | comarca | competencia | coordenador     | coordenador_adjunto | supervisor       | email             | telefone       | celular        |
    |   Unidade Cy  | CEJUSC | BELÉM   | Todas       | Laura Sebastian | Getulio Vargas      | Regiane Winarski | unidade@email.com | (99)99999-9999 | (99)99999-9999 |
