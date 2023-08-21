function data(data) {
  process.stdout.write(`DATA: ${convertValue(data)} \\n`);
}

function event(data) {
  process.stdout.write(`EVENT: ${convertValue(data)} \\n`);
}

function warn(data) {
  process.stdout.write(`# WARN: ${convertValue(data)} \\n`);
}

function error(data) {
  process.stdout.write(`# ERROR: ${convertValue(data)} \\n`);
}

function convertValue(data) {
  if (`${data}`.includes("[object")) return JSON.stringify(data);
  else return data
}