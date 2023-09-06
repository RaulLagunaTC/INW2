const firebaseConfig = {
    apiKey: "AIzaSyC5aPwrYyzoTDcBekVVko3PHCmP0pIZ4vo",
    authDomain: "projeto2mibtest.firebaseapp.com",
    projectId: "projeto2mibtest",
    storageBucket: "projeto2mibtest.appspot.com",
    messagingSenderId: "205061573287",
    appId: "1:205061573287:web:996cfa3deb675f20a72982"
  };

firebase.initializeApp(firebaseConfig)  

const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
    const email = emailField.value;
    const password = passwordField.value;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
// Usuário logado com sucesso
    const user = userCredential.user;
        console.log('Usuário logado:', user);
        })
        .catch((error) => {
// Tratar erros de autenticação
    const errorMessage = error.message;
        console.error('Erro de autenticação:', errorMessage);
        });
});