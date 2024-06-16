
function temporizador(){
    cartelNoBienvenida()
    function cartelNoBienvenida(){
        var $cartel = document.getElementById("reglas");
        $cartel.style="display:none;";
    }
    var $min = 1;
    var $seg = 0;
    cargarSegundos();
    function cargarSegundos(){
        var $txtSegundo;
        if($seg < 0){
            $seg = 59;
        }
        if($seg < 10){
            $txtSegundo = `0${$seg}`;
        }else{
            $txtSegundo = $seg;
        }
        document.getElementById("seg").innerHTML = $txtSegundo;
        $seg--;
        cargarMinutos($seg);
    }
    function cargarMinutos($seg){
        var $txtMinutos;
        if($seg==-1 && $min !=0){
            setTimeout(() =>{
                $min--;
            },500)
        }else if($seg==-1 && $min ==0){
            setTimeout(() =>{
                $min=59;
            },500)
        }
        if($min < 10){
            $txtMinutos = `0${$min}`;
        }else{
            $txtMinutos = $min;
        }
        document.getElementById("min").innerHTML = $txtMinutos;
        if($min==0 && $seg==0){
            var $cartelPerdiste = document.getElementById("cartelPerdiste");
            $cartelPerdiste.style="visibility:none;";
        } 
    }
    setInterval(cargarSegundos,1000);  
}
function sombraRespuesta(){
    var $respuesta = document.getElementById("respuesta");
    $respuesta.style="box-shadow:10px 10px 8px 5px white;";
}
function noSombraRespuesta(){
    var $respuesta = document.getElementById("respuesta");
    $respuesta.style="box-shadow:none;";
}
function sombraRespuesta2(){
    var $respuesta = document.getElementById("respuesta2");
    $respuesta.style="box-shadow:10px 10px 8px 5px white;";
}
function noSombraRespuesta2(){
    var $respuesta = document.getElementById("respuesta2");
    $respuesta.style="box-shadow:none;";
}
function sombraRespuesta3(){
    var $respuesta = document.getElementById("respuesta3");
    $respuesta.style="box-shadow:10px 10px 8px 5px white;";
}
function noSombraRespuesta3(){
    var $respuesta = document.getElementById("respuesta3");
    $respuesta.style="box-shadow:none;";
}
function cartelDeBienvenida(){
    var $cartel = document.getElementById("reglas");
    $cartel.style="visibility:none;";
}
function verRespuestas($n){
    if($n==1){
        var $pregunta = document.getElementById("pregunta2");
        $pregunta.style="visibility: none;";
        var $respuesta2 = document.getElementById("respuestaA");
        $respuesta2.style="visibility: none;";
        var $respuesta3 = document.getElementById("respuestaB");
        $respuesta3.style="visibility: none;";
        var $respuesta4 = document.getElementById("respuestaC");
        $respuesta4.style="visibility: none;";
    }else if($n==0){
        var $respuesta2 = document.getElementById("respuesta2");
        $respuesta2.style.backgroundColor="red";
        var $cartelPerdiste = document.getElementById("cartelPerdiste");
        $cartelPerdiste.style="visibility:none;";
    }else{
        var $respuesta3 = document.getElementById("respuesta3");
        $respuesta3.style.backgroundColor="red";
        var $cartelPerdiste = document.getElementById("cartelPerdiste");
        $cartelPerdiste.style="visibility:none;";
    }

    
}
function verRespuestas2($n){
    if($n==1){
        var $pregunta = document.getElementById("pregunta3");
        $pregunta.style="visibility: none;";
        var $respuesta2 = document.getElementById("respuestaAA");
        $respuesta2.style="visibility: none;";
        var $respuesta3 = document.getElementById("respuestaBB");
        $respuesta3.style="visibility: none;";
        var $respuesta4 = document.getElementById("respuestaCC");
        $respuesta4.style="visibility: none;";
    }else if($n==0){
        var $respuesta2 = document.getElementById("respuestaB");
        $respuesta2.style.backgroundColor="red";
        var $cartelPerdiste = document.getElementById("cartelPerdiste");
        $cartelPerdiste.style="visibility:none;";
    }else{
        var $respuesta3 = document.getElementById("respuestaC");
        $respuesta3.style.backgroundColor="red";
        var $cartelPerdiste = document.getElementById("cartelPerdiste");
        $cartelPerdiste.style="visibility:none;";
    }

    
}
function verRespuestas3($n){
    if($n==1){
        var $pregunta = document.getElementById("pregunta4");
        $pregunta.style="visibility: none;";
        var $respuesta2 = document.getElementById("respuestaAAA");
        $respuesta2.style="visibility: none;";
        var $respuesta3 = document.getElementById("respuestaBBB");
        $respuesta3.style="visibility: none;";
        var $respuesta4 = document.getElementById("respuestaCCC");
        $respuesta4.style="visibility: none;";
    }else if($n==0){
        var $respuesta2 = document.getElementById("respuestaBB");
        $respuesta2.style.backgroundColor="red";
        var $cartelPerdiste = document.getElementById("cartelPerdiste");
        $cartelPerdiste.style="visibility:none;";
    }else{
        var $respuesta3 = document.getElementById("respuestaCC");
        $respuesta3.style.backgroundColor="red";
        var $cartelPerdiste = document.getElementById("cartelPerdiste");
        $cartelPerdiste.style="visibility:none;";
    }

    
}
function verRespuestas4($n){
    if($n==1){
        var $cartel = document.getElementById("cartelGanaste");
        $cartel.style="visibility:none;";
        var $salida = document.getElementById("codigo");
        $salida.innerHTML+=Math.trunc((Math.random()*10000));
    }else if($n==0){
        var $cartelPerdiste = document.getElementById("cartelPerdiste")
        $cartelPerdiste.style="visibility:none;";
    }else{
        var $cartelPerdiste = document.getElementById("cartelPerdiste")
        $cartelPerdiste.style="visibility:none;";
    }

    
}