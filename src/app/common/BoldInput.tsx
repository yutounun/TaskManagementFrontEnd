import React, { useState } from "react";
import Check from "./icons/Check";
import Email from "./icons/Email";
import Key from "./icons/Key";
import User2 from "./icons/User2";

interface propTypes {
  title: string;
  value: string;
  setValue: (value: string) => void;
}
const BoldInput = ({ ...props }: propTypes) => {
  const [isEntered, setIsEntered] = useState(false);
  const handleChange = (e) => {
    setIsEntered(true);
    props.setValue(e.target.value);
  };

  return (
    <div className="rounded-md border-2 border-gray-text text-white w-80 h-14 flex text-center items-center justify-between">
      <div className="px-5 border-r-2 border-gray-text">
        {props.title === "Email" && <Email color="black" />}
        {props.title === "Password" && <Key color="black" />}
        {props.title === "Username" && <User2 color="black" />}
      </div>
      <div className="flex flex-col items-start justify-start">
        <p className="text-gray-text text-sm">{props.title}</p>
        <input
          className="text-black text-lg font-semibold"
          onInput={handleChange}
        />
      </div>
      <div className="mr-5">{isEntered && <Check />}</div>
    </div>
  );
};

export default BoldInput;
