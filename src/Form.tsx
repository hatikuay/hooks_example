import React, { FC, useState } from "react";

interface MyInputs {
    name?: string,
    age?: number
}

const MyForm = () => {
    const [inputs, setInputs] = useState<MyInputs>({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs((values:MyInputs) => ({ ...values, [name]: value }));

    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(inputs)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> Enter your name:
                    <input type="text" value={inputs.name} name="name" ></input>
                </label>
                <label> Enter your age:
                    <input type="text" value={inputs.age} name="age"></input>
                </label>
                <input type="submit"></input>
            </form>
        </>
    );

}

export default MyForm;