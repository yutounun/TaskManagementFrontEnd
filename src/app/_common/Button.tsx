import Link from "next/link";
import React, { Children } from "react";
import Plus from "./icons/Plus";

interface propTypes {
  continue?: boolean;
  modal?: boolean;
  cancel?: boolean;
  new?: boolean;
  normal?: boolean;
  text?: string;
  onClick?: () => void;
  to?: string;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  others?: boolean;
}

const Button = ({ ...props }: propTypes) => {
  return (
    <>
      {props.continue && (
        <button
          type="submit"
          onClick={props.onClick}
          className="rounded-md bg-bg-blue text-white w-80 h-12 flex text-center items-center justify-center"
        >
          Continue
        </button>
      )}

      {props.modal && (
        <button
          onClick={props.onClick}
          disabled={props.disabled}
          className={`rounded-md w-60 h-12 flex text-center items-center justify-center ${
            props.disabled
              ? "cursor-not-allowed bg-[#9bbef9] text-white"
              : "bg-bg-blue text-white"
          }`}
          type="submit"
        >
          {props.text}
        </button>
      )}

      {props.cancel && (
        <button
          onClick={props.onClick}
          className="rounded-md bg-bg-gray text-inactive w-60 h-12 flex text-center items-center justify-center"
        >
          Cancel
        </button>
      )}

      {props.new && (
        <button
          onClick={props.onClick}
          className={`rounded-xl font-bold bg-accent text-white w-40 h-8 flex text-center items-center justify-center gap-3`}
        >
          <Plus color="white" /> Add New
        </button>
      )}

      {props.normal && (
        <button
          onClick={props.onClick}
          className="rounded-md bg-bg-blue text-white w-40 h-8 flex text-center items-center justify-center"
          type="submit"
        >
          {props.text}
        </button>
      )}

      {props.others && (
        <button
          onClick={props.onClick}
          className={`font-bold rounded-xl  text-white w-40 h-8 flex text-center items-center justify-center gap-3 ${props.className} `}
          type="submit"
        >
          {props.children}
          {props.text}
        </button>
      )}
    </>
  );
};

export default Button;
