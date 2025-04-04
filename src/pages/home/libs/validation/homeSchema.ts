import { emailSchema } from "@/shared/validation/emailSchema";
import { passwordSchema } from "@/shared/validation/passwordSchema";
import { usernameSchema } from "@/shared/validation/usernameSchema";
import { z } from "zod";

export const homeSchema = z
  .object({
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
    repeatPassword: z.string(),
  })
  .refine(
    (values) => {
      return values.password === values.repeatPassword;
    },
    {
      message: "password do not match",
      path: ["repeatPassword"],
    }
  );
