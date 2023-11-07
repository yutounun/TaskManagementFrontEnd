"use client";

import Toaster from "@/_common/Toaster";
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
  toaster: { message: string; isVisible: boolean };
  showToaster: (message: string) => void;
  setToaster: React.Dispatch<
    React.SetStateAction<{ message: string; isVisible: boolean }>
  >;
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
  toaster: { message: "", isVisible: false },
  showToaster: () => {},
  setToaster: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [color, setColor] = useState("red");
  const [selectedTask, setSelectedTask] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [toaster, setToaster] = useState({ message: "", isVisible: false });

  /**
   * Sets a toaster message and displays it for a specified duration.
   *
   * @param {string} message - The message to be displayed in the toaster.
   */
  const showToaster = (message) => {
    setToaster({ message, isVisible: true });
    setTimeout(() => {
      setToaster({ message: "", isVisible: false });
    }, 3000);
  };

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
        toaster,
        showToaster,
        setToaster,
      }}
    >
      {children}
      {toaster.isVisible && <Toaster message={toaster.message} />}
    </ThemeContext.Provider>
  );
};
