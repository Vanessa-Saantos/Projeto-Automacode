Feature: Automatizar site de testes

 Scenario: Preencher Formulario
    Given que acesso o site
    When preencher nome
    And preencher sobrenome
    And Address
    And preencher email
    And preencher o campo telefone 
    And preencher o campo gender
    And preencher Hobbies
    And preencher language
    And seleciono o tipo Skills
    And seleciono country
    And campo Select country
    And seleciono ano de nascimento
    And seleciono mes de aniversario
    And seleciono dia do nascimento
    And preencher campo senha 
    And confirmar senha 
    And Nao Envio de dados
    Then clico no Botao Refresh
   