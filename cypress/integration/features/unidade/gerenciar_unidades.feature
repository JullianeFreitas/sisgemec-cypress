#language: pt
Funcionalidade: Validações Unidades

@unidade
Esquema do Cenário: Criar uma unidade - Modalidade Interno
Dado que eu abra a página de Gerenciar Unidades
E escolha criar uma nova unidade
E preencha as informações da unidade com os seguintes parâmetros:
    | tipo   | comarca   | competencia   | coordenador   | coordenador_adjunto   | supervisor   | email   | telefone   | celular   |
    | <tipo> | <comarca> | <competencia> | <coordenador> | <coordenador_adjunto> | <supervisor> | <email> | <telefone> | <celular> |
E informe o CEP "66.010-145"
E informe que o número do endereço é "42"
E informe o horário de funcionamento com os seguintes parâmetros:
    | turno | inicio | fim   |
    | Manhã | 08:00  | 12:00 |
E valido que o horário de funcionamento foi adicionado à grid
Entao salvo os dados e avanço para a próxima aba
E valido que os dados da aba Identificação foram salvos
E informo os seguintes parâmetros para a aba Modalidade:
    | ata_instalacao | portaria | data_instalacao | status_cejusc | modalidade |
    | 145            | 2014     | 2020-01-01      | Ativo         | Interno    |
Entao concluo o cadastro da unidade
E valido que foi exibida a seguinte mensagem:
    | mensagem                          |
    | Modalidade cadastrada com sucesso |
E valido que a unidade criada é retornada na tela de consulta de unidades

Exemplos:
    | tipo   | comarca | competencia | coordenador     | coordenador_adjunto | supervisor       | email             | telefone       | celular        |
    | CEJUSC | BELÉM   | Todas       | Laura Sebastian | Getulio Vargas      | Regiane Winarski | unidade@email.com | (99)99999-9999 | (99)99999-9999 |

@unidade
Esquema do Cenário: Criar uma unidade - Modalidade ACT/Convênio
Dado que eu abra a página de Gerenciar Unidades
E escolha criar uma nova unidade
E preencha as informações da unidade com os seguintes parâmetros:
    | tipo   | comarca   | competencia   | coordenador   | coordenador_adjunto   | supervisor   | email   | telefone   | celular   |
    | <tipo> | <comarca> | <competencia> | <coordenador> | <coordenador_adjunto> | <supervisor> | <email> | <telefone> | <celular> |
E informe o CEP "66.010-145"
E informe que o número do endereço é "42"
E informe o horário de funcionamento com os seguintes parâmetros:
    | turno | inicio | fim   |
    | Manhã | 08:00  | 12:00 |
E valido que o horário de funcionamento foi adicionado à grid
Entao salvo os dados e avanço para a próxima aba
E valido que os dados da aba Identificação foram salvos
E informo os seguintes parâmetros para a aba Modalidade:
    | ata_instalacao | portaria | data_instalacao | status_cejusc | modalidade |
    | 145            | 2014     | 2020-01-01      | Ativo         |     ACT    |
E preencho os dados do Convênio ou ACT com os seguintes parâmetros:
    | convenente | data_inicio | data_fim  |
    | Conv Teste |  2020-01-01 | 2020-05-01|
Entao concluo o cadastro da unidade
E valido que foi exibida a seguinte mensagem:
    | mensagem                          |
    | Modalidade cadastrada com sucesso |
E valido que a unidade criada é retornada na tela de consulta de unidades

Exemplos:
    | tipo   | comarca | competencia | coordenador     | coordenador_adjunto | supervisor       | email             | telefone       | celular        |
    | CEJUSC | BELÉM   | Todas       | Laura Sebastian | Getulio Vargas      | Regiane Winarski | unidade@email.com | (99)99999-9999 | (99)99999-9999 |

@unidade
Esquema do Cenário: Criar uma unidade - Modalidade ACT/Convênio - Fluxo Alternativo com erros
Dado que eu abra a página de Gerenciar Unidades
E escolha criar uma nova unidade
E preencha as informações da unidade com os seguintes parâmetros:
    | nome_unidade   | tipo   | comarca   | competencia   | coordenador   | coordenador_adjunto   | supervisor   | email   | telefone   | celular   |
    | <nome_unidade> | <tipo> | <comarca> | <competencia> | <coordenador> | <coordenador_adjunto> | <supervisor> | <email> | <telefone> | <celular> |
Entao salvo os dados e avanço para a próxima aba
E valido que foi exibida a seguinte mensagem:
    | mensagem                                            |
    | Existe(m) campo(s) obrigatório(s) não preenchido(s) |
E informe o CEP "66.010-145"
E informe que o número do endereço é "42"
Entao salvo os dados e avanço para a próxima aba
E valido que foi exibida a seguinte mensagem:
    | mensagem                         |
    | Já existe uma unidade com o nome |
Entao altero o nome da unidade para "Unidade Cypress"
Entao salvo os dados e avanço para a próxima aba
E valido que foi exibida a seguinte mensagem:
    | mensagem                                      |
    | Informe um ou mais horários de funcionamento! |
E informe o horário de funcionamento com os seguintes parâmetros:
    | turno | inicio | fim   |
    | Manhã | 13:00  | 17:00 |
E valido que foi exibida a seguinte mensagem:
    | mensagem                                      |
    | Por Favor informe horários em turnos válidos. |
E informe o horário de funcionamento com os seguintes parâmetros:
    | turno | inicio | fim   |
    | Tarde | 13:00  | 17:00 |
Entao salvo os dados e avanço para a próxima aba
E valido que os dados da aba Identificação foram salvos
Entao concluo o cadastro da unidade
E valido que foi exibida a seguinte mensagem:
    | mensagem                                            |
    | Existe(m) campo(s) obrigatório(s) não preenchido(s) |
E informo os seguintes parâmetros para a aba Modalidade:
    | ata_instalacao | portaria | data_instalacao | status_cejusc | modalidade |
    | 145            | 2014     | 2020-01-01      | Ativo         | Interno    |
Entao concluo o cadastro da unidade
E valido que foi exibida a seguinte mensagem:
    | mensagem                          |
    | Modalidade cadastrada com sucesso |
E valido que a unidade criada é retornada na tela de consulta de unidades

Exemplos:
    | nome_unidade             | tipo   | comarca | competencia | coordenador     | coordenador_adjunto | supervisor       | email             | telefone       | celular        |
    | 1º CEJUSC DE PARAUAPEBAS | CEJUSC | BELÉM   | Todas       | Laura Sebastian | Getulio Vargas      | Regiane Winarski | unidade@email.com | (99)99999-9999 | (99)99999-9999 |

@unidade
Esquema do Cenário: Pesquisar uma unidade que não existe
Dado que eu abra a página de Gerenciar Unidades
E busque pela unidade "<nome_unidade>"
E valido que foi exibida a seguinte mensagem:
    | mensagem                |
    | Unidade Não Encontrada. |
Exemplos:
    | nome_unidade |
    | XXº Unidade  |
