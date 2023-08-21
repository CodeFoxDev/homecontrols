#!/usr/bin/env python
from homecontrols import commands as cmd
from homecontrols import printstd

import RPi.GPIO as GPIO
import time

printstd.cmdData("STARTING")

arguments = cmd.arguments()

sensor_pin = 18
sensor_fetch_interval = arguments["interval"]
GPIO.setmode(GPIO.BCM)
GPIO.setup(sensor_pin, GPIO.IN)

try: # Start of a loop
  while True:
    if(GPIO.input(sensor_pin) == 0): # When Sensor Input = 0
      cmd.emit("motion")
      time.sleep(float(sensor_fetch_interval))
    elif(GPIO.input(sensor_pin) == 1): # When Sensor Input = 1
      time.sleep(float(sensor_fetch_interval))
except KeyboardInterrupt:
  GPIO.cleanup()