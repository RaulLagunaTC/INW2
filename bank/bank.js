class Conta{
    constructor(numero,cpf,saldo,ativo){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativo = ativo;
    }
    ativar(){
        this.ativo = true;
    }
    credito(valor){
        if(this.ativo){
           if(valor<0){
            console.log("Impossivel realizar, valor negativo...")
           }
        
        else if(valor==0){
            console.log("Impossivel Realizar, valor zerado...")
        }
        else{
            this.saldo+=valor
        }
        }
    
        else{
        console.log("Conta Inativa!")
    }
}

    debito(valor){
        if(this.ativo){
            if(valor<0){
                console.log("Impossivel realizar, valor negativo...")
            }
            else if(valor==0){
                console.log("Impossivel realizar, valor zerado...")
            }
            else if(valor>=this.saldo){
                console.log("Impossivel realizar, valor indisponivel...")
            }
            else{
                this.saldo -= valor
            }
        } 
        else {
            console.log("Conta Inativa!")
        }  
            
    } 
    
}
//SUB-CLASSE POUPANÇA - Vitor Diamantino
class poupanca extends Conta {
    constructor(numero,cpf,saldo,ativo,diaAniversarioConta){
        super(numero,cpf,saldo,ativo);
        this.diaAniversarioConta = diaAniversarioConta;
    }
    correcao(dia){
        if (this.diaAniversarioConta == dia){
        this.saldo = (this.saldo*0.05)+this.saldo
        console.log("analisando correção...")
        } 
        else {
        console.log("hoje não é seu aniversário, então não houve alteração")
        }
       
    }

}
//SUB-CLASSE CORRENTE - Mateus Duarte
class corrente extends Conta{
    constructor(numero,cpf,saldo,ativo,contadorTalao){
       super(numero,cpf,saldo,ativo);
       this.contadorTalao = contadorTalao;
    }
pedirTalao(){
        let solicitarCheque = leia("Deseja solicitar talão? Digite S para sim e N para não:  ")
        if (solicitarCheque == "S"){
            if(this.saldo >= 30){
                let cheques = parseInt(leia("Digite a quantidade de cheques desejada:  "));
                if (cheques >= 1 && cheques <= this.contadorTalao) {
                    let valorCheques = 30 * cheques
                    this.saldo = this.saldo - valorCheques
                    console.log("Você retirou "+cheques+" cheque(s) da sua conta")
                }
                else {
                    console.log("Quantidade de cheques inválida. O número de cheques deve ser entre 1 e 3.");
                }
            }  
            else{
                console.log("Você não tem dinheiro suficiente para retirar talões de cheque.")
            }
        }
        else{
            console.log("Você não deseja retirar nenhum cheque.")
        }
    }
}
//SUB-CLASSE ESPECIAL - Raul Laguna
class especial extends Conta{
    constructor(numero,cpf,saldo,ativo,limite){
        super(numero,cpf,saldo,ativo);
        this.limite = limite;
     }
    usarLimite(valor){
        if(valor > this.limite){
            console.log("Impossível realizar, limite indisponível...")
        }
        else{
            this.limite = this.limite - valor
            this.credito(valor)
        }
        console.log("Limite atual é de : "+this.limite)
        console.log("Saldo atual da conta : "+this.saldo)
    }
}

//SUB-CLASSE ESTUDANTIL
class estudantil extends Conta{
    constructor(numero,cpf,saldo,ativo,limiteEstudantil){
        super(numero,cpf,saldo,ativo);
        this.limiteEstudantil = limiteEstudantil;
    }
    usarEstudantil(valor){
        if (valor<0){
            console.log("Impossivel realizar, saldo negativo...")
        }
        else if (valor ==0){
            console.log("Impossivel realizar, saldo negativo...")
        }
        else if (valor > (this.saldo + this.limiteEstudantil)){
            console.log("Impossivel realizar, usar valor no limite do saldo...")
        }
        else {
            this.limiteEstudantil = this.limiteEstudantil - valor
            credito(valor)
        }
        
    }
}

