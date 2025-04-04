import { z } from "zod";

export const fullNameSchema = z
  .string()
  .min(5, { message: "minimum 5 characters" })
  .max(20, { message: "maximum 20 characters" });
