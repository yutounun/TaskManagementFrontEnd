"use client";

import { TaskStore } from "@/_types/taskList";
import { createContext, useContext, useState } from "react";

interface ThemeType {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  selectedTask: TaskStore;
  setSelectedTask: React.Dispatch<React.SetStateAction<TaskStore | null>>;
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
}
export const ThemeContext = createContext<ThemeType>({
  color: "red",
  setColor: () => {},
  selectedTask: new TaskStore(),
  setSelectedTask: () => {},
  errorMsg: "",
  setErrorMsg: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [color, setColor] = useState("red");
  const [selectedTask, setSelectedTask] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <ThemeContext.Provider
      value={{
        color,
        setColor,
        selectedTask,
        setSelectedTask,
        errorMsg,
        setErrorMsg,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
