
function temporizador(){
    var $min = 5;
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
    }
    setInterval(cargarSegundos,1000);   
}