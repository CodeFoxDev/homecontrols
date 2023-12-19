import { Component } from "#src/types";

export class Switch extends Component {
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
