import type { WizardState } from "@entities/wizard/model/types";

export async function subscribeAction(
  prevState: WizardState,
  formData: FormData
): Promise<WizardState> {
  const email = String(formData.get("email") || "").trim();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!email) {
    return {
      ...prevState,
      email: "",
      status: "error",
      message: "Please enter your email"
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return {
      ...prevState,
      email,
      status: "error",
      message: "Please enter a valid email"
    };
  }

  return {
    step: 1,
    email,
    status: "success",
    message: "Subscription confirmed successfully"
  };
}
