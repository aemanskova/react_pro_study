type Status = "idle" | "error" | "success";

export type WizardState = {
  step: number;
  email: string;
  status: Status;
  message: string;
};
