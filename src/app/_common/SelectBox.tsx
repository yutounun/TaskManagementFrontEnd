import { GetProjectResponse } from "@/_types/taskList";
import React from "react";

interface propTypes {
  title?: string;
  onChange: (e) => void;
  className?: string;
  projects: GetProjectResponse[];
}

const SelectBox = ({ ...props }: propTypes) => {
  return (
    <label className={`gap-1 flex flex-col ${props.className}`}>
      {props.title && <p className="font-bold">{props.title}</p>}
      <select
        className={`input input-bordered w-full input-primary border-gray-text`}
        onChange={props.onChange}
      >
        {props.projects.map((project) => (
          <>
            <option key={project.id} value={project.id}>
              {project.title}
            </option>
          </>
        ))}
      </select>
    </label>
  );
};

export default SelectBox;
