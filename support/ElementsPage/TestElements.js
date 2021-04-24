class testElements{

    CampoPrimeiroNome = () => {return ':nth-child(1) > :nth-child(2) > .form-control'}

    CampoSobrenome = () => {return ':nth-child(1) > :nth-child(3) > .form-control'}

    Adress = () => {return '.col-md-8 > .form-control'}

    CampoEmail = () => {return '#eid > .form-control'}

    CampoTelefone = () => {return ':nth-child(4) > .col-md-4 > .form-control'}

    Gender = () => { return'.col-md-4 > :nth-child(2) > .ng-valid'}

    Hobbies = () => {return '#checkbox2'}

    Language =() => {return '#msdd'}

    SelecionarLanguage = () => { return ':nth-child(1) > .ui-corner-all'}
    ValidarCampoLanguage =() => {return ':nth-child(8) > .col-md-3'}

    CampoSkill = () => { return '#Skills'}

    Country = () => {return '#countries'}

    SelectCountry = () => { return '#select2-country-container'}

    CampoAno = () => {return '#yearbox'}

    CampoMes = () => { return ' :nth-child(11) > :nth-child(3) > .form-control'}

    CampoDia = () => {return '#daybox'}

    CampoSenha = () => { return '#firstpassword'}

    ConfirmarSenha = () => { return '#secondpassword'}

    Submit = () => { return '#submitbtn'}

    BotaoRefresh = () => {return '#Button1'}
}
export default testElements;









