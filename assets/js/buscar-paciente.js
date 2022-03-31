const $btnBuscarPaciente = document.querySelector("#buscar-pacientes");

$btnBuscarPaciente.addEventListener("click", function(){

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    const $erroAjax = document.querySelector("#span-ajax");

    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            $erroAjax.classList.add("invisivel");
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente){
                addPacienteTabela(paciente)
            });
        }else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            $erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});