import React, { createContext, useContext, useState } from 'react';

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [isDJMode, setIsDJMode] = useState(true); // true = DJ, false = Listener

  const toggleMode = () => setIsDJMode(prev => !prev);

  return (
    <ModeContext.Provider value={{ isDJMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);
