import { z } from "zod";
import { PASSWORD_REGEX } from "../libs/constants/regexes";

export const passwordSchema = z.string().regex(PASSWORD_REGEX, {
  message:
    "Minimum 8 and maximum 22 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
});
