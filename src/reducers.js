import { TODO_ADDED } from "./actions";

const initialState = {
  todos: []
};

export function todoApp(state = initialState, action) {
  switch (action.type) {
    case TODO_ADDED:
      return Object.assign({}, ...state.todos, {
        todos: [{ title: action.title, completed: false }]
      });
    default:
      return state;
  }
}
