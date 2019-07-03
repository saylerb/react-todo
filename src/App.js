import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <div className="count-display" data-testid="count">
          {count}
        </div>
        <button className="button" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button className="button" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
