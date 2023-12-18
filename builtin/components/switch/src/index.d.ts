import { ComponentEventBus } from "#src/events";
import { ComponentStateMachine } from "#src/states";

export class Switch {
  constructor(): void;

  states: ComponentStateMachine;
  bus: ComponentEventBus;

  /**
   * Turns the light on
   */
  turn_on(): void;
  /**
   * Turns the light off
   */
  turn_off(): void;
  /**
   * Toggles the light's is_on state
   */
  toggle(): void;
}
