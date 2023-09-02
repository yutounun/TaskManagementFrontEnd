import React from "react";
import Plus from "./icons/Plus";

interface propTypes {
  continue: boolean;
  modal: boolean;
  cancel: boolean;
  new: boolean;
}

const Button = ({ ...props }, propTypes) => {
  return (
    <>
      {props.continue && (
        <button className="rounded-md bg-bg-blue text-white w-80 h-12 flex text-center items-center justify-center">
          Continue
        </button>
      )}

      {props.modal && (
        <button className="rounded-md bg-bg-blue text-white w-60 h-12 flex text-center items-center justify-center">
          Add
        </button>
      )}

      {props.cancel && (
        <button className="rounded-md bg-bg-gray text-inactive w-60 h-12 flex text-center items-center justify-center">
          Cancel
        </button>
      )}

      {props.new && (
        <button className="rounded-xl bg-accent text-white w-60 h-8 flex text-center items-center justify-center gap-3">
          <Plus color="white" /> Add New
        </button>
      )}
    </>
  );
};

export default Button;
