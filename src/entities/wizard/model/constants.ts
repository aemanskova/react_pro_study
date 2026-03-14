import type { WizardState } from "@entities/wizard/model/types";

export const initialState: WizardState = {
  step: 0,
  email: "",
  status: "idle",
  message: ""
};
