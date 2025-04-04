import { emailSchema } from "@/shared/validation/emailSchema";
import { passwordSchema } from "@/shared/validation/passwordSchema";
import { z } from "zod";

export const signInPageValidationSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
