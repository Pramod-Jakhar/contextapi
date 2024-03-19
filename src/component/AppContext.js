// AppContext.js
import React, { createContext, useState } from 'react';

// Creating a context object
export const AppContext = createContext();

// Creating a context provider component
export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
