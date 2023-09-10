import { GetProjectResponse, Options } from "@/_types/taskList";
import React from "react";

interface propTypes {
  title?: string;
  onChange: (e) => void;
  className?: string;
  projects?: GetProjectResponse[];
  options?: Options[];
  selected?: string;
}

const SelectBox = ({
  title,
  onChange,
  className,
  projects,
  options,
  selected,
}: propTypes) => {
  return (
    <label className={`gap-1 flex flex-col ${className}`}>
      {title && <p className="font-bold">{title}</p>}
      <select
        className={`input input-bordered w-full input-primary border-gray-text`}
        onChange={onChange}
      >
        {projects?.map((project) => (
          <>
            <option
              key={project.id}
              value={project.id}
              selected={project.id === selected}
            >
              {project.title}
            </option>
          </>
        ))}

        {options?.map((option) => (
          <option
            key={option.value}
            value={option.value}
            selected={option.value === selected}
          >
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectBox;
