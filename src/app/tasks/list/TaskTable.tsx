import React from "react";
import { GetProjectResponse } from "@/_types/taskList";
import TaskTableHeader from "./TaskTableHeader";
import TaskTableRow from "./TaskTableRow";
import Loading from "../loading";

type propTypes = {
  projects: GetProjectResponse[];
  isLoading: boolean;
  onClickRemove: (id: string) => void;
};

const TaskTable = ({ projects, isLoading, onClickRemove }: propTypes) => {
  return (
    <div className="mx-3 mt-10">
      {isLoading && <Loading />}
      {/* No task added */}
      {!isLoading && projects?.length === 0 && (
        <h3>Unfortunately there are no tasks. Please add new task.</h3>
      )}

      {/* Task List */}
      {projects.map(
        (project) =>
          // show projects that have tasks
          project.tasks.length > 0 && (
            <div className="my-10" key={project.id}>
              <h2 className="text-2xl font-bold mb-5">{project.title}</h2>
              <TaskTableHeader />
              <div className="flex flex-col gap-4">
                {project.tasks.map((task) => (
                  <TaskTableRow
                    task={task}
                    key={task.id}
                    onClickRemove={onClickRemove}
                  />
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default TaskTable;
