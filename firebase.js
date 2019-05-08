var app_fireBase ={};
(function(){
    const config = {
    apiKey: "AIzaSyCJCLzLcZv5d_kezKtBsSeLuBSDyTBXaHM",
    authDomain: "app-eap.firebaseapp.com",
    databaseURL: "https://app-eap.firebaseio.com",
    projectId: "app-eap",
    storageBucket: "app-eap.appspot.com",
    };

    
    firebase.initializeApp(config);
    app_fireBase =firebase;
})()