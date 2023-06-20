const leia=require("prompt-sync")()

let matriculas = ["mat01","mat02","mat03","mat04"]
let alunos = ["Marcos","Pedro","Maria","Paulo"]
let notas = [0,0,0,0]
let situacao

console.log("MAT\tALUNOS\tNOTAS\tSIT")
console.log("-----------------------------------------------------")
for(let i=0;i<matriculas.length;i++){
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i]+'\t'+situacao)
}

console.log("-----------------------------------------------------")

console.log("Digitação de notas")
for(let i=0; i<matriculas.length; i++){
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+situacao)
    notas[i] = leia("Digite a nota dos alunos: ")
}

console.log("\n-----------------------------------------------------")

console.log("MAT\tALUNOS\tNOTAS\tSIT")
for(let i=0; i<matriculas.length; i++){
    if(notas[i]>5){
        situacao = "APROVADO"
    }
    else{
        situacao = "REC"
    }
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i]+'\t'+situacao)
}

console.log("\n-----------------------------------------------------")

console.log("ALTERAÇÃO DE DADOS")
let matricula = leia("Digite a matricula do aluno que deseja trocar a nota: ")
for(let i=0; i<matriculas.length; i++){
    if(matricula == matriculas[i]){
        console.log(alunos[i]+" a nota atual é: "+notas[i])
        notas[i] = leia("Digite a nova nota: ")
    }
}

console.log("\n-----------------------------------------------------")

console.log("MAT\tALUNOS\tNOTAS\tSIT")
for(let i=0; i<matriculas.length; i++){
    if(notas[i]>5){
        situacao = "APROVADO"
    }
    else{
        situacao = "REC"
    }
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i]+'\t'+situacao)
}


