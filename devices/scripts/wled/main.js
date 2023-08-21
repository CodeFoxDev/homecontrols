import { device } from "../../../lib/js_homecontrols/device.js"
import http from "http"

const _device = device();

// Gets fired when the state value of `state` changes
_device.when("homecontrols:state_change", (e) => {
  if (e.data.state == "state") lightStateChange(e);
})

/**
 * @param {homecontrols.eventData} e 
 * @returns 
 */
function lightStateChange(e) {
  if (!_device.data.ip || param.indexOf(e.data.value) == -1) return;
  const param = [ "off", "on", "toggle" ];
  http.get(`${_device.data.ip}/win&T=${param.indexOf(e.data.value)}`, (res) => {
    res.on("end", () => { e.success() })
  })
}