// server.js
const express = require("express");
const { createServer } = require("http");
const initChat = require("./chat");
const cors = require("cors");

const app = express();
const httpServer = createServer(app);
// Menggunakan middleware CORS
app.use(cors());

// Middleware untuk mengatur static files (jika diperlukan)
app.use(express.static('public'));

// Endpoint dasar untuk mengecek server
app.get('/', (req, res) => {
  res.send("Chat server is running");
});

// Initialize chat server
initChat(httpServer);

// Start the server
httpServer.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
