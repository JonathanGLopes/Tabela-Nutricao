const $btnBuscarPaciente = document.querySelector("#buscar-pacientes");

$btnBuscarPaciente.addEventListener("click", function(){

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        console.log(xhr.responseText);
    });

    xhr.send();
});