import { Application } from "express"
export abstract class ControllerBase {
  constructor(protected app: Application) {}
  abstract initializeRoutes(): void
}
