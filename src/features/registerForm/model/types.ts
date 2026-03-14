import type { validationSchema } from "@features/registerForm/model/validator";
import { z } from "zod";

export type RegisterFormValues = z.infer<typeof validationSchema>;
