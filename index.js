const express = require("express");
const http = require("http");
const port = 8080;
const io = require("socket.io");
const app = express();
const httpServer = http.createServer(app);
const server = new io.Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
let timeChange;
const data = [
  { name: 1, x: Math.random() * 10, y: Math.random() * 10 },
  { name: 2, x: Math.random() * 10, y: Math.random() * 10 },
  { name: 3, x: Math.random() * 10, y: Math.random() * 10 },
  { name: 4, x: Math.random() * 10, y: Math.random() * 10 },
  { name: 5, x: Math.random() * 10, y: Math.random() * 10 },
];
server.on("connection", (socket) => {
  console.log("connection succesful");
  if (timeChange) clearInterval(timeChange);
  if (data.length > 5) {
    data.reverse().pop();
    data.reverse();
  }
  data.push({
    name: data[data.length - 1].name + 1,
    x: Math.random() * 10,
    y: Math.random() * 10,
  });
  setInterval(()=> socket.emit("message", data), 1000);
});
httpServer.listen(port, () => {
  console.log(`Server running on port ${port}`);
});