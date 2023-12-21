import { existsSync, readFileSync } from "fs";
import { join } from "path";
import { Logger } from "./logger.js";

const logger = new Logger("utils", "env");

/** @type {import("types/env").entries} */
export const env = {};

// Load at import
load();

/** @type {import("types/env").load} */
export function load(options) {
  if (!existsSync(join(process.cwd(), ".env"), "utf-8")) return logger.error("Failed to load env file, file does not exist");
  const src = readFileSync(join(process.cwd(), ".env"), "utf-8");
  if (!src || src == "") return logger.warn("Failed to parse env file, file is empty");

  const parsed = parse(src, options);
  for (const prop in parsed) env[prop] = parsed[prop];

  return env;
}

/** @type {import("types/env").parse} */
export function parse(env, options) {
  // Initialize values
  options ??= {}
  options.parseInt ??= true;
  options.parseBoolean ??= true;

  let res = {}
  const props = env.split("\n");
  if (props.length == 0) {
    logger.warn("Failed to parse env file, file is empty");
    return false;
  }

  props.forEach(e => {
    // Length always needs to be more than 3, (e=e)
    // And can't parse if starts with a comment
    if (e.length <= 2) return; //logger.warn("Error when trying to parse env file, skipping invalid line:", e);
    else if (e.trim().startsWith("#")) return;

    const line = e.split("#")[0];
    const [prop, value] = line.split("=");
    if (prop == "" || value == "" || !prop || !value) return logger.warn("Error when trying to parse env file, skipping invalid line:", e);

    // Parse value if needed
    const val = value.toString().trim().replaceAll('"', "");
    if (val == "true" && options.parseBoolean) res[prop.trim()] = true;
    else if (val == "false" && options.parseBoolean) res[prop.trim()] = false;
    else if (val.match(/[0-9]*/g)[0] != "" && options.parseInt) res[prop.trim()] = parseInt(val);
    else res[prop.trim()] = val;
  });

  return res;
}

export default env;