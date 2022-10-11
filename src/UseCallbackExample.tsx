import { memo } from "react";

export interface Todo {
  id?: number;
  title?: string;
  complete?: boolean;
}

const Todos = ({ todos, addTodo }: any) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo: any, index: any) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);
