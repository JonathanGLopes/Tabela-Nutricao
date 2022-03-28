const $pacientes = document.querySelectorAll(".paciente");

const $tabela = document.querySelector("#tabela-pacientes");

$tabela.addEventListener("dblclick", function(event){
    let alvoEvent = event.target;
    let = alvoPai = alvoEvent.parentNode;

    alvoPai.classList.add("fadeOut");

    setTimeout(function(){
        alvoPai.remove();
    }, 500);

    /*
        O comando acima configura o tempo para uma certa ação ser realizada, no caso a remoção.
        Isso como o nome diz, ela seta um tempo pra esse comando ser executado!
    */
});




// $pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("fui clicado duas vezes");
//         this.remove();
//     });
// });