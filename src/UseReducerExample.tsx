import React, { FC, useReducer } from "react";
import ReactDOM from "react-dom/client";

export interface Todo {
    id?: number,
    title?: string,
    complete?: boolean,

}

const initialTodos:Todo[]  = [
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    },
    {
        id: 3,
        title: "Todo 3",
        complete: false,
    },
];

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo:Todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

const Todos:FC<Todo> = (params:any) => {
    
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo:Todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    return (
        <>
            {todos.map((todo:Todo) => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}
        </>
    );
}

export default Todos