import { GetProjectResponse, Options } from "@/_types/taskList";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface propTypes {
  title?: string;
  className?: string;
  projects?: GetProjectResponse[];
  options?: Options[];
  selected?: string;
  register?: UseFormRegister<any>;
  required?: boolean;
  label?: string | number;
  error?: string;
}

const SelectBox = ({
  title,
  className,
  projects,
  options,
  register,
  label,
  error,
  required,
}: propTypes) => {
  return (
    <div className={`gap-1 flex flex-col ${className}`}>
      {title && (
        <label htmlFor={title} className="font-bold">
          {title}
        </label>
      )}
      {options && options.length > 0 && (
        <select
          name={title}
          id={title}
          className={`input input-bordered w-full input-primary border-gray-text`}
          {...register(label as any, {
            required: `Please type ${label}`,
          })}
        >
          {options?.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
      {projects && projects.length > 0 && (
        <select
          name={title}
          id={title}
          className={`input input-bordered w-full input-primary border-gray-text`}
          {...register(label as any, {
            required: `Please type ${label}`,
          })}
        >
          {projects?.map((project) => (
            <option key={project.id} value={project.id}>
              {project.title}
            </option>
          ))}
        </select>
      )}
      <p className="text-red-500">{error}</p>
    </div>
  );
};

export default SelectBox;
