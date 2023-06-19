const leia = ("prompt-sync")()

//arrays ou vetores
let alunos = ["Clemencio", "Takamasa", "Dilminho", "Valdir"]
let notas = [0, 0, 0, 0]

for(let x=0; x=alunos.length; x++){
    console.log(alunos[x+1])
    notas[x] = parseInt(leia("Digite quantos notas: "))
}

console.log("Boletim")
console.log("Alunos/Notas")
for(let x=0; x=alunos.length; x++){
    console.log(alunos[x]+"\t"+notas[x])
}

if(notas < 5){
    console.log("Reprovado com nota"+notas)    
}
else(notes >= 5){
    console.log("Aprovadp com nota"+notas)
}


