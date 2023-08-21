import { exec, spawn } from "child_process"

const motion_sensor = spawn(
  "python",
  [ "-u", "devices/scripts/motion_sensor/main.py", "--interval=1" ],
);

motion_sensor.stderr.on("data", (data) => {
  console.log(`ERROR: ${data}`)
});

motion_sensor.stdout.on("data", (data) => {
  console.log(`${data}`)
});