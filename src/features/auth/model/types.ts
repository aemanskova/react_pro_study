import type { validationSchema } from "@features/auth/model/validator.ts";
import { z } from "zod";

export type LoginFormValues = z.infer<typeof validationSchema>;
