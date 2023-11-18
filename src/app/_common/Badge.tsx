import React from "react";

type propTypes = {
  children: string;
  bgColor: string;
};

const Badge = ({ children, bgColor }: propTypes) => {
  return (
    <div
      className={`w-[80%] h-[100%] rounded-full text-white flex justify-center items-center ${bgColor}`}
    >
      {children}
    </div>
  );
};

export default Badge;
