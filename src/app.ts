import cors from "cors"
import "dotenv/config"
import express from "express"
import logger from "morgan"

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(
  cors({
    origin: ((process.env.ORIGIN_ALLOWED as string) || "").split(","),
    optionsSuccessStatus: 200,
  })
)

app.use(express.urlencoded({ extended: false }))

export default app
