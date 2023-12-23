import { stdout } from "process";

const showTimestamps = true;
const showColors = true;
const modifyConsoleLog = false;

const _consoleLog = console.log.bind(console);

const logTypes = {
  info: "info",
  warn: "warn",
  error: "error",
}

export class Logger {
  /**
   * @param {string} service Base service, e.g. "core" / "plugin"
   * @param {string} identifier Identifier for the subpart of the service, e.g. "wled" (with server: "plugin")
   */
  constructor(service, identifier) {
    this.service = service;
    this.identifier = identifier;
  }
  /**
   * @param {Array} data 
   * @param {string} type 
   */
  #write(data, type) {
    if (showTimestamps) stdout.write(this.#formatTimeStamp());
    stdout.write(this.#formatPrefix());
    if (showColors) {
      if (type == logTypes.warn) stdout.write('\x1b[33m')
      else if (type == logTypes.error) stdout.write('\x1b[31m');
    }
    stdout.write(" ");
    _consoleLog(...data);
    stdout.write("\x1b[0m");
  }
  #formatTimeStamp() {
    const t = new Date();
    const sec = t.getSeconds() < 10 ? `0${t.getSeconds()}` : `${t.getSeconds()}`;
    const min = t.getMinutes() < 10 ? `0${t.getMinutes()}` : `${t.getMinutes()}`;
    const hour = t.getHours() < 10 ? `0${t.getHours()}` : `${t.getHours()}`;
    if (!showColors) return `${hour}:${min}:${sec}`;
    return `\x1b[90m${hour}:${min}:${sec}\x1b[0m `;
  }
  #formatPrefix() {
    if (!showColors) return `[${this.service}]${this.identifier ? `[${this.identifier}]` : ""}`;
    return `\x1b[36m[${this.service}]${this.identifier ? `\x1b[90m[${this.identifier}]` : ""}\x1b[0m`;
  }
  info(...data) {
    this.#write(data, logTypes.info);
  }
  warn(...data) {
    this.#write(data, logTypes.warn);
  }
  error(...data) {
    // TODO: add stacktrace?
    this.#write(data, logTypes.error);
    return false; // To be able to do: return logger.error(...);
  }
}

export class LoggerExternal extends Logger {
  constructor(identifier) {
    super();
    this.service = "integrations";
    this.identifier = identifier;
  }
}

// TODO: overwrite all console logging functions
(() => {
  if (!modifyConsoleLog) return;
  const _logger = new Logger("untracked");
  console.log = (...data) => { _logger.info(...data) }
  console.warn = (...data) => { _logger.warn(...data) }
  console.error = (...data) => { _logger.error(...data) }
})();