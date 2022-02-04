import React, { useState } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import ToggleTheme from './components/ToggleTheme';

function BaseApp() {
  return (
  <div className="App">
  </div>
  );
}

function App() {

  const [darkThemeState, setDarkThemeState] = useState(true);
  const palletType = darkThemeState ? "dark" : "light";
  const darkTheme = createTheme({
    palette: {
      mode: palletType
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <BaseApp />
      <ToggleTheme darkThemeState={darkThemeState} setDarkThemeState={setDarkThemeState}/>

    </ThemeProvider>
  );
}

export default App;
