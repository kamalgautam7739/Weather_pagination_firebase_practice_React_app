
import './App.css';
import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

// import WeatherData from './WeatherData';
import FirstHook from './FirstHook';
import SetTimer from './SetTimer';
import Paginationeg from './Pagination/Paginationeg';
import PaginationLoadMore from './Pagination/PaginationLoadMore';
import UserForm from './FireBasic/UserForm';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import UserDataDiaplay from './FireBasic/UserDataDiaplay';



function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDtHpkJhXXAMo9VFWvAx559U91bYY7eUJ0",
    authDomain: "user-feedback-621f0.firebaseapp.com",
    projectId: "user-feedback-621f0",
    storageBucket: "user-feedback-621f0.appspot.com",
    messagingSenderId: "748341078045",
    appId: "1:748341078045:web:95e2f57fcf7ff82a89fef4",
    measurementId: "G-B9V8P529YQ"
  };
 
  const firebase = initializeApp(firebaseConfig)
  const db=getFirestore(firebase)

 
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path ="/"  element={<FirstHook/>}></Route>
          <Route path ="/kkk"  element={<SetTimer></SetTimer>} > </Route>
          <Route path ="/kkkk"  element={<Paginationeg></Paginationeg>} > </Route>
          <Route path ="/kkkkk"  element={<PaginationLoadMore></PaginationLoadMore>} > </Route>
          <Route path ="/form/:id"  element={<UserForm db={db}></UserForm>} > </Route>
          <Route path ="/forma"  element={<UserDataDiaplay db={db}></UserDataDiaplay>} > </Route>
        </Routes>
      </Router>
    </div>

    
  );
}

export default App;


