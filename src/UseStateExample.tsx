import React, { FC, useState, useEffect } from "react";

const UseStateExample: FC = (params: any) => {

    const [color, setColor] = useState("Red");

    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button type="button" onClick={() => setColor("Blue")}>Blue</button>
        </>
    )
}

export const Car:FC = (params: any) => {
    const [car, setCar] = useState(
        {
            brand: "Ford",
            model: "Mustang",
            year: "1964",
            color: "Red",
        }
    )

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "blue" }
        }
        )
    }

    return (
        <>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}
            </p>
            <button type="button" onClick={updateColor}>Blue</button>
        </>
    )
}

export default UseStateExample