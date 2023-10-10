import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBwF-ggzO09RnI6jXTUfkYZ1ad_4ox45Hc",

  authDomain: "newapp-b6864.firebaseapp.com",

  projectId: "newapp-b6864",

  storageBucket: "newapp-b6864.appspot.com",

  messagingSenderId: "1077690046593",

  appId: "1:1077690046593:web:61ff53c5cf2c5e3cf51580",

  measurementId: "G-L1SNB0CVWK"

};


// Initialize Firebase

export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);