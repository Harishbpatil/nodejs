const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");

    const message = fs.readFileSync("message.txt", "utf8");

    res.write("<body>");

    res.write("<p> " + message + "</p>");

    res.write('<form action="/message" method="POST">');
    res.write('<input type="text" name="message" value="' + message + '">');
    res.write('<button type="submit">Send</button>');
    res.write("</form>");

    res.write("</body>");
    res.write("</html>");

    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
});

server.listen(4000);
