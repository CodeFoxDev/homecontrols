import { Component } from "#src/components/index.js";

export class Switch extends Component {
  constructor() {
    super();
    this.states.set({ is_on: false });
  }
  turn_on() {
    this.states.set({ is_on: true });
  }
  turn_off() {
    this.states.set({ is_on: false });
  }
  toggle() {
    const curr = this.states.get("is_on");
    this.states.set({ is_on: !curr });
  }
}

const _switch = new Switch();
/* const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(_switch));
console.log(methods); */