import { env } from "#api/lib/utils/env.js";
import { Logger } from "#api/lib/utils/logger.js";
import { WebSocketServer } from "ws";
import express from "express";

import { ssr } from "./ssr.js";

const logger = new Logger("core", "server");
const wsLogger = new Logger("core", "websocket");

export const app = express();
app.use(await ssr());
const server = app.listen(env.PORT, () => {
  logger.info(`Server listening on: http://localhost:${env.PORT}`);
});

export const wss = new WebSocketServer({ noServer: true });

wss.on("connection", (ws, req) => {
  ws.on("error", (err) => wsLogger.error(err));
  ws.on("message", (msg) => wsLogger.info(msg));
});

server.on("upgrade", (req, socket, head) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname == "/api/websocket" || url.pathname == "/api/ws") {
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit("connection", ws, req);
    });
  } else {
    socket.destroy();
  }
});

app.get("*", (req, res, next) => {

})