//PROGRAMA PRINCIPAL
const leia = require("prompt-sync")()
let opcao = ""
let valor = 0 
//MONTANDO MENU
do {
    console.log("")
    console.log("1 - CONTA POUPANÇA")
    console.log("2 - CONTA CORRENTE")
    console.log("3 - CONTA ESPECIAL")
    console.log("4 - ESTUDANTIL")
    console.log("5 - SAIR")
    opcao = leia("Digite o Número da sua opção : ")
    
    if(opcao == "1"){
        console.log("Testando a conta poupança ")
        let numero = leia("Digite o número da conta : ")
        let cpf = leia("Digite o cpf da conta : ")
        let diaAniversarioConta = leia("Digite o dia do aniversário da conta : ")
        let dia = leia("Digite o dia de hoje : ")
        let cp1 = new poupanca(numero,cpf,0,false,diaAniversarioConta)
        let op=""
        cp1.ativar()
        for (let x=1;x<=10;x++){
            console.log("Movimento: "+x)
            valor = parseInt (leia("Digite o valor: "))
            op = ("Digite D debito ou C crédito")
            if (op == "D"){
                cp1.debito=(valor)
            }
            else if (op == "C"){
                cp1.credito(valor)
            }
            cp1.correcao(dia)
            console.log("Saldo atual R$ : "+cp1.saldo )

        }
    }
    else if(opcao == "2"){
    console.log("testando conta corrente")
    let numero = parseInt(leia("Digite o número da conta : "))
    let cpf = leia("Digite o cpf da conta : ")
    let cc1 = new corrente(numero,cpf,0,false,3)
    cc1.ativar()
    for(let x=1; x<=10; x++){
    console.log("Movimento "+x)
    valor = parseInt(leia("Digite o valor: "))
    op = leia("Digite D - débito ou C - crédito : ")
       if(op == "D"){
            cc1.credito(valor)
        }
        else if (op == "C"){
            cc1.debito(valor)
        }
    }
    console.log("Saldo atual R$ : "+cc1.saldo)
    if(cc1.saldo >= 30){
        cc1.pedirTalao()
        console.log("Saldo final : "+cc1.saldo)
    }
    else{
        console.log("Você não possui saldo suficiente para pedir talões")
    }
}
 else if(opcao == "3"){
        let numero = parseInt(leia("Digite o número da conta : "))
        let cpf =  leia("Digite o cpf da conta : ")
        let ce1 = new especial(numero,cpf,0,false,1000)
        ce1.ativar()
        for(let x=1; x<=10; x++){
            console.log("Movimento "+x)
            valor = parseInt(leia("Digite o valor :"))
            op = leia("Digite D - débito ou C - crédito : ")
                if(op == "D"){
                    ce1.credito(valor)
                }
                else if (op == "C"){
                    if(valor > (ce1.saldo + ce1.limite)){
                        console.log("Não há dinheiro suficiente")
                    }
                    else if(valor > ce1.saldo){
                        let x = valor -  ce1.saldo
                        ce1.usarLimite(x)
                    }
                    ce1.debito(valor)
                }
    }
}   
    
    else if(opcao == "4"){
        console.log("Testando conta estudantil ")
        let numero = parseFloat =(leia("Digite o número da conta: "))
        let cpf = leia("Digite o cpf:")
        let cel1 = new estudantil(numero, cpf, 0, false, 5000)
        let op=""
        cel1.ativar(Conta)
        let valor=0
        for (let x=1;x<=5;x++){
            valor = parseInt (leia("Digite o valor:"))
            op = leia("Digite D debito ou C crédito: ")
            if (op == "D"){
                cel1.debito(valor)
            }
            else if (op == "C"){
                cel1.credito(valor)
            }
            console.log("Saldo atual R$ : "+cel1.saldo )
        }
        valor = (leia("Usar limite ? valor :"))
        cel1.usarEstudantil(valor)
        console.log("Saldo final :" +cel1.saldo)
    }
    else if(opcao == "5"){
        console.log("Saindo do programa... ")
    }
}while(opcao !="5")
console.log("Fim do programa, volte sempre ")

/*

let numero = parseFloat(leia("Digite o numero da conta: "))
let cpf = leia ("Digite o cpf da conta: ")
let c1 =  new Conta(numero,cpf,0,false)
let op =""
c1.ativar()
for (let x=1; x<=10; x++){
    console.log("Movimento: "+x)
    console.log("Saldo atual da conta: "+c1.saldo)
    op = leia("Digite D- debito e C- credito: ")
    if(op=="D"){
        valor = parseInt (leia("Digite o valor para debito: "))
        c1.debito(valor)
    }
    else if(op=="C"){
        valor = parseInt (leia("Digite o valor para credito: "))
        c1.credito(valor)
    }
    console.log("Saldo final da conta: "+c1.saldo)
}
*/
