"use client";

import { useThemeContext } from "@/context/theme";
import Button from "@/common/Button";

export default function Tasks() {
  const { color, setColor } = useThemeContext();
  return (
    <>
      <div className="bg-red-800">{color}</div>;
      <Button continue />
      <Button modal />
      <Button cancel />
      <Button new />
    </>
  );
}
