"use client";

import { useThemeContext } from "@/context/theme";
import Button from "@/common/Button";
import Tabs from "@/common/Tabs";
import { useState } from "react";

export default function Tasks() {
  const { color, setColor } = useThemeContext();
  const [signIn, setSignIn] = useState(true);
  return (
    <>
      <div className="bg-red-800">{color}</div>;
      <Button continue />
      <Button modal />
      <Button cancel />
      <Button new />
      <Tabs left={signIn} setLeft={setSignIn} />
    </>
  );
}
