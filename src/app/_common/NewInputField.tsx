import React from "react";
import { UseFormRegister } from "react-hook-form";

interface IFormValues {
  title: string;
  status: string;
  total_man_hour_min: string;
  from_date: string;
  to_date: string;
  user_id: string;
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
    | "to_date"
    | "user_id";
  error?: string;
  error2: string;
  label2?: "to_date";
}

const NewInputField = ({
  title,
  value,
  value2,
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
              placeholder={placeholder}
              className={`input input-bordered w-full input-primary border-gray-text`}
              value={value}
              {...register(label, {
                required: `Please type ${label}`,
              })}
            />
          ) : (
            <input
              type={type}
              placeholder={placeholder}
              className={`input input-bordered w-full input-primary border-gray-text`}
              value={value}
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
              type="date"
              value={value}
              placeholder={placeholder}
              className={`input w-full input-bordered input-primary border-gray-text`}
              {...register(label, {
                required: `Please type ${label}`,
              })}
            />

            <span className="text-lg font-bold">~</span>

            <input
              type="date"
              value={value2}
              placeholder={placeholder}
              className={`input w-full input-bordered input-primary border-gray-text`}
              {...register(label2, {
                required: `Please type ${label}`,
              })}
            />
          </div>
          <p className="text-red-500">{error}</p>
          <p className="text-red-500">{error2}</p>
        </>
      )}
    </label>
  );
};

export default NewInputField;
