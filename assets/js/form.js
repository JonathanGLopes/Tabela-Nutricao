let buttonAdd = document.querySelector("#adicionar-paciente");
buttonAdd.addEventListener("click", function(event){
    event.preventDefault();

let form = document.querySelector("#form-adiciona");

let nomePaciente = form.nome.value;
let pesoPaciente = form.peso.value;
let alturaPaciente = form.altura.value;
let gorduraPaciente = form.gordura.value;

let pacienteTr = document.createElement("tr");

let nomeTd = document.createElement("td");
let pesoTd = document.createElement("td");
let alturaTd = document.createElement("td");
let gorduraTd = document.createElement("td");
let imcTd = document.createElement("td");

nomeTd.textContent = nomePaciente;
pesoTd.textContent = pesoPaciente;
alturaTd.textContent = alturaPaciente;
gorduraTd.textContent = gorduraPaciente;

pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);

let tabela = document.querySelector("#tabela-pacientes");

tabela.appendChild(pacienteTr);
});


/*
    preventDefault como o próprio nome já diz previne que um componente 
    realize seu comportamento padrão. Como por exemplo um botão, ao clicar
    nele ao invés dele limpar a tela e enviar os dados, irá deixar de fazer isso
    que é o comportamento padrão dele, nisso podemos configurar outro comportamento.
*/

