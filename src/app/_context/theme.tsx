"use client";

import { createContext, useContext, useState } from "react";

interface ThemeType {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
}
export const ThemeContext = createContext<ThemeType>({
  color: "red",
  setColor: () => {},
  accessToken: "",
  setAccessToken: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [color, setColor] = useState("red");
  const [accessToken, setAccessToken] = useState("");

  return (
    <ThemeContext.Provider
      value={{ color, setColor, accessToken, setAccessToken }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
