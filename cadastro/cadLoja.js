const mongoose=require('mongoose');
const fs = require('fs');
const csv =require('csv-parser');

mongoose.connect('mongodb://127.0.0.1:27017/loja',{
    useNewUrlParser : true,
    useNewUrlParser: true,
    serverSelectionTimeout: 20000
})

const produtoScheme = new mongoose.Schema({
    codigo : String,
    descricao : String,
    valor : Number,
    estoque : Number
})

const Produtos = mongoose.model('Produtos',produtoScheme);

function lerCSVSalvarNoMongo(){
    const resulados = [];

    fs.createReadStream('exemplo - base.csv')
    .pipe(csv())//transformar em objeto

    .on('data', (dados)=>{
        resultado.push(dados);
    })
    .on('end',()=>{
        Produtos.insertMany(resultados)
        .then(()=>{
            console.log("Dados inseridos com sucesso");
            mongoose.connection.close();
        })
        .catch
    })
}