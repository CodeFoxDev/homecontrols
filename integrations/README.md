# Activities

To define an activity you can use one of the following methods:
- using function decorators in typescript
  ```ts
  import { defineNamespace, defineActivity } from "@homecontrols/core";

  @entity("light")
  @defineActivity("turn_on")
  function activity_light_on(data) {
    // The Light.turn_on event
  }
  ```
- using the entity's class
  ```js
  import { Light } from "@homecontrols/core";

  class CustomLight extends Light {
    turn_on(data) {
      // The Light.turn_on event
    }
  }
  ```
- or using an event listener with callback
  ```js
  import { Light } from "@homecontrols/core";

  Light.activity("turn_on", (data) => {

  });
  ```

## TODO
- Fine tune class / method names

Sample Light interface
```ts
interface Light {
  turn_on: Service,
  turn_off: Service,
  toggle: Service
}

interface Light.turn_on {
  entity_id: string,
  transition?: number,
  color?: number | string,   // Can be CSS3 color name, rgb, hex
  brightness?: number,
  brightness_pct?: number,   // Brightness percentage
}
```

