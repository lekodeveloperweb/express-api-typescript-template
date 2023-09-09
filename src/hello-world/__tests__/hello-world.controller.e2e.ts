import app from "../../bin/www.test"
import request from "../../utils/test.utils"
import { HelloWorldController } from "../hello-world.controller"

const mockHelloWorldService = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
}

describe("AsteroidsController e2e", () => {
  beforeAll(() => {
    new HelloWorldController(app, mockHelloWorldService).initializeRoutes()
  })

  beforeEach(() => {
    jest.resetAllMocks()
  })

  it("GET /hello-world | Should return 200", async () => {
    const expected = { message: "Hello world", date: "2020-01-01" }
    mockHelloWorldService.get.mockResolvedValueOnce(expected)
    const res = await request(app).get(HelloWorldController.apiPath).expect(200)
    expect(res.body).toEqual(expected)
  })
})
