import React from 'react';
import './App.css';
import Home from './componenets/home/Home';
import Nav from './componenets/nav/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Home />
      </header>
    </div>
  );
}

export default App;
