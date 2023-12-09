import { Component } from "#core/components/index"

function activity(name) {
  return () => { }
}

function event(name) {
  return () => { }
}

function state() {

}

class Switch extends Component {
  constructor() {
    super();
  }
  @activity("turn_on")
  turn_on() {

  }

  @state
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