"use client";

import { useThemeContext } from "@/context/theme";
import Button from "@/common/Button";
import Tabs from "@/common/Tabs";
import { useState } from "react";
import BoldInput from "@/common/BoldInput";

// This page list all common components
export default function Tasks() {
  const { color, setColor } = useThemeContext();
  const [signIn, setSignIn] = useState(true);
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="bg-red-800">{color}</div>;
      <Button continue />
      <Button modal />
      <Button cancel />
      <Button new />
      <Tabs left={signIn} setLeft={setSignIn} />
      <BoldInput title="Email" value={inputValue} setValue={setInputValue} />
      <BoldInput title="Password" value={inputValue} setValue={setInputValue} />
      <BoldInput title="Username" value={inputValue} setValue={setInputValue} />
      {inputValue}
    </>
  );
}
