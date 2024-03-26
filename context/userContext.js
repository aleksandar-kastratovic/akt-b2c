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
      sessionStorage.setItem("loggedIn", isLoggedIn);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const userLoggedIn = sessionStorage.getItem("loggedIn");
    if (userLoggedIn) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

const setUserLoggedIn = (value) => {
  setIsLoggedIn(value);
  switch (true) {
    case value === true :
      sessionStorage.setItem("loggedIn",true)
      break;
      case value === false:
        sessionStorage.removeItem("loggedIn")
  }
}

  return (
    <userContext.Provider
      value={{
        isLoggedIn: isLoggedIn ? isLoggedIn : false,
        setIsLoggedIn: setUserLoggedIn,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
