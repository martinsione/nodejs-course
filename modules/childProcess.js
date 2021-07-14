const { exec, spawn } = require("child_process");

function execCommand(cmd, callback) {
  // Return either the error msg or the stdout
  exec(cmd, (err, stdout, sterr) => callback(err ? err.message : stdout));
}

execCommand("ls -la", (x) => console.log(x));

// Spawn process
// setTimeout otherwise it logs first
setTimeout(() => {
  let process = spawn("ls", ["-la"]);
  console.log(process.pid);
  console.log(process.killed);
  process.stdout.on("data", (data) => console.log(data.toString()));
}, 100);
