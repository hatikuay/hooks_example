import { FC, useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

interface User {
    user?: string;
}

const defaultUser = "Ercan Erkalkan";

const UserContext = createContext<string>(defaultUser)


const Component1: FC<User> = () => {
    const [user, setUser] = useState("Ercan Erkalkan");
    return (
        <>
            <UserContext.Provider value={user}>
                <h1>{`Hello ${user}!`}</h1>
                <Component2/>
            </UserContext.Provider>
        </>
    )
}

export const Component2: FC<User> = () => {
    return (
        <>
            <h1>Component 2</h1>
            <Component3/>
        </>
    );
}

export const Component3: FC<User> = () => {
    return (
        <>
            <h1>Component 3</h1>
            <Component4/>
        </>
    );
}

export const Component4: FC<User> = () => {
    return (
        <>
            <h1>Component 4</h1>
            <Component5/>
        </>
    );
}

export const Component5: FC<User> = () => {
    const user = useContext(UserContext)
    
    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}

export default Component1;