//Declaración de variables
var nombreUsuario = 'Esteban Raffo';
var saldoCuenta = 1000000;
var limiteExtraccion = 3000;
var precioAgua = 350;
var precioTelefono = 425;
var precioLuz = 210;
var precioInternet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var códigoSeguridad = 'abc123';


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

function esValorValido(valor){
  
    if(valor != 0) 
        return true; 
    else
        return false;
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = +prompt('Ingrese nuevo límite de extracción: ');
    
    if(esValorValido(nuevoLimite)){
        limiteExtraccion = nuevoLimite;
        actualizarLimiteEnPantalla();
        alert('El nuevo límite es: ' + limiteExtraccion);
    }
    else{
        return;
    }
}

function extraerDinero() {
    var saldoAnterior = saldoCuenta;
    var montoAExtraer = +prompt('Monto a Extraer');
    
    if(esValorValido(montoAExtraer)){
        if(montoAExtraer <= saldoCuenta){
            if(montoAExtraer <= limiteExtraccion){
                if(montoAExtraer % 100 == 0){
                    saldoCuenta -= montoAExtraer;
                    actualizarSaldoEnPantalla();
                    alert('Has retirado: ' + montoAExtraer + '\nSaldo anterior: ' + saldoAnterior + '\nSaldo Actual: ' + saldoCuenta);
                }
                else{
                    alert('Solo puedes extraer billetes de 100');
                }
            }
            else{
                alert('La cantidad de dinero que deseas extraer es mayor a tu límite de extracción');
            }
        }
        else{
            alert('No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero');
        }
    }
    else{
        return;
    }
}


function depositarDinero() {
    var saldoAnterior = saldoCuenta;
    var montoADepositar = +prompt('Monto a Depositar: ');

    if(esValorValido(montoADepositar)){
        saldoCuenta += montoADepositar;
        actualizarSaldoEnPantalla();
        alert('Has depositado: ' + montoADepositar + '\nSaldo anterior: ' + saldoAnterior + '\nSaldo Actual: ' + saldoCuenta);
    }    
    else{
        return;
    }
}

function pagarServicio() {
    var opcion = +prompt('Ingrese el número que corresponda con el servicio que querés pagar' + '\n1- Agua' + '\n2- Luz' + '\n3- Internet' 
    + '\n4- Teléfono');

    switch(opcion){
        case 1:
            pagarEsteServicio(1, precioAgua);
            break;
        case 2:
            pagarEsteServicio(2, precioLuz);
            break;
        case 3:
            pagarEsteServicio(3, precioInternet);
            break;
        case 4:
            pagarEsteServicio(4, precioTelefono);
            break;
        default:
            alert('No existe el servicio seleccionado');
            break;
    }
}

function pagarEsteServicio(idServicio, precioServicio){
    var servicios = ['','Agua', 'Luz', 'Internet', 'Teléfono'];

    if(precioServicio <= saldoCuenta){
        var saldoAnterior = saldoCuenta; 
        saldoCuenta -= precioServicio;
        alert('Has pagado el servicio' + servicios[idServicio] + '\nSaldo anterior: ' + saldoAnterior + '\nDinero descontado: ' + 
        precioServicio + '\nSaldo Actual: ' + saldoCuenta);
        actualizarSaldoEnPantalla();
    }
    else{
        alert('No hay suficiente saldo en tu cuenta para pagar este servicio');
    }
}

function transferirDinero() {
    var monto = +prompt('Ingrese monto a transferir');

    if(esValorValido(monto)){
        if(monto <= saldoCuenta){
            let cuenta = +prompt('Ingrese la cuenta a donde va a transferir');
            if(esCtaAmiga(cuenta)){
                saldoCuenta -= monto;
                actualizarSaldoEnPantalla();
                alert('Se han transferido: ' + monto + '\nCuenta destino: ' + cuenta);
            }
            else{
                alert('Solo puede transferirse dinero a una cuenta amiga');
            }
        }
        else{
            alert('No tiene saldo suficiente para la transferencia solicitada');
        }
    }
    else{
        return;
    }

}

function esCtaAmiga(cuenta){
    if(cuenta == cuentaAmiga1 || cuenta == cuentaAmiga2){
        return true;
    }
    else{
        return false;
    }
}

function iniciarSesion() {
    var clave = prompt('Ingrese su clave de cuenta');

    if(clave == códigoSeguridad){
        alert('Bienvenido ' + nombreUsuario + ' ya puedes comenzar a realizar operaciones');
        cargarNombreEnPantalla();
        actualizarSaldoEnPantalla();
        actualizarLimiteEnPantalla();
    }
    else{
        saldoCuenta = 0;
        // document.getElementsByClassName("white-container").style.display = 'none';
        // document.getElementsByTagName('button').style.display = 'none';
        alert('Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad');
    }
}

// function ocultar(){
//     document.getElementsByClassName("white-container").style.visibility = 'hidden';
// }

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}