import { app } from "./lib/server.js";
import { Logger } from "./lib/utils/logger.js";
import { test } from "func";
import { boolean } from "./test.json";
//import { Light } from "../builtin/components/light/src/index.js";

const logger = new Logger("core", "subpart of core");

app.get("/", (req, res) => {
  res.send("hello, world!");
});

// @ts-ignore
console.log(import.meta.env);
