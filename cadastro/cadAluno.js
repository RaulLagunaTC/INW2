//requisitando o pacote mongoose
const mongoose = require('mongoose');

//criar chave de conexão
mongoose.connect('mongodb://127.0.0.1:27017/escola',
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        serverSelectionTimeoutMS : 20000
    }
)

//executando a conexão
const db = mongoose.connection;

//codigos de teste da conexão
db.on('error', console.error.bind(console,'connction error :'))
db.once('open', function(){
    console.log("Conexao com mongoDB realizada")
})

//segunda fase usando banco

//criando um Schema
const alunoSchema = new mongoose.Schema({
    matricula : String,
    nome : String,
    idade : Number,
    turma : String
})

// 2- criando o model
const Alunos = mongoose.model('Alunos', alunoSchema)

// Colocar dados dentro desta collection
const paulo = new Alunos({
    matricula : 'rm501',
    nome : 'Paulo Silva',
    idade : 18,
    turma : '2MIB'
})
paulo.save();

const carlos = new Alunos({
    matricula : 'rm501',
    nome : 'Carlos Silva',
    idade : 18,
    turma : '2MIB'
})
carlos.save();
