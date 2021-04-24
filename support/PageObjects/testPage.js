/// <reference types="cypress"/>

import testElements from '../ElementsPage/TestElements'

const Elementos = new testElements
const NavegadorUrl = Cypress.config("baseUrl")

class testPage {

abrirUrl(){
    cy.visit(NavegadorUrl)
}
CampoPrimeiroNome(){
    cy.get(Elementos.CampoPrimeiroNome()).type('Vanessa')
}
CampoSobrenome(){
    cy.get(Elementos.CampoSobrenome()).type('Santos')
}
CampoEndereço(){
    cy.get(Elementos.Adress()).type('Rua Jardins 33 Bairro: Florestal')
}
CampoEmail(){
    cy.get(Elementos.CampoEmail()).type('nessa@hotmail.com')
}
CampoTelefone(){
    cy.get(Elementos.CampoTelefone()).type('11980805050')
}
Gender(){
    cy.get(Elementos.Gender()).click()
}
Hobbies(){
    cy.wait(500)
    cy.get(Elementos.Hobbies()).click()
}
Language(){
    cy.wait(50)
    cy.get(Elementos.Language()).dblclick({force:true})
    cy.wait(50)
    cy.get(Elementos.Language()).dblclick({force:true})
    cy.wait(50)
    cy.get(Elementos.SelecionarLanguage()).click()
    cy.wait(50)
    cy.get(Elementos.ValidarCampoLanguage()).click({force:true})
}
Skills(){
    cy.wait(100)
    cy.get(Elementos.CampoSkill()).select('APIs')
}
Country(){
    cy.get(Elementos.Country()).select('Brazil')
}
SelectCountry(){
    cy.get(Elementos.SelectCountry())
}
CampoAno(){
    cy.get(Elementos.CampoAno()).select('1996')
    cy.wait(1000)
}
CampoMes(){
    cy.get(Elementos.CampoMes()).select('December')
    cy.wait(1000)
}
CampoDia(){
    cy.get(Elementos.CampoDia()).select('8')
    cy.wait(1000)
}
CampoSenha(){
    cy.get(Elementos.CampoSenha()).type('j4m5p2g6')
}
ConfirmarSenha(){
    cy.get(Elementos.ConfirmarSenha()).type('j4m5p2g6')
}
Submit(){
    cy.get(Elementos.Submit()).click()
}

ClicarBotaoRefresh(){
    cy.get(Elementos.BotaoRefresh()).click()
}}

export default testPage