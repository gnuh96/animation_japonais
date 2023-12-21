import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDCL0l7YJDie8AiNFPWiKt66nr51Bo9z9U',
  authDomain: 'patrimoine-fa704.firebaseapp.com',
  projectId: 'patrimoine-fa704',
  storageBucket: 'patrimoine-fa704.appspot.com',
  messagingSenderId: '51727144903',
  appId: '1:51727144903:web:ffa628898a49c9f0f92be2',
  measurementId: 'G-011Z3WPN98',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
