import React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TopNav from "./components/TopNav";
import Title from "./components/Title";
import Footer from "./components/Footer";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="box">
        <div className="row header">
          <TopNav/>
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
