"use client";

import * as React from "react";

interface BoxProps {
  children: React.ReactNode;
}

const SkeletonBox = () => {
  return <div className="p-4 family-mono box">--</div>;
};

const Box = ({ children }: BoxProps) => {
  return <div className="p-4 family-mono box">{children}</div>;
};

function Clock() {
  const [time, setTime] = React.useState<Date | undefined>(undefined);
  const timeString = time ? time.toLocaleTimeString("en-GB") : "";

  const hour = timeString.substring(0, 2);
  const minute = timeString.substring(3, 5);
  const second = timeString.substring(6, 8);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(
        new Date(
          // Do not swap en-US for undefined (which uses the user's default region)
          // It will lead to inconsistencies and will return INVALID DATE!!!!
          new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" })
        )
      );
    }, 50);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  if (time)
    return (
      <div className="styled-text text-5xl xl:text-8xl tracking-tighter flex gap-8">
        <Box>{hour}</Box>
        <Box>{minute}</Box>
        <Box>{second}</Box>
      </div>
    );

  return (
    <div className="styled-text text-5xl xl:text-8xl tracking-tighter flex gap-8">
      <SkeletonBox />
      <SkeletonBox />
      <SkeletonBox />
    </div>
  );
}

export default Clock;
