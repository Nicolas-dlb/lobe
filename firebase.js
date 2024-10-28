// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC_MXXV3__LPoldpDA6K37coher4IsmWZU",
	authDomain: "lobe-4982f.firebaseapp.com",
	projectId: "lobe-4982f",
	storageBucket: "lobe-4982f.appspot.com",
	messagingSenderId: "181639002528",
	appId: "1:181639002528:web:a8cef8739f8bd33c7dccc5",
	measurementId: "G-DL8ZZPW1GM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
