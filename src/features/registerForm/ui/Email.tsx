import type { RegisterFormValues } from "@features/registerForm/model";
import { TextInput } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";

export function Email() {
  const { control } = useFormContext<RegisterFormValues>();

  return (
    <Controller
      name="email"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextInput
          withAsterisk
          label="Email"
          placeholder="Enter your email"
          {...field}
          error={error?.message}
        />
      )}
    />
  );
}
