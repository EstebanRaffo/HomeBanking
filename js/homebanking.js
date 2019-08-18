//Declaración de variables
var nombreUsuario = 'Esteban Raffo';
var saldoCuenta = 100000;
var limiteExtraccion = 3000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = +prompt('Ingrese nuevo límite de extracción: ');
    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla();
    alert('El nuevo límite es: ' + limiteExtraccion);
}

function extraerDinero() {
    var montoAExtraer = +prompt('Monto a Extraer');
    var saldoAnterior = saldoCuenta;

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

// 2.3  Guía: parte 3 - Paso 2: Desarrollá la funcionalidad de pago de servicios

function depositarDinero() {
    var montoADepositar = +prompt('Monto a Depositar: ');
    var saldoAnterior = saldoCuenta;
    saldoCuenta += montoADepositar;
    actualizarSaldoEnPantalla();
    alert('Has depositado: ' + montoADepositar + '\nSaldo anterior: ' + saldoAnterior + '\nSaldo Actual: ' + saldoCuenta);
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

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