/* global Given, Then, When, And */

import testPage from '../PageObjects/testPage'
const Pagina = new testPage

Given("que acesso o site", () =>{
 Pagina.abrirUrl();
})

When("preencher nome" , () =>{
  Pagina.CampoPrimeiroNome();
})

And("preencher sobrenome" , () =>{
  Pagina.CampoSobrenome();
})

And("Address" , () =>{
  Pagina.CampoEndereço();
})

And("preencher email", () =>{
  Pagina.CampoEmail();
})

And ("preencher o campo telefone", () =>{
 Pagina.CampoTelefone();
})

And("preencher o campo gender" , () =>{
  Pagina.Gender();
})

And("preencher Hobbies" , () =>{
  Pagina.Hobbies();
})

And("preencher language" , () =>{
  Pagina.Language();
})

And("seleciono o tipo Skills",() =>{
  Pagina.Skills();
})

And("seleciono country" , () =>{
  Pagina.Country();
})

And("campo Select country" , () =>{
  Pagina.SelectCountry();
})

And("seleciono ano de nascimento" , () =>{
  Pagina.CampoAno();
})

And("seleciono mes de aniversario" , () =>{
  Pagina.CampoMes();
})

And("seleciono dia do nascimento" , () =>{
  Pagina.CampoDia();
})

And("preencher campo senha" , () =>{
  Pagina.CampoSenha();
})

And("confirmar senha" , () =>{
  Pagina.ConfirmarSenha();
})

And("Nao Envio de dados" , () =>{
  Pagina.Submit();
})

Then ("clico no Botao Refresh", () =>{
    Pagina.ClicarBotaoRefresh();
})
