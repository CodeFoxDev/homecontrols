// Load env file
import { load, env } from "./utils/env.js";
load();

import { Logger } from "./utils/logger.js";
import { Light } from "../builtin/components/light/src/index.js";

const logger = new Logger("core", "subpart of core");

/* logger.info("test");
logger.warn("overload");
logger.error("shit man"); */