import { z } from "zod";

export const emailSchema = z
  .string({ message: "email shoud be a string" })
  .email({ message: "this email is non correct" });
