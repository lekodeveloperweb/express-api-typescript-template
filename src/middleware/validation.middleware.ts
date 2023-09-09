import { NextFunction, Request, Response } from "express"
import { ZodObject } from "zod"
import { Debug, resolveZodFieldError } from "../utils"
const log = Debug("validation-middleware")

export const validationMiddleware =
  <T extends ZodObject<any>>(schema: T) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const validation = schema.safeParse(req.body)
      if (!validation.success) {
        const message = resolveZodFieldError(validation.error)
        log(message)
        res.status(400).json({ message })
        return
      }
      req.body = validation.data
      next()
    } catch (error) {
      const err = error as Error
      log(err)
      res.status(500).json({ message: err.message })
    }
  }
