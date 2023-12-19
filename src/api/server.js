import { createServer } from "node:http";
import { WebSocketServer } from "ws";

const server = createServer();
const wss = new WebSocketServer({ noServer: true });

server.on("request", (req, res) => {

});

server.on("upgrade", (req, socket, head) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  // TODO: add authentication requirement
  if (url.pathname == "/api/ws") {
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit("connection", ws, request);
    })
  } else {
    socket.destroy();
  }
})