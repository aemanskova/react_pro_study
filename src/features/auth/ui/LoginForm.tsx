import { DEFAULT_VALUES, type LoginFormValues, validationSchema } from "@features/auth/model";
import { Email } from "@features/auth/ui/Email.tsx";
import { Password } from "@features/auth/ui/Password.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Stack } from "@mantine/core";
import { useLoginMutation } from "@shared/api/auth";
import { routes } from "@shared/config";
import { useAuthContext } from "@shared/lib/authContext.ts";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";

export function LoginForm() {
  const form = useForm<LoginFormValues>({
    defaultValues: DEFAULT_VALUES,
    mode: "onBlur",
    resolver: zodResolver(validationSchema)
  });

  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [trigger, { isLoading }] = useLoginMutation();

  const { handleSubmit } = form;

  const submitHandler = async (values: LoginFormValues) => {
    try {
      const res = await trigger(values).unwrap();
      if ("accessToken" in res) {
        login(res.accessToken);
        navigate(
          location.state?.fromUrl && location.state?.fromUrl !== routes.login
            ? location.state?.fromUrl
            : routes.profile
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...form}>
      <Box>
        <Stack gap="md">
          <Email />
          <Password />
          <Button loading={isLoading} onClick={handleSubmit(submitHandler)}>
            Login
          </Button>
        </Stack>
      </Box>
    </FormProvider>
  );
}
