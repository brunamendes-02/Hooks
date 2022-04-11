import React, {createContext} from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
    return (
        <UserContext.Provider value={{userName: 'Pedro'}}>
            {children}
        </UserContext.Provider>
    )
}