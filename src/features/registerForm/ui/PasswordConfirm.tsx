import type { RegisterFormValues } from "@features/registerForm/model";
import { PasswordInput } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";

export function PasswordConfirm() {
  const { control } = useFormContext<RegisterFormValues>();

  return (
    <Controller
      name="passwordConfirmation"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <PasswordInput
          withAsterisk
          label="Password confirmation"
          placeholder="Repeat your password"
          {...field}
          error={error?.message}
        />
      )}
    />
  );
}
