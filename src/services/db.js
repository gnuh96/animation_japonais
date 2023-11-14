// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
let db = false;
let auth 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const getDb = () => {
            if(!db){
        const firebaseConfig = {
        apiKey: "AIzaSyDCL0l7YJDie8AiNFPWiKt66nr51Bo9z9U",
        authDomain: "patrimoine-fa704.firebaseapp.com",
        projectId: "patrimoine-fa704",
        storageBucket: "patrimoine-fa704.appspot.com",
        messagingSenderId: "51727144903",
        appId: "1:51727144903:web:ffa628898a49c9f0f92be2",
        measurementId: "G-011Z3WPN98"
        };

// Initialize Firebase
        const app = initializeApp(firebaseConfig)
        auth = getAuth(app)
        db = getFirestore(app)
        }

return {db, auth}
}