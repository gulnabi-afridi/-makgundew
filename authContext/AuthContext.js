import React, { ReactNode, useContext, useState, createContext } from "react";

// create context
const AuthContext = createContext();

// context provide
export const AuthContextProvider = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  const valueToPass = {
    userAuthenticated,
    setUserAuthenticated,
  };

  return (
    <AuthContext.Provider value={valueToPass}>{children}</AuthContext.Provider>
  );
};

// useContext
export const UseAuthContext = () => useContext(AuthContext);
