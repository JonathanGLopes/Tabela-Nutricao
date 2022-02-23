let title = document.querySelector(".main-title");
title.textContent = "Marcela Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++){
    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");

    let conferePeso = true;
    let confereAltura = true;

    /* 
        Verificação nas informações adicionadas.
        As variaveis acima iniciam como true, porém se os dados não baterem com a 
        verificação ela vai mudar para false e exibir a mensagem de erro
    */

    /*
        Atributo classList.add serve para adicionar uma classe do css 
        com finalidade de  estilizar alguma coisa dinâmicamente pelo JS.
        Para não fazer isso com o próprio JS e manter cada um com sua função, 
        nós fazemos isso pelo CSS e puxamos pelo JS com o classList
    */
    
    if (peso <= 0 || peso >= 500) {
        conferePeso = false;
        tdImc.textContent = "Peso inválido";
        tdImc.textContent = "IMC inválido";
        paciente.classList.add("valor-invalido");
    }

    if (altura <= 0 || altura >= 3.00){
        confereAltura = false;
        tdAltura.textContent = "Altura inválida";
        tdImc.textContent = "IMC inválido";
        paciente.classList.add("valor-invalido");
    }

    if (confereAltura && conferePeso){
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    let imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}