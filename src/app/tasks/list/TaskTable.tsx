import React from "react";
import { GetTask } from "@/tasks/list/task";
import TaskTableHeader from "./TaskTableHeader";
import TaskTableRow from "./TaskTableRow";

const TEST_DATA = [
  {
    id: "2132eds",
    title: "title",
    status: "completed",
    manHour: "12",
    from: "23",
    to: "13",
    priority: "high",
    createdAt: "12",
    type: "MTG",
    updatedAt: "12",
    project: {
      id: "erf34fc",
      title: "Nomikan",
    },
  },
  {
    id: "2132eds",
    title: "title",
    status: "completed",
    manHour: "12",
    from: "23",
    to: "13",
    priority: "high",
    createdAt: "12",
    type: "MTG",
    updatedAt: "12",
    project: {
      id: "erf34fc",
      title: "Toyota",
    },
  },
];

const TaskTable = () => {
  const tasks = TEST_DATA;
  return (
    <div className="mx-10 mt-10">
      {tasks.map((task) => (
        <div className="my-10" key={task.id}>
          <h2 className="text-2xl font-bold mb-5">{task.project.title}</h2>
          <TaskTableHeader />
          <div className="flex flex-col gap-4">
            <TaskTableRow task={task} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskTable;
