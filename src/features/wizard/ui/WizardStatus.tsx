import type { WizardState } from "@entities/wizard";
import { Alert } from "@mantine/core";

type Props = {
  isPending: boolean;
  state: WizardState;
};

export function WizardStatus({ isPending, state }: Props) {
  if (isPending)
    return (
      <Alert color="blue" title="Submitting">
        Sending request...
      </Alert>
    );

  if (state.status === "error")
    return (
      <Alert color="red" title="Error">
        {state.message}
      </Alert>
    );
}
