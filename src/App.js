import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="greeting">Hello, World!</p>
        <div data-testid="count">0</div>
      </header>
    </div>
  );
}

export default App;
