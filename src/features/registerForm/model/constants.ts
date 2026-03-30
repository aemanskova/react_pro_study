import type { RegisterFormValues } from "@features/registerForm/model/types";

export const PASSWORD_RULE = "Enter at least 6 characters";
export const URL_RULE = "Enter a correct URL";

export const DEFAULT_VALUES: RegisterFormValues = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  socialLinks: [{ value: "" }]
};
