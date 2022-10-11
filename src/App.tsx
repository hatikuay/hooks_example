import React, { FC, useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import UseEffectExample, { Counter } from "./UseEffectExample";
import Component1 from "./UseContextExample";
import UseRefExample, { Focus, Tracking } from "./UseRefExample";
import UseStateExample, { Car } from "./UseStateExample";
import Todos from "./UseCallbackExample";

export interface Todo {
  id?: number;
  title?: string;
  complete?: boolean;
}

const App: FC<Todo> = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<Array<Todo> | any>([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((todo: any) => [...todo, "New Todo"]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Todos todos={todos} addTodo={addTodo} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </header>
    </div>
  );
};

export default App;
