import React, { FC, useState, useCallback, useEffect, useRef, useMemo, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./GrettingFunctional";


const reducer = (state: any, action: any) => {
  console.log("enteredNameReducer");
  switch (action.type) {
    case "enteredName":
      if (state.enteredName === action.payload) {
        return state;
      }
      return { ...state, enteredName: action.payload }
    case "message":
      return { ...state, message: `Hello, ${action.payload}` }
    default:
      throw new Error("Invalid acion type: " + action.type);
  }
}

const initialState = {
  enteredName: "",
  message: "",
}

const App: FC = () => {

  //const [message, setMessage] = useState("Ercan Erkalkan")

  const [{ message, enteredName }, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(0);

  const setCountCallback = useCallback(() => {
    const inc = count + 1 > startCount ? count + 1 : Number(count + 1) + startCount;
    setCount(inc)

  }, [startCount, count]);


  const onIcrementBtnClick = () => {
    setCountCallback()
  }

  const onChangeStartCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartCount(Number(e.target.value));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting message={message} enteredName={enteredName} greetingDispatcher={dispatch}></Greeting>
        <div>
          <label>Enter a number and we'll increment it</label>
          <br></br>
          <input value={startCount} onChange={onChangeStartCount}></input>
          <label>{count}</label>
          <br></br>
          <button onClick={onIcrementBtnClick}>Increment Button</button>
        </div>
      </header>
    </div>
  );
}


export default App;
