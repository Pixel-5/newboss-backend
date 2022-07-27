import React, { useState } from "react";
import { useJwt } from "react-jwt";

export const AuthContext = React.createContext({
    isAuthenticated: false,
    signin: () => {},
});

export const AuthProvider = ({ children }) => {
    const jwt_token = localStorage.getItem("jwt_token");
    const [token, setToken] = useState(jwt_token);
    const { isExpired } = useJwt(token);
    var isAuthenticated = !isExpired;

    async function signin(isAuthenticated, token) {
        if (isAuthenticated) {
            setToken(token);
            localStorage.setItem("jwt_token", token);
        } else {
            setToken(null);
            localStorage.removeItem("jwt_token");
            localStorage.removeItem("user");
            localStorage.removeItem("permission");
        }
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                signin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
