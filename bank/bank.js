class Conta{
    constructor(numero,cpf,saldo,ativo){
    this.numero = numero;
    this.cpf = cpf;
    this.saldo = saldo;
    this.ativo = ativo
    }
    
    ativar(){
    this.ativo = true;
    }
    
    credito(valor){
        if (this.ativo){
        if(valor<0){
    console.log("Impossivel realizar, valor negativo")
    }
    else if(valor==0){
    console.log("Impossivel realizar, valor zerado...")
    }
    else {
    this.saldo += valor
    }
    }
    else {
    console.log("Conta inativa....")
    }
    }
    
    debito(valor){
    if (this.ativo){
    if(valor<0){
    console.log("Impossivel realizar, valor negativo...")
    }
    else if(valor ==0 ){
    console.log("Impossivel realizar, valor zerado...")
    }
    else if (valor>this.saldo){
    console.log("Impossivel realizar, saldo indisponivel...")
    }
    else {
    this.saldo -= valor
    }
    }
    else {
    console.log("Conta inativa...")
    }
    }
    
    }
// Sub Classe Especial 
    class especial extends Conta{
            constructor(numero,cpf,saldo,ativo,limite){
                super(numero,cpf,saldo,ativo)
                this.limite = limite
             }
        
        
            usarLimite(valor){
                if(valor > this.limite){
                    console.log("Impossível realizar, limite indisponível...")
                }
                else{
                    this.limite = this.limite - valor
                    this.credito(valor)
                }
                console.log("Limite atual : "+this.limite)
                console.log("Saldo atual : "+this.saldo)
            }
        }
    //Sub Classe Estudantil
    class estudantil extends Conta{
        constructor(numero, cpf, saldo, ativo, limiteEstudantil){
            super(numero, cpf, saldo, ativo);
            this.limiteEstudantil = limiteEstudantil;
        }
        usarEstudantil(valor){            
                if(valor<0){
                console.log("Impossivel realizar, valor negativo...")
                }
                else if(valor ==0 ){
                console.log("Impossivel realizar, valor zerado...")
                }
                else if(valor > (this.saldo + this.limiteEstudantil)){
                        console.log("Impossível realizar, sem valor no limite e saldo...")
                }
                else{
                    this.limiteEstudantil = this.limiteEstudantil - valor
                    credito(valor)
                }
            }
    }
    
    
    // PROGRAMA PRINCIPAL
    const leia = require("prompt-sync")()
    let opcao = ""

    //Montando Menu
    do{
    console.log("")
    console.log("1 - Conta Poupança")
    console.log("2 - Conta Corrente")
    console.log("3 - Conta Especial")
    console.log("4 - Estudantil")
    console.log("5 - Sair")
    opcao = leia("Digite o número da sua opção")
    if (opcao == "1"){
        console.log("Testando conta poupança")
        let numero = parseInt(leia("digite o número da conta : "))
        let cpf =  leia("Digite o cpf : ")
        let diaAniversarioPoupanca = leia("Digite o aniversario da sua conta : ")
        let dia = leia("Digite a data de hoje : ")
        let cp = new Poupanca(numero,cpf,0,false,diaAniversarioPoupanca)
        cp.ativar()

    for(let i=1; i<=10; i++){
        console.log("Movimento "+i)
        console.log("Saldo da conta : "+cp.saldo+" R$")
        valor = parseInt(leia("Digite o valor :"))
        op = leia("Digite D - débito ou C - crédito : ").toUpperCase()
            if(op == "C"){
                cp.credito(valor)
            }
            else if (op == "D"){
                cp.debito(valor)
            }
    }

    cp.correcao(dia)
    console.log("Saldo final da conta : "+cp.saldo+" R$")
}
    }
    else if (opcao == "2"){
        console.log("Testando conta corrente")
            let numero = parseInt(leia("digite o número da conta : "))
            let cpf = leia("Digite o cpf : ")
            let cc = new Corrente(numero,cpf,0,false,3)
            cc.ativar()

        for(let i=1; i<=10; i++){
            console.log("Movimento "+i)
            console.log("Saldo da conta : "+cc.saldo+" R$")
            valor = parseInt(leia("Digite o valor :"))
            op = leia("Digite D - débito ou C - crédito : ").toUpperCase()

        if(op == "C"){
            cc.credito(valor)
        }
        else if (op == "D"){
            cc.debito(valor)
        }
    }

    console.log("Saldo final da conta : "+cc.saldo+" R$")
    if(cc.saldo >= 30){
        cc.pedirTalao()
        console.log("Saldo final da conta : "+cc.saldo+" R$")
    }
    else{
        console.log("Você não possui saldo suficiente para pedir talões")
        }
    }
}
    else if (opcao == "3"){ 
                console.log("testando conta especial")
                    let numero = parseInt(leia("Digite o número da conta : "))
                    let cpf =  leia("Digite o cpf : ")
                    let ce1 = new Especial(numero,cpf,0,false,1000)
                    ce1.ativar()
        
                for(let x=1; x<=10; x++){
                    console.log("Movimento "+x)
                    console.log("Saldo da conta : "+ce1.saldo)
                    valor = parseInt(leia("Digite o valor :"))
                    op = leia("Digite D - débito ou C - crédito : ")
                            
                if(op == "D"){
                    ce1.debito(valor)
                }
                else if (op == "C"){
                    if(valor > (ce1.saldo + ce1.limite)){
                    console.log("Não há dinheiro suficiente")
                    }
                    else if(valor > ce1.saldo){
                        let x = valor -  ce1.saldo
                        ce1.usarLimite(x)
                    }
                        ce1.credito(valor)
                }
           }
      }
    else if (opcao == "4"){
        console.log("Testando conta estudantil")
    }
    else if (opcao == "5"){
        console.log("Saindo do programa")
    }


}while(opcao !="S")
console.log("Fim do programa, volte sempre")
    
    
    /*
    let numero = parseInt(leia("Digite o numero da conta : "))
    let cpf = leia("Digite o cpf da conta : ")
    let c1 = new Conta(numero,cpf,0,false)
    let op=""
    let valor = 0
    c1.ativar()
    for (let x=1; x<=10; x++){
    console.log("Movimento : "+x)
    console.log("Saldo atual conta : "+c1.saldo)
    op = leia("Digite D - debito ou C para credito : ")
    if(op=="D"){
    valor = parseInt(leia("Digite o valor para debito : "))
    c1.debito(valor)
    }
    else if(op=="C"){
    valor = parseInt(leia("Digite o valor para crédito : "))
    c1.credito(valor)
    }
    }
    console.log("Saldo final da conta "+c1.saldo)
*/
