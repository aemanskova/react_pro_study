import { PASSWORD_RULE, URL_RULE } from "@features/registerForm/model/constants";
import { EMAIL_RULE, REQUIRED_RULE } from "@shared/lib";
import { z } from "zod";

export const validationSchema = z
  .object({
    username: z.string().nonempty(REQUIRED_RULE),
    email: z
      .string()
      .nonempty(REQUIRED_RULE)
      .pipe(z.email({ message: EMAIL_RULE })),
    password: z.string().nonempty(REQUIRED_RULE).min(6, { message: PASSWORD_RULE }),
    passwordConfirmation: z.string().nonempty(REQUIRED_RULE).min(6, { message: PASSWORD_RULE }),
    socialLinks: z.array(
      z.object({
        value: z
          .string()
          .nonempty(REQUIRED_RULE)
          .pipe(z.url({ message: URL_RULE }))
      })
    )
  })
  .refine(
    (values) => {
      return values.password === values.passwordConfirmation;
    },
    {
      message: "The passwords do not match",
      path: ["passwordConfirmation"]
    }
  );
