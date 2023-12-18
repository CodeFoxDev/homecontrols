import { Switch } from "#builtin/components/switch/src/index.js";

export class Light extends Switch {
  constructor() {
    super();
  }
}

const _light = new Light();
/* const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(_light));
console.log(methods);
 */