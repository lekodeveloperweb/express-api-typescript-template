import { HelloWorldService } from "../hello-world.service"

describe("HelloWorldService", () => {
  let service: HelloWorldService

  beforeEach(() => {
    service = new HelloWorldService()
  })

  it("should create a instance", () => {
    expect(service).toBeDefined()
  })
})
