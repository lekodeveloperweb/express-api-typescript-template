import z from "zod"

export const helloWorldValidationSchema = z.object({
  message: z.string({
    required_error: "Message is required",
  }),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: "Date must be in YYYY-MM-DD format",
    })
    .optional(),
})

export type HelloWorld = z.infer<typeof helloWorldValidationSchema>
