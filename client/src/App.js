import React, { useState, useEffect } from "react";
import  AppBar  from "./components/navbar/navbar";
import Router from "./components/router/router";
import './App.css'



import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
});

function App() {
  const [Token, setToken] = useState(localStorage.getItem("token"));
  const [email, setEmail] = useState("");
  useEffect(() => {
    let Token = localStorage.getItem("token");
    setToken(Token);
  }, [Token]);

  return (
    <div className="App">
  
      <ThemeProvider theme={theme}>
        <AppBar Token={Token} />

        <Router setToken={setToken} Token={Token}  setEmail= {setEmail} email={email}/>
 
      </ThemeProvider>
    </div>
  );
}

export default App;
