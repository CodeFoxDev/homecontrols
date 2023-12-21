import { app } from "./server.js";

app.get("/api", (req, res) => {
  res.send("hello, world");
})