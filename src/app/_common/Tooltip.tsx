import React from "react";

interface propTypes {
  children: React.ReactNode;
  className?: string;
  dataTip: string;
  onClick?: () => void;
}
const Tooltip = ({ onClick, children, className, dataTip }: propTypes) => {
  return (
    <div
      onClick={onClick}
      className={`tooltip tooltip-top ${className}`}
      data-tip={dataTip}
    >
      {children}
    </div>
  );
};

export default Tooltip;
