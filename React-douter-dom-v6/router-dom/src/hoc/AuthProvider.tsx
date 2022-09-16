import React, {createContext, useState} from 'react';


export const AuthContext = createContext(null);

export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState(null);

    const signin = (newUser: React.SetStateAction<null>, cb: () => void) => {
        setUser(newUser);
        cb()
    }
    const signout = (cb: () => void) => {
        setUser(null)
        cb()
    }

    const value = {user, signin, signout}

    // @ts-ignore
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>

}