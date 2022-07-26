

//   un while que dentro tenga llamadas a funciones
//  entonces arman un sistema donde el usuario entra y sale cuando quiere
//  piedra papel o tijera

// let respuestaUsuario = confirm ('¿Contamos hasta 100?')

// while (respuestaUsuario) {
//     alert ('Entramos en el bucle')
//     respuestaUsuario = confirm ('Querés seguir?')
// }

// function redondeo(valor){
//     return Math.round(valor)
// }
// for (let index = 0; index < 5; index++) {
//     let entrada = prompt("INGRESAR NUMERO");
//     alert(redondeo(entrada));
// }


// function validacion(cadena){
//     return cadena != '';
// }
// let entrada =  prompt("INGRESAR CADENA");
// while (entrada != 'ESC') {
//     alert(validacion(entrada));
//     entrada = prompt("INGRESAR CADENA");
// }


// function numeroMaximo (valor1, valor2) {
//     if ( valor1 > valor2 ) {
//         return valor1;
//         }
//         return valor2;
// }

// numeroMaximo (10,20)
// console.log(numeroMaximo)


// function saludar() {
//     respuesta = prompt ("Hola, ¿cómo estuvo tu día?");
//     if (respuesta === "bien") {
//         alert("me alegro")
//     } else {
//         alert("una pena")
//     }  
//     }
    
// saludar()

let respuestaUsuario = prompt ("¿Querés entrar a la calculadora?")

while (respuestaUsuario != "ESC") {
    alert ('Entramos en la calculadora')
    //respuestaUsuario = prompt ("Querés seguir?")
 //}

//calculadora
//Creación funciones de cálculo
const sumar = ( num1, num2 ) => {
    return parseInt (num1) + parseInt (num2);
}

const restar = ( num1, num2 ) => {
    return parseInt (num1) - parseInt (num2);
}

const multiplicar = ( num1, num2 ) => {
    return parseInt (num1) * parseInt (num2);
}

const dividir = ( num1, num2 ) => {
    return parseInt (num1) / parseInt (num2);
}

alert ("¿Qué cálculo querés hacer?")
let calculo = prompt("1: suma,  2: resta,  3: multiplicación,  4: división")

if ( calculo == 1 ) {
    let numero1 = prompt("igresá el primer dígito para sumar");
    let numero2 = prompt("ingresá el segundo número para sumar");
    resultado = sumar (numero1,numero2);
    alert(`tu resultado es ${resultado}`)
    respuestaUsuario = prompt ("Querés seguir?")
}

else if ( calculo == 2 ) {
    let numero1 = prompt("igresá el primer dígito para restar");
    let numero2 = prompt("ingresá el segundo número para restar");
    resultado = restar (numero1,numero2);
    alert(`tu resultado es ${resultado}`)
    respuestaUsuario = prompt ("Querés seguir?")
}
else if ( calculo == 3 ) {
    let numero1 = prompt("igresá el primer dígito para multiplicar");
    let numero2 = prompt("ingresá el segundo número para multiplicar");
    resultado = multiplicar (numero1,numero2);
    alert(`tu resultado es ${resultado}`)
    respuestaUsuario = prompt ("Querés seguir?")
}
else if ( calculo == 4 ) {
    let numero1 = prompt("igresá el primer dígito para dividir");
    let numero2 = prompt("ingresá el segundo número para dividir");
    resultado = dividir (numero1,numero2);
    alert(`tu resultado es ${resultado}`)
    respuestaUsuario = prompt ("Querés seguir?")
}
else {
    alert ("error, no se encontró la operación")
}
}