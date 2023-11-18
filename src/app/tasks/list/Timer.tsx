"use client";

import Pause from "@/_common/icons/Pause";
import Play from "@/_common/icons/Play";
import React, { useRef, useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";

const Timer = ({
  initialMinutes,
  setManHourMin,
}: {
  initialMinutes: number;
  setManHourMin: (manHourMin: number) => void;
}) => {
  const { minutes, hours, days, isRunning, start, pause, reset } = useStopwatch(
    { autoStart: false }
  );
  const prevMinutesRef = useRef(minutes);
  const [localInitialMinutes, setLocalInitialMinutes] =
    useState(initialMinutes);

  // manHourMin is updated every mins
  useEffect(() => {
    if (prevMinutesRef.current !== minutes) {
      setManHourMin(localInitialMinutes + minutes + hours * 60);
      prevMinutesRef.current = minutes;
    }
  }, [localInitialMinutes, minutes, hours, setManHourMin]);

  useEffect(() => {
    setLocalInitialMinutes(initialMinutes);
  }, []);

  return (
    <div className="w-full">
      <div className="flex w-full gap-1">
        {isRunning ? (
          <Pause color="#333333" onClick={pause} />
        ) : (
          <Play color="#333333" onClick={start} />
        )}
        <span className="text-gray-on-gray">{days}days </span>
        <div className="text-gray-on-gray">
          <span>{hours + Math.floor(localInitialMinutes / 60)}H:</span>
          <span>{minutes + (localInitialMinutes % 60)}M</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
