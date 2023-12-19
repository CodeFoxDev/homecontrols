import { ComponentEventBus } from "../events/index.js";
import { ComponentStateMachine } from "#src/states/index.js";
import { genEntityId } from "#src/utils/id.js";

export class Component {
  constructor(data) {
    console.log(data);
    this.bus = new ComponentEventBus();
    this.states = new ComponentStateMachine();
  }
}