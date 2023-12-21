import { env } from "#src/utils/env.js";
import { Logger } from "#src/utils/logger.js";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import express from "express";

const logger = new Logger("core", "server");
const wsLogger = new Logger("core", "websocket");

export const app = express();
const server = app.listen(env.PORT, () => {
  logger.info(`Server listening on port: ${env.PORT}`);
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