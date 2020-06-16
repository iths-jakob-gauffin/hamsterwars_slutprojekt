import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
	apiKey: 'AIzaSyBYam693sYIZCkVZ7CDyJmPxe08kbymWV4',
	authDomain: 'hamster-wars-iths.firebaseapp.com',
	databaseURL: 'https://hamster-wars-iths.firebaseio.com',
	projectId: 'hamster-wars-iths',
	storageBucket: 'hamster-bilder',
	messagingSenderId: '699757983921',
	appId: '1:699757983921:web:c27e6aeed2b4de0bc88a90'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
