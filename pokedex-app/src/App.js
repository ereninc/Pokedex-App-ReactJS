import logo from "./logo.svg";
import "./css/App.css";
import React from "react";
import Pokedex from "./components/Pokedex";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pokedex />
      </header>
    </div>
  );
}

export default App;
