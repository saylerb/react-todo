import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "./actions";

function App({ todos, toggleTodo, dispatch }) {
  const [title, setTitle] = useState("");

  return (
    <div className="App">
      <div className="container">
        <form
          onSubmit={event => {
            event.preventDefault();
            dispatch(addTodo(title));
            setTitle("");
          }}
        >
          <label className="add-todo-input-label" htmlFor="add-todo-input">
            Add Todo
          </label>
          <div className="row">
            <input
              placeholder="clean kitchen counter"
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

        <section>
          <h3 id="todos-header">All todos</h3>
          <ul className="todos-list" aria-labelledby="todos-header">
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
        </section>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: title => dispatch(toggleTodo(title)),
    dispatch
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
