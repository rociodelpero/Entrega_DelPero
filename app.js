

//CALCULADORA INTERACTIVA

//Creación del while, el bucle sigue hasta que el usuario tipea ESC
let respuestaUsuario = prompt ("¿Querés entrar a la calculadora?")

while (respuestaUsuario != "ESC") {
    alert ('Entramos en la calculadora')

//Creación funciones de cálculo (flecha)
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
    let numero1 = prompt("ingresá el primer dígito para sumar");
    let numero2 = prompt("ingresá el segundo número para sumar");
    resultado = sumar (numero1,numero2);
    alert(`tu resultado es ${resultado}`)
    respuestaUsuario = prompt ("Querés seguir?")
}

else if ( calculo == 2 ) {
    let numero1 = prompt("ingresá el primer dígito para restar");
    let numero2 = prompt("ingresá el segundo número para restar");
    resultado = restar (numero1,numero2);
    alert(`tu resultado es ${resultado}`)
    respuestaUsuario = prompt ("Querés seguir?")
}

else if ( calculo == 3 ) {
    let numero1 = prompt("ingresá el primer dígito para multiplicar");
    let numero2 = prompt("ingresá el segundo número para multiplicar");
    resultado = multiplicar (numero1,numero2);
    alert(`tu resultado es ${resultado}`)
    respuestaUsuario = prompt ("Querés seguir?")
}

else if ( calculo == 4 ) {
    let numero1 = prompt("ingresá el primer dígito para dividir");
    let numero2 = prompt("ingresá el segundo número para dividir");
    resultado = dividir (numero1,numero2);
    alert(`tu resultado es ${resultado}`)
    respuestaUsuario = prompt ("Querés seguir?")
}

else {
    alert ("error, no se encontró la operación")
}

}