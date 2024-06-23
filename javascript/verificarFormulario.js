function validar(){
    var $contador = 0;
    var $fechaActual = new Date();
    var $anioActual = $fechaActual.getFullYear();
    var $mesActual = $fechaActual.getMonth()+1;
    var $diaActual = $fechaActual.getDate();
    var $numeroTarjeta = document.getElementById("numeroTarjeta");
    var $codigoTarjeta = document.getElementById("codigoTarjeta");
    var $correo = document.getElementById("correo");
    var $dia = document.getElementById("dia");
    var $mes = document.getElementById("mes");
    var $anio = document.getElementById("anio");
    var $verificar;
    var $verificar2;
    var $verificar3;
    var $expresionReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;   
    if(($numeroTarjeta.value.trim().length == 0)||($numeroTarjeta.value.length < 8)){
        $numeroTarjeta.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 260px 2px; ";
    }else{
        $verificar = isNaN($numeroTarjeta.value);
        if(!$verificar){
            $numeroTarjeta.style="border:2px solid green; background-image: url('../imagenes/icons8-comprobado.svg'); background-repeat: no-repeat; background-position: 260px 2px; ";
            $contador++;
        }else{
            $numeroTarjeta.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 260px 2px; ";
        }
    }
    if(($codigoTarjeta.value.trim().length == 0)||($codigoTarjeta.value.length < 3)||($codigoTarjeta.value.length >= 4)){
        $codigoTarjeta.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 260px 2px; ";
    }else{
        $verificar = isNaN($codigoTarjeta.value);
        if(!$verificar){
            $codigoTarjeta.style="border:2px solid green; background-image: url('../imagenes/icons8-comprobado.svg'); background-repeat: no-repeat; background-position: 260px 2px; ";
            $contador++;
        }else{
            $codigoTarjeta.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 260px 2px; ";
        }
    }
    if(($correo.value.trim().length == 0)|| !($expresionReg.test($correo.value))){
        $correo.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 260px 2px; ";
    }else{
        $correo.style="border:2px solid green; background-image: url('../imagenes/icons8-comprobado.svg'); background-repeat: no-repeat; background-position: 260px 2px; ";
        $contador++;
    }
    $verificar = isNaN($dia.value);
    $verificar2 = isNaN($mes.value);
    $verificar3 = isNaN($anio.value);
    if(!($dia.value.trim().length == 0) && !($mes.value.trim().length == 0) && !($anio.value.trim().length == 0)){
        if(!$verificar && !$verificar2 && !$verificar3){
            if(($dia.value > 0 && $mes.value > 0 && $anio.value > 0) && ($anio.value>$anioActual || ($dia.value>$diaActual || $mes.value>$mesActual))){
                if(esBisiesto($anio)){
                    if(($mes.value == 1 && $dia.value <=31)||($mes.value == 2 && $dia.value <=29)||($mes.value==3 && $dia.value <=31)||($mes.value==4 && $dia.value <=30)||($mes.value==5 && $dia.value<=31)||($mes.value==6 && $dia.value<=30)||($mes.value==7 && $dia.value<=31)||($mes.value==8 && $dia.value<=31)||($mes.value==9 && $dia.value<=30)||($mes.value==10 && $dia.value<=31)||($mes.value==11 && $dia.value<=30)||($mes.value==12 && $dia.value<=31)){
                        $dia.style="border:2px solid green; background-image: url('../imagenes/icons8-comprobado.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";
                        $mes.style="border:2px solid green; background-image: url('../imagenes/icons8-comprobado.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";
                        $anio.style="border:2px solid green; background-image: url('../imagenes/icons8-comprobado.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";
                        $contador++;
                    }else{
                        $dia.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";
                        $mes.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";
                        $anio.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";
                    }
                }else{
                    if(($mes.value == 1 && $dia.value <=31)||($mes.value == 2 && $dia.value <=28)||($mes.value==3 && $dia.value <=31)||($mes.value==4 && $dia.value <=30)||($mes.value==5 && $dia.value<=31)||($mes.value==6 && $dia.value<=30)||($mes.value==7 && $dia.value<=31)||($mes.value==8 && $dia.value<=31)||($mes.value==9 && $dia.value<=30)||($mes.value==10 && $dia.value<=31)||($mes.value==11 && $dia.value<=30)||($mes.value==12 && $dia.value<=31)){
                        $dia.style="border:2px solid green; background-image: url('../imagenes/icons8-comprobado.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";
                        $mes.style="border:2px solid green; background-image: url('../imagenes/icons8-comprobado.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";
                        $anio.style="border:2px solid green; background-image: url('../imagenes/icons8-comprobado.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";
                        $contador++;
                    }else{
                        $dia.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";
                        $mes.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";
                        $anio.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";                   
                    }    
                }   
            }else{
                $dia.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";
                $mes.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";
                $anio.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";            
            }
        }else{
            $dia.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";
            $mes.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";
            $anio.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";        
        }    
    }else{
        $dia.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";
        $mes.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";
        $anio.style="border:2px solid red; background-image: url('../imagenes/icons8-error-30.svg'); background-repeat: no-repeat; background-position: 45px 2px; ";
    }
    if($contador==4){
        alert("COMPRA EXITOSA!!!")
    }
}
function esBisiesto($anio){
    if($anio < 1582)
        {
            if($anio % 4 == 0) 
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            if(($anio % 400 == 0) || (($anio % 4 == 0) && !($anio % 100 == 0)))
            {
                return true;
            }
            else 
            {
                return false;
            }
        }
}
