const initialState = 0;

export function count(state, action) {
  if (typeof state === "undefined") {
    return initialState;
  }

  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }

  if (action.type === "RESET") {
    return initialState;
  }
}
