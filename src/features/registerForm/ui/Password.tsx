import type { RegisterFormValues } from "@features/registerForm/model";
import { PasswordInput } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";

export function Password() {
  const { control } = useFormContext<RegisterFormValues>();

  return (
    <Controller
      name="password"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <PasswordInput
          withAsterisk
          label="Password"
          placeholder="Enter your password"
          {...field}
          error={error?.message}
        />
      )}
    />
  );
}
