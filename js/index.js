// Entrega dos. Funciones, objetos, Arrays

let funcion = prompt(`¿Qué operación quiere realizar?\n • suma \n • resta \n • multiplicacion \n • division`)
let num1 = parseInt(prompt(`Ingrese el num1`))
let num2 = parseInt(prompt(`Ingrese el num2`))
let results = {
  suma: [],
  resta: [],
  multiplicacion: [],
  division: []
}

function suma(a, b) {
  let res = a + b
  results.suma.push(res)
  return res
}
function resta(a, b) {
  let res = a - b
  results.resta.push(res)
  return res
}
function multiplicacion(a, b) {
  let res = a * b
  results.multiplicacion.push(res)
  return res
}
function division(a, b) {
  let res = a / b
  results.division.push(res)
  return res
}

if (funcion === "suma") {
  console.log(suma(num1, num2))
  console.log(results)
  prompt(`El resultado de la operacion es:`, suma(num1, num2))
} else if (funcion === "resta") {
  console.log(resta(num1, num2))
  console.log(results)
  prompt(`El resultado de la operacion es:`, resta(num1, num2))
} else if (funcion === "multiplicacion") {
  console.log(multiplicacion(num1, num2))
  console.log(results)
  prompt(`El resultado de la operacion es:`, multiplicacion(num1, num2))
} else if (funcion === "division") {
  console.log(division(num1, num2))
  console.log(results)
  prompt(`El resultado de la operacion es:`, division(num1, num2))
}


// Entrega uno.

// // Promedio de 3 materias

// let sumanotas = 0;

// function promedio (){
//     for (let i = 1; i < 4 ; i++) {
//         let numero = parseFloat(prompt("Ingrese su nota " + i ));
//         if (isNaN(numero)){
//             alert (numero + " No ingresaste un numero")
//             return;
//         } else if (numero <=0 || numero > 10){
//             alert ("El numero ingresado debe ser entre 1 y 10")
//             return;
//         }
//         sumanotas += numero;
//     }

//     let promedio = sumanotas / 3;
//     alert("El promedio de los números ingresados es: " + promedio );
//     if (promedio >= 6) {
//         alert ("Aprobo la materia con un promedio de " + promedio)
//     } else if (promedio <= 5){
//         alert ("Tiene que hacer un recuperatorio")
//     }

// }    

// promedio()
