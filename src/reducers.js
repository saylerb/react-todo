const initialState = 0;

export function count(state = initialState, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }

  if (action.type === "RESET") {
    return initialState;
  }

  return state;
}
