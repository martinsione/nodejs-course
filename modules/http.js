const { createServer } = require("http");
const PORT = 3000;

const router = (req, res) => {
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  switch (req.url) {
    case "/":
      res.write("<h1>Hi</h1>");
      res.end();
      break;
    default:
      res.write("<h1>Error 404</h1>");
      res.end();
  }
};

const server = createServer(router);

server.listen(PORT, (err) =>
  err ? console.error(err) : console.info(`Running on port: ${PORT}`)
);
