import DebugInstance from "debug"
import { ZodError } from "zod"

export const Debug = (namespace: string = "general") => {
  const log = DebugInstance(`express-api-typescript-template:${namespace}`)
  return (formatter: any, ...args: any[]) => {
    console.info(`express-api-typescript-template:${namespace}`, ...args)
    log(formatter, ...args)
  }
}

export const resolveZodFieldError = <T>(
  error: ZodError<T>
): string | undefined => {
  const fieldError: any = error.flatten().fieldErrors
  const key = Object.keys(fieldError)[0] as keyof T
  return fieldError[key]![0]
}
