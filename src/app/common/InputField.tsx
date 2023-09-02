import React from "react";

interface propTypes {
  title: string;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  type: "date" | "fromTo" | "text" | "time";
  className?: string;
}

const InputField = ({ ...props }: propTypes) => {
  const handleChange = (e) => {
    props.setValue(e.target.value);
  };

  return (
    <div className="gap-1 flex flex-col">
      <p className="font-bold">{props.title}</p>
      {/* Normal */}
      {props.type !== "fromTo" && (
        <input
          type={props.type}
          placeholder={props.placeholder}
          className={`input input-bordered input-primary max-w-xs border-gray-text ${props.className}`}
          onInput={handleChange}
        />
      )}

      {/* from ~ to */}
      {props.type === "fromTo" && (
        <div className="flex gap-3 items-center">
          <input
            type="date"
            placeholder={props.placeholder}
            className={`input input-bordered input-primary max-w-xs border-gray-text ${props.className}`}
            onInput={handleChange}
          />

          <span className="text-lg font-bold">~</span>

          <input
            type="date"
            placeholder={props.placeholder}
            className={`input input-bordered input-primary max-w-xs border-gray-text ${props.className}`}
            onInput={handleChange}
          />
        </div>
      )}
    </div>
  );
};

export default InputField;
