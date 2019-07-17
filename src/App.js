import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "./actions";

function App({ todos, addTodo, toggleTodo }) {
  const [title, setTitle] = useState("");

  return (
    <div className="App">
      <div className="container">
        <form
          onSubmit={event => {
            event.preventDefault();
            addTodo(title);
            setTitle("");
          }}
        >
          <label className="add-todo-input-label" htmlFor="add-todo-input">
            Add Todo
          </label>
          <div className="row">
            <input
              id="add-todo-input"
              className="add-todo-input"
              type="text"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </form>
        <ul className="todos-list" data-testid="todos">
          {todos.map(({ title, completed }, index) => {
            return (
              <li
                className={completed ? "completed" : null}
                key={index}
                onClick={event => toggleTodo(title)}
              >
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
  return {
    addTodo: title => dispatch(addTodo(title)),
    toggleTodo: title => dispatch(toggleTodo(title))
  };
};

const mapStateToProps = state => {
  return state;
};

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default connectedApp;
