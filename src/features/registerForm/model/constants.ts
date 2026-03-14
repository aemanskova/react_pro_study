import type { RegisterFormValues } from "@features/registerForm/model/types.ts";

export const REQUIRED_RULE = "Field is required";
export const EMAIL_RULE = "Enter a correct email";
export const PASSWORD_RULE = "Enter at least 6 characters";
export const URL_RULE = "Enter a correct URL";

export const DEFAULT_VALUES: RegisterFormValues = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  socialLinks: [{ value: "" }]
};
