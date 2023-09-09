import React from "react";

interface propTypes {
  title?: string;
  value?: string;
  value2?: string;
  onChange: (e) => void;
  onChange2?: (e) => void;
  placeholder?: string;
  type: "date" | "fromTo" | "text" | "time";
  className?: string;
}

const InputField = ({ ...props }: propTypes) => {
  return (
    <label className={`gap-1 flex flex-col ${props.className}`}>
      {props.title && <p className="font-bold">{props.title}</p>}
      {/* Normal */}
      {props.type !== "fromTo" && (
        <input
          type={props.type}
          placeholder={props.placeholder}
          className={`input input-bordered w-full input-primary border-gray-text`}
          onChange={props.onChange}
          value={props.value}
        />
      )}

      {/* from ~ to */}
      {props.type === "fromTo" && (
        <div className="flex gap-3 items-center w-full">
          <input
            type="date"
            value={props.value}
            placeholder={props.placeholder}
            className={`input w-full input-bordered input-primary border-gray-text`}
            onChange={props.onChange}
          />

          <span className="text-lg font-bold">~</span>

          <input
            type="date"
            value={props.value2}
            placeholder={props.placeholder}
            className={`input w-full input-bordered input-primary border-gray-text`}
            onChange={props.onChange2}
          />
        </div>
      )}
    </label>
  );
};

export default InputField;
