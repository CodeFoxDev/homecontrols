import { ComponentEventBus } from "../events/index.js";
import { ComponentStateMachine } from "#src/states/index.js";

export class Component {
  constructor() {
    this.bus = new ComponentEventBus();
    this.states = new ComponentStateMachine();
  }
}