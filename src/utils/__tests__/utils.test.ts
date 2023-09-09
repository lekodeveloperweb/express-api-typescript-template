import type { Debugger } from "debug"
import { Debug } from "../index"

const mockDebug = jest.fn<Debugger, [args: string]>()

jest.mock("debug", () => ({
  __esModule: true,
  default: (args: string) => () => mockDebug(args),
}))

describe("utils.ts", () => {
  it("should show a custom log namespace", () => {
    const debug = Debug("jest-test")
    debug("test from utils")
    expect(mockDebug).toBeCalledWith(
      `express-api-typescript-template:jest-test`
    )
  })
  it("should show a default log namespace", () => {
    const debug = Debug()
    debug("test from utils")
    expect(mockDebug).toBeCalledWith(`express-api-typescript-template:general`)
  })
})
