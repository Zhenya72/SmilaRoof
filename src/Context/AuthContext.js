import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(
        sessionStorage.getItem('authenticated') === 'true'
    );

    const loginIn = () => {
        setAuthenticated(true)
    }

    const logout = () => {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ authenticated, loginIn, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider') 
    }
    return context;
}