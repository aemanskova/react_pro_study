import type { LoginFormValues } from "@features/auth/model";
import { TextInput } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";

export function Email() {
  const { control } = useFormContext<LoginFormValues>();

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
