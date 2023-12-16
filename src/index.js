import { Logger } from "./utils/logger.js";

const logger = new Logger("core", "subpart of core");

logger.info("test");
logger.warn("overload");
logger.error("shit man");