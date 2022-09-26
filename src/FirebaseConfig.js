
import * as firebase from 'firebase/app';
import { getDatabase } from 'firebase/database';



const firebaseConfig = {
	apiKey: "AIzaSyCRsj0HlhihioebBPBHJhbqP9WeD94E_hs",
	authDomain: "you-can-do-it-19f31.firebaseapp.com",
	databaseURL: "https://you-can-do-it-19f31-default-rtdb.firebaseio.com",
	projectId: "you-can-do-it-19f31",
	storageBucket: "you-can-do-it-19f31.appspot.com",
	messagingSenderId: "567220893508",
	appId: "1:567220893508:web:44ae319b398c5263dfc911",
	measurementId: "G-1R7JECZLPR"
}

const app = firebase.initializeApp(firebaseConfig);
const dataBase = getDatabase(app);


export default dataBase;



