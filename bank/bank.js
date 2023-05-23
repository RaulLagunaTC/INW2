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
    }
    else if (opcao == "2"){
        console.log("Testando conta corrente")
    }
    else if (opcao == "3"){
        console.log("Testando conta especial")
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
