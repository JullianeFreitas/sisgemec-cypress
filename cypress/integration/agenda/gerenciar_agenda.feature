#language: pt
Funcionalidade: Validações Agenda

  # @agenda
  # Esquema do Cenário: Criar Tipo de Evento Atendimento e Tipo de Demanda Pré Processual / Processual
  #   Dado eu abro a página de Agendar Evento
  #   E informo que o título do evento é "Evento Atendimento Teste Cypress"
  #   E informo o Tipo Evento e o Tipo Demanda com os parâmetros:
  #     | tipo_evento   | tipo_demanda   |
  #     | <tipo_evento> | <tipo_demanda> |
  #   E informo que o número do processo é "<numero_processo>"
  #   E informo que a data do evento é "<data_evento>"
  #   E informo que o horário inicial do evento é "<hora_inicial>"
  #   E gero a lista de participantes
  #   E escolho o participante "1" da grid
  #   E informo a descrição do evento com os parâmetros:
  #     | descricao                                                                                       |
  #     | Evento teste do Cypress Evento teste do Cypress Evento teste do Cypress Evento teste do Cypress |
  #   E salvo o evento
  #   Entao valido que o evento foi salvo 

  #   Exemplos:
  #   | tipo_evento | tipo_demanda   | numero_processo      | data_evento | hora_inicial |
  #   | Atendimento | Pré Processual |                      | 2020-08-29  |   14:00      |
  #   | Atendimento |   Processual   | 15935725865478932146 | 2020-09-01  |   09:00      |

@agenda
  Esquema do Cenário: Criar Tipo de Evento Mutirão e Tipo de Demanda Processual / Cidadania - Repetição todos os dias da semana
    Dado eu abro a página de Agendar Evento
    E informo que o título do evento é "Evento Mutirão Teste Cypress"
    E informo o Tipo Evento e o Tipo Demanda com os parâmetros:
      | tipo_evento   | tipo_demanda   |
      | <tipo_evento> | <tipo_demanda> |
    E informo que a data do evento é "<data_evento>"
    E informo que o horário inicial do evento é "<hora_inicial>"
    
    E repito o evento com o modo de repetição "Todos os Dias"
    E repito o evento até a data "2020-05-08"
    E valido que todos os dias da semana foram selecionados

    E gero a lista de participantes
    E escolho o participante "1" da grid
    E informo a descrição do evento com os parâmetros:
      | descricao                                                                                       |
      | Evento teste do Cypress Evento teste do Cypress Evento teste do Cypress Evento teste do Cypress |
    # E salvo o evento
    # Entao valido que o evento foi salvo 

      Exemplos:
      | tipo_evento | tipo_demanda |  data_evento | hora_inicial |
      | Mutirão     | Processual   |  2020-05-04  | 14:00        |
      # | Mutirão     | Cidadania    |  2020-09-01  | 09:00        |