let buttonAdd = document.querySelector("#adicionar-paciente");
buttonAdd.addEventListener("click", function(event){
    event.preventDefault();
/*
    preventDefault como o próprio nome já diz previne que um componente 
    realize seu comportamento padrão. Como por exemplo um botão, ao clicar
    nele ao invés dele limpar a tela e enviar os dados, irá deixar de fazer isso
    que é o comportamento padrão dele, nisso podemos configurar outro comportamento.
*/



let form = document.querySelector("#form-adiciona");
//Extraindo informações do paciente do form
let paciente = obtemPacienteDoFormulario(form);

// Criando a TR e TD do paciente
let pacienteTr = document.createElement("tr");

let nomeTd = document.createElement("td");
let pesoTd = document.createElement("td");
let alturaTd = document.createElement("td");
let gorduraTd = document.createElement("td");
let imcTd = document.createElement("td");

nomeTd.textContent = paciente.nome;
pesoTd.textContent = paciente.peso;
alturaTd.textContent = paciente.altura;
gorduraTd.textContent = paciente.gordura;
imcTd.textContent = paciente.imc;

//Adicionando paciente na tabela
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

let tabela = document.querySelector("#tabela-pacientes");

tabela.appendChild(pacienteTr);
});


function obtemPacienteDoFormulario(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

/*
    Acima temos um objeto, que é uma coleção de propriedades definida como uma sintaxe.
    Um objeto é uma forma de definir as características de uma propriedade, por exemplo:
    um funcionário tem nome, cpf, estado civil, etc. Então criamos o objeto funcionário e damos a ele
    todas essas características dentro do objeto.
*/