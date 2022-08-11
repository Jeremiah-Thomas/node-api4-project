const users = [
  { username: "John", password: "1234" },
  { username: "Jane", password: "5678" },
];

const express = require("express");

const server = express();

server.use(express.json());

server.get("/api/users", (req, res) => {
  res.json(users);
});

server.post("/api/users", (req, res) => {
  users.push(req.body);
  res.json(req.body);
});

server.post("/api/login", (req, res) => {
  users.forEach((user) => {
    if (
      user.username === req.body.username &&
      user.password === req.body.password
    ) {
      res.json({ message: "Welcome" });
    } else {
      res.json({
        message: "User not found. PLease check info or create a user.",
      });
    }
  });
});

module.exports = server;
