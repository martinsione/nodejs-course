const os = require("os");

console.log(os.arch());
console.log(os.platform());

const uptimeHours = Math.floor(os.uptime() / 3600);
const uptimeMinutes = Math.floor((os.uptime() % 3600) / 60);
console.log(`${uptimeHours} hours, ${uptimeMinutes} minutes`);

const SIZE = 1024;
const kb = (kb) => kb / SIZE;
const mb = (mb) => kb(mb) / SIZE;
const gb = (gb) => mb(gb) / SIZE;

// Ram memory in gb
console.log(`${gb(os.totalmem()).toFixed(1)} gb`);

console.log(os.homedir());
