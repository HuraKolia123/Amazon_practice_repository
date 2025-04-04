import { z } from "zod";

export const usernameSchema = z
  .string()
  .min(4, { message: "minimum 4 characters" })
  .max(20, { message: "maximum 20 characters" });
