import {
  DEFAULT_VALUES,
  type RegisterFormValues,
  validationSchema
} from "@features/registerForm/model";
import { Email } from "@features/registerForm/ui/Email";
import { Password } from "@features/registerForm/ui/Password";
import { PasswordConfirm } from "@features/registerForm/ui/PasswordConfirm";
import { SocialLinks } from "@features/registerForm/ui/SocialLinks";
import { UserName } from "@features/registerForm/ui/Username";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Stack } from "@mantine/core";
import { FormProvider, useForm } from "react-hook-form";

export function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    defaultValues: DEFAULT_VALUES,
    mode: "onBlur",
    resolver: zodResolver(validationSchema)
  });

  const { handleSubmit } = form;

  const submitHandler = async (values: RegisterFormValues) => {
    try {
      console.log({ values });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...form}>
      <Box>
        <Stack gap="md">
          <UserName />
          <Email />
          <Password />
          <PasswordConfirm />
          <SocialLinks />
          <Button onClick={handleSubmit(submitHandler)}>Register</Button>
        </Stack>
      </Box>
    </FormProvider>
  );
}
