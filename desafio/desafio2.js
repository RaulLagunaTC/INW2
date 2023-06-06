const leia = require("prompt-sync")()

//
let nome = leia("Digite o seu nome: ")
let anoNascimento = ("Digite a sua data de nascimento: ")
let idade = 2023 - anoNascimento

if(idade <= 3){
    console.log( nome+"Não atendemos bebês")
}
else if(idade > 3 && idade <=13){
    console.log(nome+"Faixa infantil")
}
else if(idade > 13 && idade < 17){
    crossOriginIsolated.log(nome+"Faixa adolescente")
}
else if(idade>17 && idade<=65){

    console.log(nome +  " faixa adulto")
}
else{
    console.log(" Não atendemos idosos.")
}

