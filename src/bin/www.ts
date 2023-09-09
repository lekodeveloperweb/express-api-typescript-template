/**
 * Module dependencies.
 */
import http from "http"
import app from "../app"
import { HelloWorldController } from "../hello-world/hello-world.controller"
import { HelloWorldService } from "../hello-world/hello-world.service"
import { Debug } from "../utils"
import { normalizePort, onError } from "./www.common"
const debug = Debug("server")

// Dependency injection
new HelloWorldController(app, new HelloWorldService()).initializeRoutes()

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || "3000")
app.set("port", port)

/**
 * Create HTTP server.
 */

var server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port)
server.on("error", onError)
server.on("listening", onListening)

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address()
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr?.port
  debug("Listening on " + bind)
}
