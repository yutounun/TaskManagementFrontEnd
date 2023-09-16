import { GetProjectResponse, Options } from "@/_types/taskList";
import React from "react";

interface propTypes {
  title?: string;
  className?: string;
  projects?: GetProjectResponse[];
  options?: Options[];
  selected?: string;
  register?: UseFormRegister<IFormValues>;
  required?: boolean;
  label?: string;
  error?: string;
}

const SelectBox = ({
  title,
  onChange,
  className,
  projects,
  options,
  selected,
  register,
  label,
  error,
  required,
}: propTypes) => {
  return (
    <label className={`gap-1 flex flex-col ${className}`}>
      {title && <p className="font-bold">{title}</p>}
      <select
        className={`input input-bordered w-full input-primary border-gray-text`}
        {...register(label)}
        defaultValue={options ? options[0].value : projects[0].id}
      >
        {projects?.map((project) => (
          <>
            <option key={project.id} value={project.id}>
              {project.title}
            </option>
          </>
        ))}

        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p className="text-red-500">{error}</p>
    </label>
  );
};

export default SelectBox;
