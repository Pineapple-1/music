import React, { useState, useEffect } from "react";
import { Navbar } from "./components/navbar/navbar";
import Router from "./components/router/router";

import "./App.css";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
});

function App() {
  const [Token, setToken] = useState(null);
  useEffect(() => {
    let Token = localStorage.getItem("token");
    setToken(Token);
  }, [Token]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar Token={Token} />
        <Router setToken={setToken} Token={Token} />
        <center>Token = {Token}</center>
      </ThemeProvider>
    </div>
  );
}

export default App;
