import type { Application, Request, Response } from "express"
import { validationMiddleware } from "../middleware/validation.middleware"
import { Debug } from "../utils"
import { ControllerBase } from "./controller.base"
import { helloWorldValidationSchema } from "./hello-world.schema"
import { IHelloWorldService } from "./hello-world.service"
const log = Debug("asteroids-controller")

export class HelloWorldController extends ControllerBase {
  public static readonly apiPath: string = "/api/hello-world"
  constructor(app: Application, private service: IHelloWorldService) {
    super(app)
  }

  async get(_: Request, res: Response): Promise<void> {
    try {
      const result = await this.service.get()
      res.status(200).json(result)
    } catch (error) {
      log(error)
      const err = error as Error
      res.status(500).json({ message: err.message })
    }
  }

  async post(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.service.post(req.body.message)
      res.status(200).json(result)
    } catch (error) {
      log(error)
      const err = error as Error
      res.status(500).json({ message: err.message })
    }
  }

  async put(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.service.put(req.body.message)
      res.status(200).json(result)
    } catch (error) {
      log(error)
      const err = error as Error
      res.status(500).json({ message: err.message })
    }
  }

  async delete(_: Request, res: Response): Promise<void> {
    try {
      await this.service.delete()
      res.status(200).json({ message: "Hello World deleted" })
    } catch (error) {
      log(error)
      const err = error as Error
      res.status(500).json({ message: err.message })
    }
  }

  override initializeRoutes(): void {
    this.app.get(HelloWorldController.apiPath, this.get.bind(this))
    this.app.post(
      HelloWorldController.apiPath,
      validationMiddleware(helloWorldValidationSchema),
      this.post.bind(this)
    )
    this.app.put(HelloWorldController.apiPath, this.put.bind(this))
    this.app.delete(HelloWorldController.apiPath, this.delete.bind(this))
  }
}
