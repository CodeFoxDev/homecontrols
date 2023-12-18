import { Logger } from "#src/utils/logger.js";
const logger = new Logger("core", "state machine");

export class ComponentStateMachine {
  #values;
  #keys;
  constructor() {
    this.#values = {};
    this.#keys = [];
  }
  /**
   * @param {Object<string, any>} obj 
   * Initializes the keys, no new keys can be added after this.
   */
  init(obj) {
    if (typeof obj != "object") return false;
    this.#keys = Object.keys(obj);
    for (const i of this.#keys) this.#values[i] = {
      val: obj[i],
      type: getType(obj[i]),
    }
    return true;
  }
  /**
   * @param {string | object} key 
   * @param {any | undefined} value 
   * Sets the value if it was initizalized and it's the same type
   */
  set(key, value) {
    if (typeof key == "object" && (value == null || value == undefined)) {
      const obj = key, keys = Object.keys(obj);
      if (keys.length > 1) return logger.error(`Expected 'string' or 'object' with 1 key, but received object with ${keys.length} keys instead`);
      key = keys[0];
      value = obj[keys[0]];
    }
    // TODO: add type and other properties in an object instead of direct value?
    const t = getType(key);
    const t_val = getType(value);
    if (t != "string")
      return logger.error(`Attempted to set the key: ${key}, but '${t}' is an invalid type for a key`);
    else if (!this.#keys.includes(key))
      return logger.error(`Attempted to set the key: ${key}, but this key doesn't exist`);
    else if (t_val != this.#values[key].type)
      return logger.error(`Attempted to set the key: ${key}, but the type '${t_val}' is different from '${this.#values[key].type}'`);

    this.#values[key].val = value;
    return value;
  }
  /**
   * @param {string} key 
   * Gets the value if it was initizalized
   */
  get(key) {
    if (!this.#keys.includes(key))
      return logger.error(`Attempted to get the key: ${key}, but this key doesn't exist`);

    const val = this.#values[key];
    if (!val || !val.val) return false;
    else return val.val;
  }
  signal() {
    // Return a signal with state
  }
}

function getType(val) {
  return Array.isArray(val) == true ? "array" : typeof val;
}