import React, { FC } from "react";


export const Car = (props: any) => {
    return <li>{props.index} {props.brand}</li>
}

const Garage = () => {
    const cars = [
        {id: 1, brand: "Ford"},
        {id: 2, brand: "BMW"},
        {id: 3, brand: "Mustang"},
        {id: 4, brand: "Mercedes"},
        {id: 5, brand: "Togg"},
    ];
    return (<>
        <h1></h1>
        <ul>
            {cars.map((item, index) => <Car key={item.id} brand={item.brand} index={index}></Car>)}
        </ul>
    </>);
}

export default Garage;