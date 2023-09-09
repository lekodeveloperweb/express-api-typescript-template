import { Application } from "express"
import { SuperAgentTest, agent as supertest } from "supertest"

export default (app: Application): SuperAgentTest => {
  const agent = supertest(app)
  return agent
}
