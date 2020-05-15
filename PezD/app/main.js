import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey            : 'AIzaSyCIsi_AmcUUHoujJHwFXeX2bON2vX53s1g',
	authDomain        : 'ttspezd.firebaseapp.com',
	databaseURL       : 'https://ttspezd.firebaseio.com',
	projectId         : 'ttspezd',
	storageBucket     : 'ttspezd.appspot.com',
	messagingSenderId : '29890871598',
	appId             : '1:29890871598:web:3d49d7e6016d948113fabf'
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const machine = db.collection('pez').doc('machine1');
machine.set({"amount": 0});
document.addEventListener('DOMContentLoaded', function() {
  

	const alertContainer = document.getElementById('alert-container');
	const pezNumContainer = document.getElementById('pezNumberCont');
	const eatButton = document.getElementById('eatButton');
	const addPezButton = document.getElementById('addPezButton');
	const refillPezButton = document.getElementById('refillPezButton');
  let currentAmount;
   machine.onSnapshot(function(doc){
     currentAmount = doc.data().amount;
     console.log('current amount: ', currentAmount);
    pezNumContainer.innerHTML = `<h2>${doc.data().amount}</h2>`
  });
  
  addPezButton.addEventListener('click', function(){
    alertContainer.innerHTML = `<h2></h2>`
    if(currentAmount < 12){
      machine.update({"amount": firebase.firestore.FieldValue.increment(1)})
    } else {
      alertContainer.innerHTML = `<h2>Pez Dispenser Full!!!</h2>`
    }
  })

  eatButton.addEventListener('click', function(){
    alertContainer.innerHTML = `<h2></h2>`
    if(currentAmount > 0){

      machine.update({"amount": firebase.firestore.FieldValue.increment(-1)})
    } else {
      alertContainer.innerHTML = `<h2>Pez Dispenser Already Empty!!!</h2>`
    }
  })

  refillPezButton.addEventListener('click', function(){
    alertContainer.innerHTML = `<h2></h2>`
    machine.update({"amount": 12});
  })
});
