const leia = require("prompt-sync")();

let numero = 0
let contador = -1
let total = 0
let maiorNumero = 0

do {
    total = total + numero
    if(numero > maiorNumero){
        maiorNumero = numero
    }
    numero = parseInt(leia("DIgite um número"))
}while(numero < 0)
console.log("Total: "+total)
console.log("Maior número: "+maiorNumero)
console.log("Quantidade do números: "+contador)

