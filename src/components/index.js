export class Component {
  constructor() {
    this.manifest = {}
    this.config = {};
    this.events = {};
    this.activities = {};
  }
}

/**
 * @param {string} key 
 * @param {PropertyDescriptor} descriptor
 */
export function activity(target, key, descriptor) {
  const org = descriptor.value;
  return () => { }
}

export function event(name) {
  return () => { }
}

export function state() {
  return () => {

  }
}