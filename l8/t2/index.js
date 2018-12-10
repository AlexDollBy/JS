const fs = require("fs");
const http = require("http");
const path = require("path");

const PORT = 3000;
const STATUS_OK = 200;

const contentTypes = new Map([
  [".js", "text/javascript"],
  [".html", "text/html"],
  [".css", "text/css"]
]);

const requestHandler = (req, res) => {
  const endpoint = req.url === "/" ? "/html/main.html" : req.url;
  const localFilePath = path.join(__dirname,'/', endpoint);
  fs.open(localFilePath, "r", (openErr, _) => {
      fs.readFile(localFilePath, (readErr, data) => {
      const extension = path.extname(localFilePath);
      const contentType = contentTypes.get(extension);
      console.log(contentTypes.get(extension));
      res.writeHead(STATUS_OK, {
        "Content-Type": contentType
      });
      res.end(data);
    });    
  });
};

const server = http.createServer(requestHandler);

server.listen(PORT, err => {
  if (err) {
    console.error("Что-то пошло не так", err);
  }
  console.log(`Сервер запущен. Порт: ${PORT}`);
});