import React from "react";
import { UseFormRegister } from "react-hook-form";

interface IFormValues {
  title: string;
  status: string;
  total_man_hour_min: string;
  from_date: string;
  to_date: string;
  user_id: string;
  project_id: string;
  priority: string;
  type: string;
  man_hour_min: string;
}

interface propTypes {
  title?: string;
  value?: string;
  value2?: string;
  placeholder?: string;
  type: "date" | "fromTo" | "text" | "time";
  className?: string;
  register?: UseFormRegister<IFormValues>;
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
  error2?: string;
  label2?: "to_date";
}

const InputField = ({
  title,
  placeholder,
  type,
  className,
  register,
  label,
  error,
  error2,
  label2,
  required,
}: propTypes) => {
  return (
    <label className={`gap-1 flex flex-col ${className}`}>
      {title && <p className="font-bold">{title}</p>}
      {/* Normal */}
      {type !== "fromTo" && (
        <>
          {required ? (
            <input
              type={type}
              name={label}
              placeholder={placeholder}
              className={`input input-bordered w-full input-primary border-gray-text`}
              {...register(label, {
                required: `Please type ${label}`,
              })}
            />
          ) : (
            <input
              type={type}
              placeholder={placeholder}
              className={`input input-bordered w-full input-primary border-gray-text`}
              {...register}
            />
          )}
          <p className="text-red-500">{error}</p>
        </>
      )}

      {/* from ~ to */}
      {type === "fromTo" && (
        <>
          <div className="flex gap-3 items-center w-full">
            <input
              name={label}
              type="date"
              placeholder={placeholder}
              className={`input w-full input-bordered input-primary border-gray-text`}
              {...register(label, {
                required: `Please type ${label}`,
              })}
            />

            <span className="text-lg font-bold">~</span>
            <input
              type="date"
              name={label2}
              placeholder={placeholder}
              className={`input w-full input-bordered input-primary border-gray-text`}
              {...register(label2, {
                required: `Please type ${label}`,
              })}
            />
          </div>
          <p className="text-red-500">{error2}</p>
          <p className="text-red-500">{error}</p>
        </>
      )}
    </label>
  );
};

export default InputField;
