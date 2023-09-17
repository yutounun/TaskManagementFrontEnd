"use client";

import { ProjectStore } from "@/_types/projectList";
import { TaskStore } from "@/_types/taskList";
import { createContext, useContext, useState } from "react";

interface ThemeType {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  selectedTask: TaskStore;
  setSelectedTask: React.Dispatch<React.SetStateAction<TaskStore | null>>;
  selectedProject: ProjectStore;
  setSelectedProject: React.Dispatch<React.SetStateAction<ProjectStore | null>>;
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
  selectedProject: new ProjectStore(),
  setSelectedProject: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [color, setColor] = useState("red");
  const [selectedTask, setSelectedTask] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <ThemeContext.Provider
      value={{
        color,
        setColor,
        selectedTask,
        setSelectedTask,
        errorMsg,
        setErrorMsg,
        selectedProject,
        setSelectedProject,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
