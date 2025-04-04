//types
import { emailSchema } from "@/shared/validation/emailSchema";
//validation
import { fullNameSchema } from "@/shared/validation/fullNameSchema";
import { passwordSchema } from "@/shared/validation/passwordSchema";
//zod
import { z } from "zod";

export const signUpPageValidationSchema = z
  .object({
    email: emailSchema,
    fullName: fullNameSchema,
    password: passwordSchema,
    repeatPassword: z.string(),
  })
  .refine((fields) => fields.password === fields.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"],
  });
