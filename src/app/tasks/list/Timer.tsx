"use client";

import Pause from "@/common/icons/Pause";
import Play from "@/common/icons/Play";
import React from "react";
import { useStopwatch } from "react-timer-hook";

const Timer = () => {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });
  return (
    <div className="w-full">
      <div className="flex w-full gap-1">
        {isRunning ? (
          <Pause color="#333333" onClick={pause} />
        ) : (
          <Play color="#333333" onClick={start} />
        )}
        <span>{days}days </span>
        <div>
          <span>{hours}H:</span>
          <span>{minutes}M</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
