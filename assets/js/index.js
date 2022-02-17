let title = document.querySelector(".main-title");
title.textContent = "Aparecida Nutricionista";

let paciente = document.querySelector("#primeiro-paciente");

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

if (peso <= 0 || peso >= 500) {
    conferePeso = false;
    tdImc.textContent = "Peso inválido";
}

if (altura <= 0 || altura >= 3.00){
    confereAltura = false;
    tdAltura.textContent = "Altura inválida";
    tdImc.textContent = "IMC inválido";
}

if (confereAltura && conferePeso){
    let imc = peso / (altura * altura);
    tdImc.textContent = imc;
}