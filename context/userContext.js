"use client";
import { useContext, useState, createContext, useEffect } from "react";

export const userContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
});

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (isLoggedIn) {
            localStorage.setItem("loggedIn", isLoggedIn);
        }
    }, [isLoggedIn]);

    useEffect(() => {
        const userLoggedIn = localStorage.getItem("loggedIn");
        if (userLoggedIn) {
            setIsLoggedIn(true);
        }
    }, [isLoggedIn]);

    const setLoggedIn = (value) => {
        setIsLoggedIn(value);
        localStorage.setItem("loggedIn", value);
    };

    return (
        <userContext.Provider
            value={{
                isLoggedIn: isLoggedIn ? isLoggedIn : false,
                setIsLoggedIn: setLoggedIn,
            }}
        >
            {children}
        </userContext.Provider>
    );
};
