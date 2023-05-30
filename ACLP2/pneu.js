class Pneu{
    constructor(id,descricao,ativo,estoque,preco,aro,diametro){
        this.id = id;
        this.descricao = descricao;
        this.ativo = ativo;
        this.estoque = estoque;
        this.preco = preco;
        this.aro = aro;
        this.diametro = diametro;
    }
    ativar(){
        this.ativo = true;
    }
    addEstoque(valor){
        if(this.ativo){
            if(valor<0){
            console.log("Impossivel realizar, estoque insulficiente")
           }
        
            else if(valor==0){
            console.log("Impossivel realizar, estoque zerado")
           }
        
           else {
            this.estoque+=valor
           }
        }
          else{
           console.log("Sem estoque")
          }
    }
          
    retirarEstoque(valor){
        if (this.ativo){
            if(valor<0){
            console.log("Impossivel realizar, no momento não tem no estoque...")
           }

           else if(valor ==0){
            console.log("Impossivel realizar, estoque zerado...")
           }
        
           else if( valor>=this.saldo){
            console.log("Impossivel realizar, estoque indisponivel..")
           }

           else {
            this.estoque -=valor
           }
        }

          else {
           console.log("Estoque inativo.....")
          }
        }
    }

//programinha
const leia = require("prompt-sync")();
let id = parseInt(leia("Digite o id do pneu:"))
let descricao = leia("Digite a descrição do pneu:")
let preco = parseInt(leia("Digite o preco do pneu:"))
let aro = parseInt(leia("Digite o aro do pneu:"))
let diametro = parseInt (leia("Digite o diâmetro do pneu:"))

let Pneu1 = new Pneu(id, descricao, false, 10, preco, aro, diametro,)
Pneu1.ativar()

for (let x=1; x<=5; x++){
    console.log("Movimento: "+x)
    console.log("Nós temos:"+Pneu1.estoque)
    valor = parseInt (leia("Digite o quanto deseja retirar: "))
    Pneu1.retirarEstoque(valor)
    }

    valor= parseInt(leia("Digite quantas pneus você quer colocar no estoque : "));
    Pneu1.addEstoque(valor);
    console.log("Incluimos no estoque : " + Pneu1.estoque) 










