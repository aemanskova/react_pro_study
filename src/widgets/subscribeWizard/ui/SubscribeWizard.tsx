import { initialState } from "@entities/wizard/model";
import { WizardStatus } from "@features/wizard";
import { Alert, Button, Paper, Stack, Stepper, Text, TextInput, Title } from "@mantine/core";
import { subscribeAction } from "@widgets/subscribeWizard/model";
import { useActionState } from "react";

export function SubscribeWizard() {
  const [state, formAction, isPending] = useActionState(subscribeAction, initialState);

  return (
    <Paper shadow="sm" radius="lg" p="xl" withBorder maw={420} mx="auto" mt={40}>
      <Stack gap="lg">
        <Title order={2}>Newsletter Subscription</Title>

        <Stepper active={state.step} allowNextStepsSelect={false}>
          <Stepper.Step label="Step 1" description="Enter email">
            <Stack component="form" gap="md" mt="md">
              <TextInput
                name="email"
                label="Email"
                placeholder="example@mail.com"
                defaultValue={state.email}
                error={state.status === "error" && !isPending ? state.message : null}
                disabled={isPending}
                withAsterisk
              />

              <WizardStatus isPending={isPending} state={state} />

              <Button type="submit" formAction={formAction} loading={isPending}>
                Subscribe
              </Button>
            </Stack>
          </Stepper.Step>

          <Stepper.Step label="Step 2" description="Confirmation">
            <Stack gap="md" mt="md">
              <Alert color="green" title="Success">
                {state.message}
              </Alert>
              <Text>
                Confirmed email: <b>{state.email}</b>
              </Text>
            </Stack>
          </Stepper.Step>
        </Stepper>
      </Stack>
    </Paper>
  );
}
