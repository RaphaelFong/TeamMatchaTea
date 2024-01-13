import React from "react";
import Header from './components/Header';
import Guess from './components/Guess';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Guess></Guess>
    </div>
  );
}

export default App;
