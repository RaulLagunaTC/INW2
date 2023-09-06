var currenteUser

function createLogin(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().CreateUserWithEmailAndPassword(email, password).then(user =>{
        console.log('Usuario', user);
        alert('Usuario criado e feito o login');
    }) .catch(err =>{
        console.log('error', err);
    });
}

function loginEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().SingInWithEmailAndPassword(email, password).then(()=>{
        alert('Usuario Logado');
    }) .catch(err =>{
        console.error('error', err);
    });
}

currenteUser = firebase.auth().currenteUser;

function deleteUser(){
    if(currenteUser){
        currenteUser.delete().then(()=>{
            alert("Usuário deletado com sucesso");
        })
    }
}