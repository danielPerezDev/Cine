function guardarDatos(){

    var $sala=document.getElementById('sala').value;
    var $idioma=document.getElementById('idioma').value;
    var $subtitulo=document.getElementById('respuesta').value;
    var $dia=document.getElementById('dia').value;
    var $horario=document.getElementById('horario').value;
    setEntry('sala', $sala);
    setEntry('idioma', $idioma);
    setEntry('subtitulo', $subtitulo);
    setEntry('dia',$dia);
    setEntry('horario', $horario);
    mostrarCartel();
}
function guardarDatos2(){
    var $cantidadEntradas = document.getElementById("totalEntradas").innerHTML
    var $totalAPagar = document.getElementById("totalPagar").innerHTML;
    setEntry('cantEntradas', $cantidadEntradas);
    setEntry('total', $totalAPagar);
}
function setEntry(nombre, valor) {
    /*Guardando los datos en el LocalStorage*/
    localStorage.setItem(nombre, valor);
}
function mostrarCartel(){
    var $cartel = document.getElementById('cartelDatos');
    $cartel.style="visibility:none";
    var $mostrarDia = document.getElementById('mostrarDias');
    $mostrarDia.innerHTML=localStorage.getItem('dia');
    var $mostrarSala = document.getElementById('mostrarSala');
    $mostrarSala.innerHTML=localStorage.getItem('sala');
    var $mostrarHorario = document.getElementById('mostrarHorario');
    $mostrarHorario.innerHTML=localStorage.getItem('horario');
    var $mostrarSubtitulo = document.getElementById('mostrarSubtitulo');
    $mostrarSubtitulo.innerHTML=localStorage.getItem('subtitulo');
    var $mostrarIdioma = document.getElementById('mostrarIdioma');
    $mostrarIdioma.innerHTML=localStorage.getItem('idioma');
}
function cerrarCartelDatos(){
    var $cartel = document.getElementById('cartelDatos');
    $cartel.style="display:none";
}
function obtenerDatos(){
    var $dia = document.getElementById("mostrarDia");
    $dia.innerHTML=localStorage.getItem('dia');
    var $sala = document.getElementById("mostrarSala");
    $sala.innerHTML=localStorage.getItem('sala');
    var $idioma = document.getElementById("mostrarIdioma");
    $idioma.innerHTML=localStorage.getItem('idioma');
    var $subtitulo = document.getElementById("mostrarSubtitulo");
    $subtitulo.innerHTML=localStorage.getItem('subtitulo');
    var $horario = document.getElementById("mostrarHorario");
    $horario.innerHTML=localStorage.getItem('horario');
}
function calcularEntradaAdulto(){
    var $cartelCantidad = document.getElementById("cantidad");
    var $cartelSubtotal = document.getElementById("TotalEntradaAdulto")
    sumarTicket.onclick = () => {
        var $numero = Number(mostrarCantidadTicket.value.trim(" "));
        $numero = !isNaN( $numero ) && $numero<6 ? $numero + 1 : 6;
        $cartelCantidad.innerHTML=$numero;
        $cartelSubtotal.innerHTML=(4000*$numero);
        mostrarCantidadTicket.value = $numero;
        totalAPagar();
        totalEntradas()
    }
}

function calcularEntradaAdulto2(){
    var $cartelCantidad = document.getElementById("cantidad");
    var $cartelSubtotal = document.getElementById("TotalEntradaAdulto")
    restarTicket.onclick = () => {
        var $numero = Number(mostrarCantidadTicket.value.trim(" "));
        $numero = !isNaN( $numero ) && $numero!=0 ? $numero - 1 : 0;
        $cartelCantidad.innerHTML=$numero;
        $cartelSubtotal.innerHTML=(4000*$numero);
        mostrarCantidadTicket.value = $numero;
        totalAPagar();
        totalEntradas()
    }
}
function calcularEntradaMayor(){
    var $cartelCantidad = document.getElementById("cantidad2");
    var $cartelSubtotal = document.getElementById("totalEntradaMayor")
    sumarTicket2.onclick = () => {
        var $numero = Number(mostrarCantidadTicket2.value.trim(" "));
        $numero = !isNaN( $numero ) && $numero<6 ? $numero + 1 : 6;
        $cartelCantidad.innerHTML=$numero;
        $cartelSubtotal.innerHTML=(2000*$numero);
        mostrarCantidadTicket2.value = $numero;
        totalAPagar();
        totalEntradas()
    }
}
function calcularEntradaMayor2(){
    var $cartelCantidad = document.getElementById("cantidad2");
    var $cartelSubtotal = document.getElementById("totalEntradaMayor")
    restarTicket2.onclick = () => {
        var $numero = Number(mostrarCantidadTicket2.value.trim(" "));
        $numero = !isNaN( $numero ) && $numero!=0 ? $numero - 1 : 0;
        $cartelCantidad.innerHTML=$numero;
        $cartelSubtotal.innerHTML=(2000*$numero);
        mostrarCantidadTicket2.value = $numero;
        totalAPagar();
        totalEntradas()
    }
}
function calcularEntradaNinio(){
    var $cartelCantidad = document.getElementById("cantidad3");
    var $cartelSubtotal = document.getElementById("totalEntradaNiño")
    sumarTicket3.onclick = () => {
        var $numero = Number(mostrarCantidadTicket3.value.trim(" "));
        $numero = !isNaN( $numero ) && $numero<6 ? $numero + 1 : 6;
        $cartelCantidad.innerHTML=$numero;
        $cartelSubtotal.innerHTML=(1000*$numero);
        mostrarCantidadTicket3.value = $numero;
        totalAPagar();
        totalEntradas()
    }
}
function calcularEntradaNinio2(){
    var $pagar = document.getElementById("totalPagar");
    var $cartelCantidad = document.getElementById("cantidad3");
    var $cartelSubtotal = document.getElementById("totalEntradaNiño")
    restarTicket3.onclick = () => {
        var $numero = Number(mostrarCantidadTicket3.value.trim(" "));
        $numero = !isNaN( $numero ) && $numero!=0 ? $numero - 1 : 0;
        $cartelCantidad.innerHTML=$numero;
        $cartelSubtotal.innerHTML=(1000*$numero);
        mostrarCantidadTicket3.value = $numero;
        totalAPagar();
        totalEntradas()
    }
}
function totalAPagar(){
    var $pagar = document.getElementById("totalPagar");
    var $subtotal = document.getElementById("TotalEntradaAdulto").innerHTML;
    var $subtotal2 = document.getElementById("totalEntradaMayor").innerHTML
    var $subtotal3 = document.getElementById("totalEntradaNiño").innerHTML;
    var $counter = 0;
    $counter+=parseInt($subtotal)+parseInt($subtotal2)+parseInt($subtotal3);
    $pagar.innerHTML=$counter;
}
function totalEntradas(){
    var $entradas = document.getElementById("totalEntradas");
    var $entrada1 = document.getElementById("cantidad").innerHTML;
    var $entrada2 = document.getElementById("cantidad2").innerHTML;
    var $entrada3 = document.getElementById("cantidad3").innerHTML;
    var $conta = 0;
    $conta+=parseInt($entrada1)+parseInt($entrada2)+parseInt($entrada3);
    $entradas.innerHTML=$conta;
}
