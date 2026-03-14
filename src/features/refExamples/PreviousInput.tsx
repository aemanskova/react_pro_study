import { Stack, Text, TextInput } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

export function PreviousInput() {
  const [value, setValue] = useState<string>("");
  const prevValue = useRef<string>("");

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <Stack>
      <TextInput
        label="Input"
        placeholder="Enter smth"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* eslint-disable-next-line react-hooks/refs */}
      <Text>Prev value: {prevValue.current}</Text>
    </Stack>
  );
}
