import { Switch } from "#builtin/components/switch/src/index.js";

export class Light extends Switch {
  constructor(data) {
    super(data);
  }
}

const _light = new Light({ test: "hi" });
/* const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(_light));
console.log(methods);
 */