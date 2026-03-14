import { TextInput } from "@mantine/core";
import { type ChangeEvent, useRef, useState } from "react";

export function DebouncedLogger() {
  const [value, setValue] = useState<string>("");
  const ref = useRef<number>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;

    setValue(currentValue);

    if (ref.current) clearTimeout(ref.current);

    ref.current = setTimeout(() => {
      console.log({ currentValue });
    }, 1000);
  };

  return <TextInput label="Input" placeholder="Enter smth" value={value} onChange={handleChange} />;
}
