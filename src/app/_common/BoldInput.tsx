import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import Check from "./icons/Check";
import Email from "./icons/Email";
import Key from "./icons/Key";
import User2 from "./icons/User2";

interface IFormValues {
  "signup email": string;
  "signup password": string;
  "signup username": string;
  "signin password": string;
  "signin username": string;
}

interface propTypes {
  title: "Username" | "Password" | "Email";
  label:
    | "signup email"
    | "signup password"
    | "signup username"
    | "signin password"
    | "signin username";
  onChange?: (value: string) => void;
  className?: string;
  placeholder?: string;
  register?: UseFormRegister<IFormValues>;
  required?: boolean;
  error: string;
}
const BoldInput = ({
  title,
  label,
  className,
  placeholder,
  register,
  error,
  required,
}: propTypes) => {
  const [isEntered, setIsEntered] = useState(false);
  const [isFocused, setIsFocused] = useState(true);

  return (
    <>
      <div
        className={`rounded-md border-2 border-gray-text text-white h-14 flex text-center items-center justify-between ${className}`}
      >
        <div className="px-5 border-r-2 border-gray-text">
          {title === "Email" && <Email color="black" />}
          {title === "Password" && <Key color="black" />}
          {title === "Username" && <User2 color="black" />}
        </div>
        <div className="flex flex-col items-start w-full mx-5 justify-start">
          <label htmlFor={label} className="text-gray-text text-sm">
            {title}
          </label>
          <input
            id={label}
            {...register(label, {
              required: `Please type ${label}`,
            })}
            name={label}
            type={label.includes("password") ? "password" : "text"}
            className="text-black text-lg font-semibold w-full border-none h-5"
            placeholder={placeholder}
            onInput={() => setIsEntered(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        <div className="mr-5">{isEntered && <Check />}</div>
      </div>
    </>
  );
};

export default BoldInput;
