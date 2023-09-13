//criar a promise dentro de uma function
function FalarDepoisDe(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase)
        }, segundos * 1000)
    })
}

//chamada da function
FalarDepoisDe(4, "Teste de promises do 2mib")
.then(frase => frase.concat("Programando em vscode"))
.then(novaFrase => console.log(novaFrase))