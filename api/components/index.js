import { ComponentEventBus } from "../events/index.js";
import { ComponentStateMachine } from "api/states/index.js";
import { genEntityId } from "api/utils/id.js";

export class Component {
  constructor(data) {
    //console.log(data);
    this.bus = new ComponentEventBus();
    this.states = new ComponentStateMachine();
  }
}