import { formatDuration } from "@features/refExamples/ClickTimer/lib";
import type { ClickData } from "@features/refExamples/ClickTimer/model";
import { Button } from "@mantine/core";
import { useRef } from "react";

export function ClickTimer() {
  const clickDataRef = useRef<ClickData>({
    startTime: null,
    clickCount: 0
  });

  const handleClick = () => {
    if (!clickDataRef.current.startTime) clickDataRef.current.startTime = Date.now();
    clickDataRef.current.clickCount++;

    const firstClickTimeDiff = formatDuration(Date.now() - clickDataRef.current.startTime);
    const clickCount = clickDataRef.current.clickCount;

    console.log({ firstClickTimeDiff, clickCount });
  };

  return (
    <Button w={"max-content"} onClick={handleClick}>
      Click
    </Button>
  );
}
