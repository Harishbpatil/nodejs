const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello From My NodeJs Server!!</h1></body>");
    res.write("</html>");
    res.end();
    return;
  }

  if (url === "/home") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Welcome to my Home!!</h1></body>");
    res.write("</html>");
    res.end();
    return;
  }

  if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Welcome to About us Page!!</h1></body>");
    res.write("</html>");
    res.end();
    return;
  }

  if (url === "/node") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Welcome to my NodeJs Project!!</h1></body>");
    res.write("</html>");
    res.end();
    return;
  }
});

server.listen(4000);
