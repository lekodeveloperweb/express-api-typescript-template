import { format } from "date-fns"
import { HelloWorld } from "./hello-world.schema"

export interface IHelloWorldService {
  get(): Promise<HelloWorld>
  post(message: string): Promise<HelloWorld>
  put(message: string): Promise<HelloWorld>
  delete(): Promise<void>
}

let internalMessage = "Hello World"

export class HelloWorldService implements IHelloWorldService {
  async get(): Promise<HelloWorld> {
    return { message: internalMessage, date: this.getCurrentDate() }
  }

  async post(message: string): Promise<HelloWorld> {
    internalMessage = message
    return { message, date: this.getCurrentDate() }
  }

  async put(message: string): Promise<HelloWorld> {
    internalMessage = message
    return { message, date: this.getCurrentDate() }
  }

  async delete(): Promise<void> {
    internalMessage = ""
    await Promise.resolve()
  }

  private getCurrentDate(): string {
    return format(new Date(), "yyyy-MM-dd")
  }
}
