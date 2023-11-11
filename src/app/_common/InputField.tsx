"client";

import React from "react";
import { UseFormRegister } from "react-hook-form";

interface IFormValues {
  title?: string;
  status?: string;
  total_man_hour_min?: string;
  from_date?: Date;
  to_date?: Date;
  user_id?: string;
  project_id?: string;
  priority?: string;
  type?: string;
  man_hour_min?: string;
}

interface propTypes {
  title?: string;
  value?: string;
  placeholder?: string;
  type: "date" | "text" | "time";
  className?: string;
  register: any;
  required?: boolean;
  label:
    | "from_date"
    | "title"
    | "status"
    | "total_man_hour_min"
    | "man_hour_min"
    | "to_date"
    | "type"
    | "user_id";
  error?: string;
}

const InputField = ({
  title,
  placeholder,
  type,
  className,
  register,
  label,
  error,
  required,
}: propTypes) => {
  const conditionalRegister = () => {
    if (required && label) {
      return {
        ...register(label, {
          required: `Please type ${label}`,
        }),
      };
    } else if (label) {
      return { ...register(label) };
    } else {
      return null;
    }
  };
  return (
    <div className={`gap-1 flex flex-col ${className}`}>
      {title && (
        <label htmlFor={label} className="font-bold">
          {title}
        </label>
      )}

      <input
        type={type}
        name={label}
        id={label}
        placeholder={placeholder}
        className={`input input-bordered w-full input-primary border-gray-text`}
        {...conditionalRegister()}
      />
      <p className="text-red-500">{error}</p>
    </div>
  );
};

export default InputField;
