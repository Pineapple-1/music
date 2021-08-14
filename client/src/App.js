import api from './api/index'
import React, { useState,useEffect } from "react";

import './App.css';


function App() {
  const [feedItems, setFeedItems] = useState('');


  useEffect(()=>{
    async function fetchData (){
      const request = await api.get('feed/')
      console.log(request.data)
      setFeedItems(request.data)
      return request.data
    }
    fetchData()

  },[])
  return (
    <div className="App">
     <h1>hello, {feedItems[0]?.status_text}</h1>
    </div>
  );
}

export default App;
