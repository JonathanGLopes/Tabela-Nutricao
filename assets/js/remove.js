const $pacientes = document.querySelectorAll(".paciente");

const $tabela = document.querySelector("#tabela-pacientes");

$tabela.addEventListener("dblclick", function(event){
    let alvoEvent = event.target;
    let = alvoPai = alvoEvent.parentNode;

    alvoPai.remove();
})










// $pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("fui clicado duas vezes");
//         this.remove();
//     });
// });