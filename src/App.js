import React from "react";
import "./App.css";
import { connect } from "react-redux";

function App({ todos }) {
  return (
    <div className="App">
      <div className="container">
        <ul data-testid="todos">
          {todos.map(({ title, completed }) => {
            return (
              <li className={completed ? "completed" : null} key={title}>
                {title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return state;
};

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default connectedApp;
