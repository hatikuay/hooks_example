import React, { FC, useState, useCallback, useEffect, useRef, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./Todos";

export interface Todo {
  id?: number;
  title?: string;
  complete?: boolean;
}

export const App: FC = () => {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<Array<Todo> | any>([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count])

  const increment = () => {
    setCount((c) => c + 1);
  }

  const addTodo = () => {
    setTodos((todos: any) => [...todos, "New Todo"])
  }

  console.log("Render App")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>My Todos</h2>
        {todos.map((todo: any, index: any) => {
          return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>Add Todo</button>
        <div>
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
            <h2>Expensive Calculation</h2>
            {calculation}
          </div>
        </div>
      </header>
    </div>
  );
}

const expensiveCalculation = (num: number) => {
  console.log("Calculating...");
  for (let i = 0; i < 100000000000; i++) {
    num += 1;
  }
  return num;
}

export default App;
