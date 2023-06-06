const leia = require("prompt-sync")()

//variaveis + entrada
let usuario = leia("Difite o nome do usuario: ")
let salario = parseFloat(leia("Digite o valo do seu salário: "))
let valorImposto  

//programa
        if(salario <= 2500){
            console.log(usuario + "você é isento!")
    }
        else if(salario > 2500 && salario <= 5000){
                valorImposto = salario * 0.15
            console.log("Oi sr."+usuario+"seu imposto é" +valorImposto)
            console.log("Seu salário liquido é"+(salario-valorImposto))
    }       
        else(){
            valorImposto = salario * 0.25
        console.log("Oi sr."+usuario+"seu imposto é" +valorImposto)
        console.log("Seu salário liquido é"+(salario-valorImposto))
    }


// fim do program
console.log("Fim do programa")

