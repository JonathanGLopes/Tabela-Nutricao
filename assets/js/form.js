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
        let pacienteTr =  montaTr(paciente);

    let erros = validaPaciente(paciente);

    if(erros.length > 0){
        let mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erros;
        return;
    }

    let tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

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

function montaTr(paciente){

    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    let nomeTd = montaTd(paciente.nome, "info-nome");
    let pesoTd = montaTd(paciente.peso, "info-peso");
    let alturaTd = montaTd(paciente.altura, "info-altura");
    let gorduraTd = montaTd(paciente.gordura, "info-gordura");
    let imcTd = montaTd(paciente.imc, "info-imc");

    //Adicionando paciente na tabela
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

    function montaTd(dado, classe){
        let td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);

        return td;
}


function validaPaciente(paciente){

    let erros = [];

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    return erros;
}