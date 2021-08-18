import React, { useState, useEffect } from "react";
import { Navbar } from "./components/navbar/navbar";
import Router from "./components/router/router";

import "./App.css";

function App() {
  const [Token, setToken] = useState(null);
  useEffect(() => {
    let Token = localStorage.getItem("token");
    setToken(Token);
  }, []);

  return (
    <div className="App">
      <Navbar Token={Token} />
      <Router setToken={setToken} Token={Token} />
      helo, {Token}
    </div>
  );
}

export default App;
