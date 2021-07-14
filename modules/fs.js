const fs = require("fs");

function read(filepath, callback) {
  fs.readFile(filepath, (error, data) => {
    // Give the callback the the argument
    callback(error ? error : data.toString());
  });
}

function write(filepath, content, callback) {
  fs.writeFile(filepath, content, (error) => {
    callback(error ? erorr : "The file was succesfully written");
  });
}

function remove(filepath, callback) {
  fs.unlink(filepath, (err) => {
    callback(err ? err : "The file was succesfully unlinked");
  });
}

const filepath = `${__dirname}/test.txt`;
const content = `My name is martin 🐼.`;

// With setTimeout so that I decide in which order the functions will execute
function fsTest() {
  setTimeout(() => {
    write(filepath, content, (x) => console.log(x));
  }, 1000);

  setTimeout(() => {
    read(filepath, (x) => console.log(x));
  }, 1500);

  setTimeout(() => {
    remove(filepath, (x) => console.log(x));
  }, 2000);
}

fsTest();
