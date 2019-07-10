import { TODO_ADDED, TODO_TOGGLED } from "./actions";

const initialState = {
  todos: []
};

export function todoApp(state = initialState, action) {
  switch (action.type) {
    case TODO_ADDED:
      return Object.assign({}, state, {
        todos: [...state.todos, { title: action.title, completed: false }]
      });
    case TODO_TOGGLED:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if (todo.title === action.title) {
            return Object.assign({}, todo, { completed: !todo.completed });
          } else {
            return todo;
          }
        })
      });
    default:
      return state;
  }
}
