const $filtro = document.querySelector("#filtro-tabela");

$filtro.addEventListener("input", () =>{
    let pacientes = document.querySelectorAll(".paciente");
    for(let i = 0; i < pacientes.length; i++){
        let paciente = pacientes[i];
        let tdNome = paciente.querySelector(".info-nome");
        let nome = paciente.textContent;
    }
});