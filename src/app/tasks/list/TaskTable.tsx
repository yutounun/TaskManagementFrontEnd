import React from "react";
import { GetProject } from "@/types/task";
import TaskTableHeader from "./TaskTableHeader";
import TaskTableRow from "./TaskTableRow";

const TEST_DATA = [
  {
    id: "2132eds",
    title: "Nomikan",
    status: "completed",
    totalManHour: "12",
    from: "23",
    to: "13",
    priority: "high",
    createdAt: "12",
    type: "MTG",
    updatedAt: "12",
    tasks: [
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
      {
        id: "213wedwe2eds",
        title: "title2",
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
    ],
  },
  {
    id: "213322eds",
    title: "Nomikan2",
    status: "completed",
    totalManHour: "12",
    from: "23",
    to: "13",
    priority: "high",
    createdAt: "12",
    type: "MTG",
    updatedAt: "12",
    tasks: [
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
      {
        id: "213wedwe2eds",
        title: "title2",
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
    ],
  },
];

type propTypes = {};

const TaskTable = ({ ...props }: propTypes) => {
  const projects = TEST_DATA;
  return (
    <div className="mx-10 mt-10">
      {projects.map((project) => (
        <div className="my-10" key={project.id}>
          <h2 className="text-2xl font-bold mb-5">{project.title}</h2>
          <TaskTableHeader />
          <div className="flex flex-col gap-4">
            {project.tasks.map((task) => (
              <TaskTableRow task={task} key={task.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskTable;
