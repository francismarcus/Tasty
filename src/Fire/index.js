import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyA0uZV4ZXiMxTP66aPSe-CpOWJ_j91AlqA",
    authDomain: "mytastyrecipes.firebaseapp.com",
    databaseURL: "https://mytastyrecipes.firebaseio.com",
    projectId: "mytastyrecipes",
    storageBucket: "mytastyrecipes.appspot.com",
    messagingSenderId: "151094626975",
    appId: "1:151094626975:web:36f95127a410294e"
  };

export const firebaseApp = firebase.initializeApp(config);
export const firestore = firebase.firestore().settings({ timestampsInSnapshots: true})
export const auth = firebaseApp.auth();
export default firebase;