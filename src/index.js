import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {RouterProvider} from 'react-router-dom'
import {router} from './helpers/navigation.router'
import {initializeApp} from 'firebase/app'

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
const app = initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
