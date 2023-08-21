import sys
from . import printstd

regCommands = {}

def when(command, function):
  if (callable(function) == False):
    printstd.warn("Passed function isn't callable")
    return
  # Check if function parameter is actual function
  regCommands[command] = function

def emit(command, data):
  printstd.cmdData(command)
  printstd.cmdData(data)
  return

def arguments():
  _arguments = {}
  for i in range(1, len(sys.argv)):
    if (sys.argv[i].startswith("--")):
      seg = sys.argv[i].removeprefix("--").split("=")
      if (seg[1].isnumeric()):
        _arguments[seg[0]] = float(seg[1])
      else:
        _arguments[seg[0]] = seg[1]
  return _arguments

def execute():
  if (sys.argv[1] == "__list_commands"):
    __list_commands()
    return

  n = len(sys.argv)
  cmdString = ""
  for i in range(1, n):
    if (i > 1):
      cmdString += " "
    cmdString += sys.argv[i]

  func = False

  if cmdString in regCommands:
    func = regCommands[cmdString]
  else:
    printstd.error("Command doesn't exist on this device")
    return
  
  res = func()
  printstd.cmdData(res)
  
  return cmdString

def __list_commands():
  keys = list(regCommands.keys())
  n = len(keys)

  arr = "["

  for i in range(0, n):
    if (i == n - 1):
      arr += '"{}"]'.format(keys[i])
    else:
      arr += '"{}",'.format(keys[i])

  printstd.cmdData(arr)