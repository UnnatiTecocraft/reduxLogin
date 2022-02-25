import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import ReduxSagaFirebase from "redux-saga-firebase";

const myFirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBJw5o0KPbsZxklk4bU8E5Ezs4txwScGok",
    authDomain: "redux-login-55a86.firebaseapp.com",
    projectId: "redux-login-55a86",
    storageBucket: "redux-login-55a86.appspot.com",
    messagingSenderId: "77679671110",
    appId: "1:77679671110:web:ab8d15fea322e1b7385747",
});

const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { googleAuthProvider, facebookAuthProvider, reduxSagaFirebase };

/* let firebaseConfig = {
    apiKey: "AIzaSyBJw5o0KPbsZxklk4bU8E5Ezs4txwScGok",
    authDomain: "redux-login-55a86.firebaseapp.com",
    projectId: "redux-login-55a86",
    storageBucket: "redux-login-55a86.appspot.com",
    messagingSenderId: "77679671110",
    appId: "1:77679671110:web:ab8d15fea322e1b7385747",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider }; */
