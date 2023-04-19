import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from '../../config/firebase';

firebase.initializeApp(firebaseConfig);
export const { auth } = firebase;
export const db = firebase.firestore;
export default firebase;
