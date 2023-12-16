import { Component, activity, event, state } from "#core/components/index"

class Switch extends Component {
  constructor() {
    super();
  }
  @activity("turn_on")
  turn_on() {

  }

  @state()
  is_on() {

  }
}

class SmartSwitch extends Switch {
  constructor() {
    super();
  }
  test() {

  }
}