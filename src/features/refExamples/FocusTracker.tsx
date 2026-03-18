import { Button, Stack, TextInput } from "@mantine/core";
import { type FocusEventHandler, useRef } from "react";

export function FocusTracker() {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const focusChangedRef = useRef<number>(0);

  const handleClick = () => {
    if (firstInputRef?.current) firstInputRef.current.focus();
  };

  const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    if (event.relatedTarget) {
      focusChangedRef.current++;
      console.log("Focus changed: ", focusChangedRef.current, "times");
    }
  };

  return (
    <Stack>
      <TextInput
        ref={firstInputRef}
        label="First input"
        placeholder="Enter smth"
        onFocus={handleFocus}
      />
      <TextInput ref={secondInputRef} label="Second input" placeholder="Enter smth" />
      <Button w={"max-content"} onClick={handleClick}>
        Focus on first
      </Button>
    </Stack>
  );
}
