import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="greeting">Hello, World!</p>
        <div data-testid="count">{count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </header>
    </div>
  );
}

export default App;
