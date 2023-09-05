import React from "react";
import { GetProject } from "@/_types/task";
import TaskTableHeader from "./TaskTableHeader";
import TaskTableRow from "./TaskTableRow";

type propTypes = {
  projects: GetProject[];
};

const TaskTable = ({ projects }: propTypes) => {
  return (
    <div className="mx-10 mt-10">
      {/* No task added */}
      {projects?.length === 0 && (
        <h3>Unfortunately there are no tasks. Please add new task.</h3>
      )}

      {/* Task List */}
      {projects?.length > 0 &&
        projects.map(
          (project) =>
            // show projects that have tasks
            project.tasks.length > 0 && (
              <div className="my-10" key={project.id}>
                <h2 className="text-2xl font-bold mb-5">{project.title}</h2>
                <TaskTableHeader />
                <div className="flex flex-col gap-4">
                  {project.tasks.map((task) => (
                    <TaskTableRow task={task} key={task.id} />
                  ))}
                </div>
              </div>
            )
        )}
    </div>
  );
};

export default TaskTable;
