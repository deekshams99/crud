import firebase from "firebase";

 var firebaseConfig = {
    apiKey: "AIzaSyC3y9GNshCCYrvzkfBnraR0JU4CobDlzSc",
    authDomain: "crud-app-4b9c7.firebaseapp.com",
    databaseURL: "https://crud-app-4b9c7.firebaseio.com",
    projectId: "crud-app-4b9c7",
    storageBucket: "crud-app-4b9c7.appspot.com",
    messagingSenderId: "717348174586",
    appId: "1:717348174586:web:9b9e898c4e640713596743"
  };

  var firebaseDb = firebase.initializeApp(firebaseConfig);
  export default firebaseDb.database().ref();;
 