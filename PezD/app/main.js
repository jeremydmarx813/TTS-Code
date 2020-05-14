import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCIsi_AmcUUHoujJHwFXeX2bON2vX53s1g",
    authDomain: "ttspezd.firebaseapp.com",
    databaseURL: "https://ttspezd.firebaseio.com",
    projectId: "ttspezd",
    storageBucket: "ttspezd.appspot.com",
    messagingSenderId: "29890871598",
    appId: "1:29890871598:web:3d49d7e6016d948113fabf"
  };

  firebase.initializeApp(firebaseConfig);

document.addEventListener('DOMContentLoaded', function() {
   
    //
    // firebase.auth().onAuthStateChanged(user => { });
    // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    //

    try {
      let app = firebase.app();
      let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
      document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
    } catch (e) {
      console.error(e);
      document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }
  });