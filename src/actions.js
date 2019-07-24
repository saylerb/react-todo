export const TODO_ADDED = "TODO_ADDED";
export const TODO_TOGGLED = "TODO_TOGGLED";

export function addTodo(title) {
  return {
    type: TODO_ADDED,
    title
  };
}

export function toggleTodo(title) {
  return {
    type: TODO_TOGGLED,
    title
  };
}

// Action to create the todo
// fetching/net is mocked out
// return an response object with json(), some json object -> { id: 1, title: "someTitle" }
//

function createTodoResource(title) {
  // fetch("url") 
  // ...
  // returns JSON
}

// new Promise (resolve, reject) {}
import fetch from 'fetch';  // pretending that fetch is a module, won't work (but would work for axios)

// jest.mock(fetch, jest.fn(() => { 
//   return  Promise.resolve(({
//   json: jest.fn(() => Promise.resolve({ title: "clean kitchen"}))
// }));

jest.mock(fetch); // replaces fech with jest.fn()

fetch.resetMock()

test('createTodo adds a todo when 200 ok', () => {
  fetch.mockImplemetation(() => ({ json: () => Promise.resolve({ title: 'something"'})}))

  // if no itermiedate object
  axiosget.mockImplemetation(() => Promise.resolve({ title: 'something'}));
  axiosget.mockResolvedValue({ title: 'something'})

  const dispatch = jest.fn()

  createTodo(title)(dispatch).then(() => {
    expect(fetch).toHaveBeenCalledTimes(1);

    // console.log(dispatch.mock.calls)  array of calls 
    
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenLastCalledWith(addTodo("expectedTitle"));
  })
  
  
})

test('two 400 error no dispatch of add', () => {
  fetch.mockImplemetation(() => ({ json: () => Promise.reject({ error: " Something happended"})}))

  axiosget.mockImplemetation(() => Promise.reject({ error: 'something'}));
  axiosget.mockRejectedValue({ title: 'something'})

})

export function createTodo(title) {
  return function(dispatch) {
    return fetch(`something url`)
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(json => dispatch(addTodo(json.title)));
  };
}

export function createTodo(title) {
  return function(dispatch) {
    return createTodoResource(title)
      .then(json => dispatch(addTodo(json.title)));
  };
}

// export function createTodo(title) {
//   return async function(dispatch) {
//     let json;
//     try {
//       const response = await fetch(
//         `https://www.reddit.com/r/${subreddit}.json`
//       );
//       json = await response.json();
//     } catch (error) {
//       console.log("An error occurred.", error);
//     }

//     return dispatch(receivePosts(subreddit, json));
//   };
// }
