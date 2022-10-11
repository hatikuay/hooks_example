import { FC, useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

interface User {
    user?: string;
    age?: number;
}

const defaultUser:User = {
    user: "Ercan Erkalkan",
    age: 39
}

const UserContext = createContext<User>(defaultUser);
//const User1Context = createContext();

const Component1: FC<User> = () => {
    const [user, setUserMe] = useState({user:"Ercan Erkalkan", age:25});
    return (
        <>
            <UserContext.Provider value={user}>
                <h1>{`Hello ${user.user} ${user.age}!`}</h1>
                <Component2 />
            </UserContext.Provider>
        </>
    )
}

export const Component2: FC = () => {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    );
}

export const Component3: FC = () => {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 />
        </>
    );
}

export const Component4: FC = () => {
    return (
        <>
            <h1>Component 4</h1>
            <Component5 />
        </>
    );
}


export const Component5: FC = () => {
    
    const user = useContext(UserContext);    
    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user.user} ${user.age} again!`}</h2>
        </>
    );
}

export default Component1;