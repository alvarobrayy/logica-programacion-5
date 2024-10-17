const prompt = require("prompt-sync")();

let numeroSecreto = 45; 
let intentos = []; 
let numero;

function pedirNumero() {
    numero = Number(prompt("Adivina el número secreto (entre 1 y 100):"));
    
    if (isNaN(numero)) {
        console.log("Por favor, introduce un número válido.");
        pedirNumero(); 
    } else {
        intentos.push(numero);
        if (numero === numeroSecreto) {
            console.log("Felicidades, adivinaste el número secreto.");
            console.log("Números introducidos: " + intentos.join(", "));
        } else {
            console.log("Ups, el número secreto es incorrecto. Vuelve a intentarlo.");
            pedirNumero();
        }
    }
}

pedirNumero();

