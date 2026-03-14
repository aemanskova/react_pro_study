import type { validationSchema } from "@features/registerForm/model/validator.ts";
import { z } from "zod";

export type RegisterFormValues = z.infer<typeof validationSchema>;
