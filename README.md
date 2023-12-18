# Homecontrols

Homecontrols is a general purpose smart home hub

## Activities

If you want to say toggle a light, you would send an event from the frontend to HC core which executes the appropriate activity, which will then handle the request

## Areas

Everything should be sorted into areas, areas indicate a room/section of the home/business, names of devices should be unique per area,
but multiple areas can contain the same device name.

## Terminology
https://www.home-assistant.io/getting-started/concepts-terminology/

- Integration
  - The integration is what makes communication between HC and the device possible
  - It can be written in JS(, Python or c++)
- Service
  - A service is a part of homecontrols, like the ui service, notification service, etc.
  - It can also be a service of a third party, like location service, weather service, etc.
- Action
  - An action is sort of like a `command`, when it's executed, something on the device will happen like turning a light on, etc. 
- Device
  - The device is a physical device that can be controlled via the integration with its actions

## Device architecture

- State
  - Each device has one or more states, be it if a switch is turned on, or something different.
  - State can mostly be used as a condition for an automation, like if it's a certain time, etc.
  - If a state is used as a trigger, it will listen for the `state_changed` event on the device's event bus.
- Events
  - Devices can emit events when something happens, like a sensor detecting motion
  - Events are primarily used as triggers for automations
- Services
  - Service are actions on a device, like turn the lights on/off
  - Services are used as an action on automations
  - Serivces can also be used for, e.g. switches in the app/dashboard

## Integrating with the dashboard/ui

Create components/widgets with html/jsx state data comes from backend and gets reflected in the frontend via a websocket call (will be handled be HC)

## TODO

All in-file todos are prefixed with `TODO:`
- Initialize data folder if it doesn't exist

## Entity ids

Generate a new one on first creation and save it in data folder so it can be retreived when server restarts or something.

## Directories

- `/src` homecontrols core's source code
  - `/src/components` all the component-related code
    - `/src/components/builtin` first-party components
  - `/src/types` all the typings
- `/data` where all the third-party integrations, services, configs, etc. will be stored