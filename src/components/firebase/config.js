import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: 'photokeeper-9200b.firebaseapp.com',
	databaseURL: 'https://photokeeper-9200b.firebaseio.com',
	projectId: 'photokeeper-9200b',
	storageBucket: 'photokeeper-9200b.appspot.com',
	messagingSenderId: '39510914810',
	appId: '1:39510914810:web:6ae3b8b1cdf5ece3c3bb43',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const photoKeeperStorage = firebase.storage();
const photoKeeperFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {photoKeeperStorage, photoKeeperFireStore, timestamp}
