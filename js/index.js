// Promedio de 3 materias

let sumanotas = 0;

function promedio (){
    for (let i = 1; i < 4 ; i++) {
        let numero = parseFloat(prompt("Ingrese su nota " + i ));
        if (isNaN(numero)){
            alert (numero + " No ingresaste un numero")
            return;
        } else if (numero <=0 || numero > 10){
            alert ("El numero ingresado debe ser entre 1 y 10")
            return;
        }
        sumanotas += numero;
    }

    let promedio = sumanotas / 3;
    alert("El promedio de los números ingresados es: " + promedio );
    if (promedio >= 6) {
        alert ("Aprobo la materia con un promedio de " + promedio)
    } else if (promedio <= 5){
        alert ("Tiene que hacer un recuperatorio")
    }

}    

promedio()