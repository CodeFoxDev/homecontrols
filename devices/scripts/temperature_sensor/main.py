from homecontrols import commands as cmd

import Adafruit_DHT

sensor = Adafruit_DHT.DHT11
sensor_pin = 23

def command_temperature():
  temperature = Adafruit_DHT.read(sensor, sensor_pin)[1]
  if (temperature is not None):
    return temperature
  else:
    return "ERROR"

def command_humidity():
  humidity = Adafruit_DHT.read(sensor, sensor_pin)[0]
  if (humidity is not None):
    return humidity
  else:
    return "ERROR"

cmd.when("temperature", command_temperature)
cmd.when("humidity", command_humidity)

cmd.execute()