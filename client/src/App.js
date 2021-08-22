import React, { useState, useEffect } from "react";
import  AppBar  from "./components/navbar/navbar";
import Router from "./components/router/router";
import { Container} from "@material-ui/core";



import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
});

function App() {
  const [Token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    let Token = localStorage.getItem("token");
    setToken(Token);
  }, [Token]);

  return (
    <div className="App">
  
      <ThemeProvider theme={theme}>
        <AppBar Token={Token} />
        <Container>
        <Router setToken={setToken} Token={Token} />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
