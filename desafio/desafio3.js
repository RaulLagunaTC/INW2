const leia = require("prompt-sync")()

let numero
let total=0

numero = parseFloat(leia("Digite o número inteiro positivo: "))

for(let x=1; x<=numero; x++){
    if((x%2) ==1){
        console.log(x)
        total = total + x
    }
}
console.log("Total: "+total)