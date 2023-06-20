const leia = require("prompt-sync")()

class Pessoa {
    constructor(cpf, nome, anoNasc){
        this.cpf = cpf;
        this.nome = nome;
        this.anoNasc = anoNasc
    }
    mostrarIdade(){
        console.log(2023 - this.anoNasc)
    }
}

class Aluno extends Pessoa{
    constructor(cpf, nome, anoNasc, matricula, nota){
        super(cpf, nome, anoNasc)        
        this.matricula = matricula;
        this.nota = nota
    }
}

//program principal

let p1 = new Aluno("111.222.333-44", "Marcos", 2008, "mat01", 0)
let p2 = new Aluno("222.333.444-55", "Maria", 2007, "mat02", 0)
let p3 = new Aluno("333.444.555-66", "Pedro", 2007, "mat03", 0)
let p4 = new Aluno("444.555.666-77", "Paulo", 2006, "mat04", 0)

let cadastro =[new Aluno("111.222.333-44", "Marcos", 2008, "mat01", 0),
p2 = new Aluno("222.333.444-55", "Maria", 2007, "mat02", 0),
p3 = new Aluno("333.444.555-66", "Pedro", 2007, "mat03", 0),
p4 = new Aluno("444.555.666-77", "Paulo", 2006, "mat04", 0)

]
console.log("MAT\tALUNO\tNOTA")
console.log("---------------------------------------")
console.log(p1.matriculo+'\t'+p1.nome+'\t'+p1.nota)
console.log(p2.matriculo+'\t'+p2.nome+'\t'+p2.nota)
console.log(p3.matriculo+'\t'+p3.nome+'\t'+p3.nota)
console.log(p4.matriculo+'\t'+p4.nome+'\t'+p4.nota)
console.log("---------------------------------------")

console.log("Digita de nota")
console.log(p1.nome)
p1.nota = parseInt(leia("Digite a nota do aluno"))
console.log(p2.nome)
p2.nota = parseInt(leia("Digite a nota do aluno"))
console.log(p3.nome)
p3.nota = parseInt(leia("Digite a nota do aluno"))
console.log(p4.nome)
p4.nota = parseInt(leia("Digite a nota do aluno"))

console.log("MAT\tALUNO\tNOTA")
console.log("---------------------------------------")
console.log(p1.matriculo+'\t'+p1.nome+'\t'+p1.nota)
console.log(p2.matriculo+'\t'+p2.nome+'\t'+p2.nota)
console.log(p3.matriculo+'\t'+p3.nome+'\t'+p3.nota)
console.log(p4.matriculo+'\t'+p4.nome+'\t'+p4.nota)
console.log("---------------------------------------")

console.log("\t")