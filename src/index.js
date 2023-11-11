import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
function countReducer(state = { count: 15, name: "Ali" }, action) {
  console.log(state);
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "Separate":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}
function Reducer(state = { name: "alijon", age: 19 }, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "ADD_NAME":
      return [state, { ...state, name: action.payload, age: action.age }];
    default:
      return state;
  }
}
const store = createStore(
  combineReducers({ countReducer, Reducer }),
  applyMiddleware(logger)
);
// store.dispatch({type:"SET_NAME"})
// store.dispatch({type:"ADD_NAME",payload:"Yulduz",age:18})

console.log(store.getState());

// store.subscribe(()=>console.log(store.getState()))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
