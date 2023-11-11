import React from "react";

const Toaster = ({ message }) => {
  return (
    <div className="z-10 fixed top-0 rounded-lg bg-green-600 px-10 py-5  left-1/2 transform -translate-x-1/2 font-semibold">
      <div className="text-white">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toaster;
