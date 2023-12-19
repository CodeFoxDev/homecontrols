import { ComponentEventBus } from "#src/events";
import { ComponentStateMachine } from "#src/states";

export class Component {
  constructor(data): void;

  bus: ComponentEventBus;
  states: ComponentStateMachine;
}
