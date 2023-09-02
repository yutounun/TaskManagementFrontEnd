"use client";

import { useThemeContext } from "../context/theme";

export default function Tasks() {
  const { color, setColor } = useThemeContext();
  return <div className="bg-red-800">{color}</div>;
}
