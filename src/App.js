import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./actions";

function App({ count, increment, decrement, reset }) {
  return (
    <div className="App">
      <div className="container">
        <div className="count-display" data-testid="count">
          {count}
        </div>
        <button className="button" onClick={increment}>
          +
        </button>
        <button className="button" onClick={decrement}>
          -
        </button>
        <button className="button reset" onClick={reset}>
          ⟲
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset())
  };
};

const mapStateToProps = state => {
  return { count: state };
};

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default connectedApp;
