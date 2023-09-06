"use client";

import { createContext, useContext, useState } from "react";

interface ThemeType {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}
export const ThemeContext = createContext<ThemeType>({
  color: "red",
  setColor: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [color, setColor] = useState("red");

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
