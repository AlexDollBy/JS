const fs = require("fs");
const http = require("http");
const path = require("path");

const port = 3000;
const contentTypes = new Map([
  [".js", "text/javascript"],
  [".html", "text/html"],
  [".css", "text/css"]]);

const request = (req, res) => {
  const end = req.url === "/" ? "/html/main.html" : req.url;
  const FilePath = path.join(__dirname,'/', end);
  fs.open(FilePath, "r", (err, _) => {
      fs.readFile(FilePath, (err, data) => {
      const ex = path.extname(FilePath);
      const contentType = contentTypes.get(ex);
      res.writeHead(200, {
        "Content-Type": contentType
      });
      res.end(data);
    });    
  });
};

const server = http.createServer(request);
server.listen(port, err => {
  if (err) {
    console.error("Что-то пошло не так", err);
  }
  console.log(`Сервер запущен. Порт: ${port}`);
});