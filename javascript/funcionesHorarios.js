function elegirHorario1(){
    var $horario = document.getElementById("horario1");
    $horario.style="visibility: none";
    var $horario1 = document.getElementById("horario2");
    $horario1.style="display: none";
    var $horario2 = document.getElementById("horario3");
    $horario2.style="display: none";
}
function elegirHorario2(){
    var $horario = document.getElementById("horario2");
    $horario.style="visibility: none";
    var $horario1 = document.getElementById("horario1");
    $horario1.style="display: none";
    var $horario2 = document.getElementById("horario3");
    $horario2.style="display: none";
}
function elegirHorario3(){
    var $horario = document.getElementById("horario3");
    $horario.style="visibility: none";
    var $horario1 = document.getElementById("horario1");
    $horario1.style="display: none";
    var $horario2 = document.getElementById("horario2");
    $horario2.style="display: none";
}
function noElegirHorario(){
    var $horario1 = document.getElementById("horario1");
    $horario1.style="display: none";
    var $horario2 = document.getElementById("horario2");
    $horario2.style="display: none";
    var $horario3 = document.getElementById("horario3");
    $horario3.style="display: none";
}