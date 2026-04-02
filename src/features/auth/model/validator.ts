import { EMAIL_RULE, REQUIRED_RULE } from "@shared/lib";
import { z } from "zod";

export const validationSchema = z.object({
  password: z.string(REQUIRED_RULE).nonempty(REQUIRED_RULE),
  email: z
    .string(REQUIRED_RULE)
    .nonempty(REQUIRED_RULE)
    .pipe(z.email({ message: EMAIL_RULE }))
});
