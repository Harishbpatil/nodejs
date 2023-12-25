const http = require("http");

const routes = require("./routes").default;

const server = http.createServer(routes);

// const server = http.createServer(routes.handler);

server.listen(4000);
