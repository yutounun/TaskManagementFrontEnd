"use client";

import { TaskStore } from "@/_types/task";
import { createContext, useContext, useState } from "react";

interface ThemeType {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  selectedTask: TaskStore;
  setSelectedTask: React.Dispatch<React.SetStateAction<TaskStore | null>>;
}
export const ThemeContext = createContext<ThemeType>({
  color: "red",
  setColor: () => {},
  selectedTask: new TaskStore(),
  setSelectedTask: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [color, setColor] = useState("red");
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <ThemeContext.Provider
      value={{ color, setColor, selectedTask, setSelectedTask }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
