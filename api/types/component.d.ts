import { ComponentEventBus } from "api/events";
import { ComponentStateMachine } from "api/states";

export class Component {
  constructor(data): void;

  bus: ComponentEventBus;
  states: ComponentStateMachine;
}
