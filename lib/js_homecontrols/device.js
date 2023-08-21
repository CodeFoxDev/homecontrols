const customListeners = [];
const builtinListeners = [];
const state = {};

console.log = (...data) => { return }

/**
 * Gets the device used in the current context
 */
export function device() {
  return {
    data: {},
    /**
     * Returns the current state
     */
    state: {
      get: (key) => {
        return state[key];
      },
      set: (key, value) => {
        const oldVal = state[key];
        state[key] = value;
        // Trigger change event


        return {
          old: oldVal,
          new: value,
          key: key
        }
      }
    },
    /**
     * Emits an event
     * @param {string} event 
     * @param {*} data 
     */
    emit: (event, data) => {

    },
    /**
     * Registers an eventlistener with the given callback
     * @param {string} event 
     * @param {(e: homecontrols.eventData) => void} callback 
     */
    when: (event, callback) => {
      if (event.startsWith("homecontrols:")) {
        builtinListeners.push({
          event: {
            prefix: "homecontrols:",
            suffix: event.replace("homecontrols:", ""),
            name: event
          },
          callback: callback
        })
      } else customListeners.push({ event, callback })
    }
  }
}

function emitEvent(event, data) {
  const _listeners = builtinListeners.filter(l => l.event.name == event);
  const eventData = {
    event: event,
    data: data,
    success: () => {
      // Call when event callback returned successfully
    },
    error: () => {
      // Call when event callback failed
    }
  }
  _listeners.forEach(l => l.callback(eventData));
}

function emitStateEvent(eventType, stateKey, stateValue) {
  const event = `homecontrols:${eventType}`;
  emitEvent(event, { state: stateKey, value: stateValue })
}