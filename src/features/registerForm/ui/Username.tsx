import type { RegisterFormValues } from "@features/registerForm/model";
import { TextInput } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";

export function UserName() {
  const { control } = useFormContext<RegisterFormValues>();

  return (
    <Controller
      name="username"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextInput
          withAsterisk
          label="Username"
          placeholder="Enter your username"
          {...field}
          error={error?.message}
        />
      )}
    />
  );
}
