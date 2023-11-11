// import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// const App = () => {
//   const counter = useSelector((state) => state);
//   const dispatch = useDispatch();
//   const handleIncrement = () => {
//     dispatch({ type: "INCREMENT" });
//   };
//   const handleDecrement = () => {
//     dispatch({ type: "DECREMENT" });
//   };
//   const Reset = () => {
//     dispatch({ type: "RESET" });
//   };
//   return (
//     <div>
//       <div>
//         <h1 className="text-center">{counter}</h1>
//         <button onClick={handleIncrement}>Increment</button>
//         <button onClick={handleDecrement}>Decrement</button>
//         <button onClick={Reset}>Reset</button>
//       </div>
//     </div>
//   );
// };

// export default App;

// ?
// ?
// ?
// ?
// ?
// ?
// ?
// ?

// import React from "react";
// import { connect } from "react-redux";

// const App = (props) => {
//   return <div>{props.value}</div>;
// };

// function mapStateToProps(param) {
//   return { value: param.countReducer.count };
// }
// function mapDispatchToProps() {}

// const x = connect(mapStateToProps, mapDispatchToProps);

// export default x(App);

import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { connect } from "react-redux";

const App = (props) => {
  const [input, setInput] = useState("");
  console.log(props.value);
  return (
    <div className="app">
      <br />
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <h1>{props.value}</h1>
      <button onClick={() => props.addAge()}>Add age</button>
      <button onClick={() => props.decAge()}>Decrement age</button>

      <h2>{props.name}</h2>
      <button onClick={() => props.setName(input)}>setname</button>
    </div>
  );
};
function mapStateToProps(param) {
  return { value: param.countReducer.count, name: param.Reducer.name };
}
function mapDispatchToProps(dispatch) {
  return {
    setName(param) {
      dispatch({ type: "SET_NAME", payload: param });
    },
    addAge() {
      dispatch({ type: "ADD" });
    },
    decAge() {
      dispatch({ type: "Seperate" });
    },
  };
}
const x = connect(mapStateToProps, mapDispatchToProps);
export default x(App);
