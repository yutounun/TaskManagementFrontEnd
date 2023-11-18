import React from "react";

type propTypes = {
  children: string;
  bgColor: string;
  className: string;
};

const Badge = ({ className, children, bgColor }: propTypes) => {
  return (
    <div
      className={`h-[100%] rounded-full text-white flex justify-center items-center ${bgColor} ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
