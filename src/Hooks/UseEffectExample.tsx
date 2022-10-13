import React, { FC, useEffect, useState } from "react";
//import { ReactDOM } from "react";
import ReactDOM from "react-dom/client";

const UseEffectExample: FC = (params: any) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(() => count + 1);
        }, 1000);
    },[]);

    return (<>
        <h1> I've rendered {count} times!</h1>
    </>)
}

export const Counter: FC = (params: any) => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]
    );

    return (<>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
    </>)
}


export const Timer: FC = (params: any) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
        
        return () => clearTimeout(timer)
    }, []
    );


    return (<><h1>I've rendered {count} times!</h1></>);

}

export default UseEffectExample