import React,{useState,useEffect} from "react";
import SignIn from "./components/signin/signin";
import { Navbar } from "./components/navbar/navbar";
import Router from './components/router/router'

import "./App.css";

function App() {
  const [Token,setToken] = useState(null)
  
useEffect(()=>{
  let token = localStorage.getItem('token')
  setToken(token);
},[])


  return (
    <div className="App">
      <Navbar/>
      <SignIn setToken = {setToken}/>
      helo, {Token}
    </div>
  );
}

export default App;
