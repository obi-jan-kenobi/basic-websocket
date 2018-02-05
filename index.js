const express = require("express");
const http = require("http");
const Websocket = require("websocket").server;

const app = express();

app.use("/public", express.static("public"));

app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.render("index");
});

const server = http.createServer(app);

const ws = new Websocket({
  httpServer: server
});

ws.on("request", req => {
  const connection = req.accept(null, req.origin);
  connection.on("message", msg => {
    console.log(msg);
  });

  connection.on("close", con => {
    console.log("connection closed");
  });
});

server.listen(3000);
