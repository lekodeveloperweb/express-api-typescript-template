import app from "../app"
import { normalizePort } from "./www.common"
/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || "3000")
app.set("port", port)

export default app
