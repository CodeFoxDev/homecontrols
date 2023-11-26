

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

