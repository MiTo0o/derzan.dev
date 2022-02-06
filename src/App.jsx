import React, { useState } from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TopNav from "./components/TopNav";
import Title from "./components/Title";
import Footer from "./components/Footer";
// function BaseApp() {
//   return (
//   <div className="App">
//   </div>
//   );
// }

function App() {
  const [darkThemeState, setDarkThemeState] = useState(true);
  const palletType = darkThemeState ? "dark" : "light";
  const darkTheme = createTheme({
    palette: {
      mode: palletType,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="box">
        <div className="row header">
          <TopNav
            darkThemeState={darkThemeState}
            setDarkThemeState={setDarkThemeState}
          />
        </div>
        <div className="row content">
          <Title />
        </div>
        <div className="row footer">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
