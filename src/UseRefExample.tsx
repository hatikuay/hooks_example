import { useState, useEffect, useRef, FC } from "react";
import ReactDOM from "react-dom/client";
import { text } from "stream/consumers";

const useRefExample:FC = () => {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
        </>
    );
}


export const Focus:FC  = () => {
    const inputElement = useRef<HTMLInputElement | null>(null);

    const focusInput  = () => {
        if (inputElement.current) {
            inputElement.current.focus();
        }
    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}

export const Tracking:FC  = () => {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );
}

export default UseRefExample