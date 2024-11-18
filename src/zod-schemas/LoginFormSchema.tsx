import * as z from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string({
      message: "You must fill in your email address to complete registration.",
    })
    .email({ message: "Invalid email address format" }),
  password: z
    .string({ message: "You must fill in this field." })
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(32, { message: "Password must be at most 32 characters long" })
    .regex(/\d/, { message: "Password must contain at least one digit" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character",
    })
    .regex(/^[\x00-\x7F]*$/, {
      message: "Password must only contain ASCII characters",
    }),
});

export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;
