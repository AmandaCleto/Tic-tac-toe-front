import firebase from 'firebase' 

export const login = (e: any, email : string, password : string) => {
    e.preventDefault();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
    }); 
    console.log('Hello World')
}

export const register = (e: any, name : string, email : string, password : string) => {
    /*firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });*/
    console.log("mendes");
}

