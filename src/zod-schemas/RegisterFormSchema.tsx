import * as z from 'zod'

export const RegisterFormSchema = z.object({
    username: z
    .string({message: "You must fill in this field."})
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must be at most 20 characters long" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores",
    }),
  email: z.string({message: "You must fill in your email address to complete registration."}).email({ message: "Invalid email address format" }),
  password: z
    .string({message: "You must fill in this field."})
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(32, { message: "Password must be at most 32 characters long" })
    .regex(/\d/, { message: "Password must contain at least one digit" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character",
    })
    .regex(/^[\x00-\x7F]*$/, {
      message: "Password must only contain ASCII characters",
    }),
  confirmPassword: z.string(),
}).refine(
  (values) => {
    return values.password === values.confirmPassword
  },
  {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  }
)

export type RegisterFormSchemaType = z.infer<typeof RegisterFormSchema>;