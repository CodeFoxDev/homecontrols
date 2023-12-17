# Services

All the first-party services for homecontrols are located in this folder, along with the documentation for services.

- Frontend
- Notification

Each service needs to define its permissions to be able to use those things, like
- http
- notification
- fs
Permissions can be disabled by the user in the config of the service

```jsx
import { Service } from "homecontrols/core"

const frontend = new Service({
  name: "frontend",
  
})
```