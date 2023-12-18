import { Component } from "#src/components/index.js";

export class Light extends Component {
  constructor() {
    super();
  }
  turn_on() {

  }
  turn_off() {

  }
  _helper() {

  }
}

const _light = new Light();
const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(_light));
console.log(methods);