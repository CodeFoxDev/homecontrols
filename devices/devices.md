# Devices
In order to create automations, you need to have devices (e.g. sensors, switches).

## Device scripts
Scipts for devices are stored in the `/devices/scripts` directory and each devices contains a couple of files, this is an example of the file structure:
```
temperature_sensor
  device.json
  main.py
```
(In this example I am using a DHT11 temperature sensor made by Joy-It)
The `device.json` file contains metadata, such as this:
```json
{
  "name": "SEN-KY015TF",
  "alias": "temperature sensor",
  "keywords": [ "sensor", "temperature", "humidity", "dht-11" ],
  "runtime": "python",
  "type": "ondemand",
  "entry": "main.py",
  "commands": [
    {
      "name": "temperature",
      "description": "Gets the sensor's temperature"
    }
  ],
  "setupCommands": [
    "sudo apt-get update",
    "git clone https://github.com/joy-it/Adafruit_Python_DHT.git",
    "cd Adafruit_Python_DHT",
    "sudo python3 setup.py install"
  ]
}
```
In this file you will define the device, you will give it a name, an optional alias, keywords for searching, runtime for executing, etc.
A couple to note are:

- type            - there are 2 types:
  - active          - Active means that the script will always be running, and execute a function when something happens, like a motion sensor.
  - ondemand        - Ondemand means that the script will be called by homecontrols, or a module.
- runtime         - python is currently the only one availiable, but I'm planning to support javascript and c/c++ in the future
- commands        - this is optional, because it will alreay be defined in the main script, however this is usefull for descriptions, or extra metadata which cannot be added via the main script
- setupCommands   - these will be executed when a device is installed, this is used for installing things, like dependencies

There is also a way to use an ondemand device as a trigger, but this will require a build-in logic funtion that checks the values on an interval (more info will come)