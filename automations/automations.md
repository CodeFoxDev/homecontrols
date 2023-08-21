# Automations
Automations are sorted in collections

THIS WILL CHANGE, I DON'T LIKE IT
```jsonc
{
  "alias": "",
  "id": "",
  "description": "",
  "triggers": [
    {
      "type": "event",
      "device": "motion_sensor.slaapkamer_robin",
      "event": "motion"
    }
  ],
  "conditions": [
    {
      "type": "time",
      "after": "08:00:00",
      "before": "21:00:00"
    },
    {
      "type": "state",
      "device": "wled.logo",
      "state": {
        "state": "state",
        "value": "off"
      }
    }
  ],
  "actions": [
    {
      "device": "wled.logo",
      "data": {
        "state": "on"
      }
    }
  ]
}
```