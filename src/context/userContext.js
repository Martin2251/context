import { createContext, useState } from "react";

export const userContext = createContext({
    user: null,
    login: () => {},
    logOut: () =>{},
});

const USER = {name:"Guest", isGuestUser:true}

export function userContextProvider({children}){
    const [user, setUser] = useState(USER);
    return (
        <userContext.Provider value={{}}>{children}</userContext.Provider>
    )
}