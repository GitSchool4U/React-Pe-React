import { createContext, useContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {

    const [count, setCount] = useState(0);

    const value = {
        count, 
        setCount
    }

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}

const useMyContext = () => {
    return useContext(MyContext)
}
export { MyContextProvider, useMyContext }