
(function(){
    const config = {
    apiKey: "AIzaSyCJCLzLcZv5d_kezKtBsSeLuBSDyTBXaHM",
    authDomain: "app-eap.firebaseapp.com",
    databaseURL: "https://app-eap.firebaseio.com",
    projectId: "app-eap",
    storageBucket: "app-eap.appspot.com",
    };

    
    firebase.initializeApp(config);


    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    btnLogin.addEventListener('click', e => {
        const email= txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e => console.log (e.message));
        location.href ="index.html";
        //$("#btnLogout").css("display", "block");

    });
    btnSignUp.addEventListener('click', e => {
        const email= txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email,pass);
        promise.catch(e => console.log (e.message));

    });

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
            
            btnLogout.classList.remove('hide');
        } else {
            console. log('no logueado');
            btnLogout.classList.add('hide');
        }
    })
} () );