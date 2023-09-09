import { SafeParseError } from "zod"
import { resolveZodFieldError } from "../../utils"
import { HelloWorld, helloWorldValidationSchema } from "../hello-world.schema"

describe("asteroid validation", () => {
  it("should return an error if the date is not in YYYY-MM-DD format", () => {
    const invalidDate = "2021-01-0"
    const validation = helloWorldValidationSchema.safeParse({
      message: "Hello World",
      date: invalidDate,
    }) as unknown as SafeParseError<HelloWorld>

    expect(validation.success).not.toBe(true)
    expect(resolveZodFieldError(validation.error)).toEqual(
      "Date must be in YYYY-MM-DD format"
    )
  })
})
