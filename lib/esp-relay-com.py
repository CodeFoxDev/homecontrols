import serial
from time import sleep

class EspRelayCom:
    def __init__(self, interface, baudrate):
        self.serial = serial.Serial(interface, baudrate)

    def set(self, address, value):
        self.serial.write("set {} {};".format(address, value).encode())
        self.serial.flush()

    def get(self, address, wait):
        self.serial.write("get {};".format(address).encode())
        self.serial.flush()
        if (wait == False | wait == None): 
            return
        received_data = self.serial.read()
        sleep(0.03)
        data_left = self.serial.inWaiting()
        received_data += self.serial.read(data_left)
        return int(received_data.decode().replace("getBack ", ""))


Relay = EspRelayCom("/dev/ttyS0", 15200)

Relay.set(1, 1)
Relay.set(5, 1)

print(Relay.get(1, True))

sleep(5)
Relay.set(1, 0)
Relay.set(5, 0)