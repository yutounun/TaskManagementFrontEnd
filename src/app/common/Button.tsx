import React from "react";
import Plus from "./icons/Plus";

interface propTypes {
  continue: boolean;
  modal: boolean;
  cancel: boolean;
  new: boolean;
  text?: string;
  onClick: () => void;
}

const Button = ({ ...props }, propTypes) => {
  return (
    <>
      {props.continue && (
        <button
          onClick={props.onClick}
          className="rounded-md bg-bg-blue text-white w-80 h-12 flex text-center items-center justify-center"
        >
          Continue
        </button>
      )}

      {props.modal && (
        <button
          onClick={props.onClick}
          className="rounded-md bg-bg-blue text-white w-60 h-12 flex text-center items-center justify-center"
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
          className="rounded-xl font-bold bg-accent text-white w-40 h-8 flex text-center items-center justify-center gap-3"
        >
          <Plus color="white" /> Add New
        </button>
      )}
    </>
  );
};

export default Button;
