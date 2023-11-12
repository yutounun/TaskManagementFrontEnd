"use client";

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
  register?: any;
  required?: boolean;
  label?:
    | "from_date"
    | "title"
    | "status"
    | "total_man_hour_min"
    | "man_hour_min"
    | "to_date"
    | "type"
    | "user_id";
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  onChange,
}: propTypes) => {
  const conditionalRegister = () => {
    if (required && label) {
      return {
        ...register(label, {
          required: `${label} is required`,
        }),
      };
    } else if (label) {
      return { ...register(label) };
    } else {
      // Used for other fields not on the form
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

      {required && label && (
        <>
          <input
            type={type}
            id={label}
            placeholder={placeholder}
            className={`input input-bordered w-full input-primary border-gray-text`}
            {...register(label, {
              required: `${label} is required`,
            })}
          />
          <p className="text-red-500">{error}</p>
        </>
      )}
      {!required && label && (
        <>
          <input
            type={type}
            id={label}
            placeholder={placeholder}
            className={`input input-bordered w-full input-primary border-gray-text`}
            {...register(label)}
          />
          <p className="text-red-500">{error}</p>
        </>
      )}
      {!required && !label && (
        <>
          <input
            type={type}
            id={label}
            placeholder={placeholder}
            className={`input input-bordered w-full input-primary border-gray-text`}
            onChange={onChange}
          />
          <p className="text-red-500">{error}</p>
        </>
      )}
    </div>
  );
};

export default InputField;
