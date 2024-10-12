const { Server } = require("socket.io");

// Fungsi untuk menginisialisasi chat
function initChat(httpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173", // Ganti dengan URL aplikasi klien Anda
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type"],
      credentials: true,
    },
  });

  const users = {}; // {email: socketId}
  let adminSocketId = null; // Untuk menyimpan admin socket ID
  let usersInRoom = 0;
  const MAX_USERS = 100; // Batas maksimal pengguna di room

  io.on("connection", (socket) => {
    console.log("New client connected, socket ID:", socket.id);

    // Periksa jika room sudah penuh
    if (usersInRoom >= MAX_USERS) {
      socket.emit("roomStatus", false); // Emit status room penuh
      socket.disconnect(); // Putuskan koneksi pengguna
      console.log("User disconnected: Room is full.");
      return;
    }

    console.log("A user connected");
    usersInRoom++;

    // Emit status ke semua klien
    io.emit("roomStatus", usersInRoom >= MAX_USERS);

    socket.on("register", ({ email, username, isAdmin }) => {
      if (isAdmin) {
        adminSocketId = socket.id;
        console.log(`Admin registered, socket ID: ${socket.id}`);
      } else {
        users[email] = socket.id;
        console.log(
          `User registered: ${username} (${email}), socket ID: ${socket.id}`
        );
      }
    });

    socket.on("sendMessage", (data) => {
      console.log("Message received:", data);
      let recipientSocketId;

      if (data.sender === "admin") {
        recipientSocketId = users[data.to];
      } else if (data.to === "admin") {
        recipientSocketId = adminSocketId;
      }

      if (recipientSocketId) {
        io.to(recipientSocketId).emit("receiveMessage", data);
      } else {
        console.log(`Recipient (${data.to}) not found.`);
      }
    });

    socket.on("endChat", (data) => {
      const { email } = data; // Ini sekarang berisi email yang benar

      if (!email) {
        console.log("Email is undefined or missing");
        return;
      }

      const recipientSocketId = users[email]; // Ambil socketId dari user yang sudah terdaftar

      if (recipientSocketId) {
        io.to(recipientSocketId).emit("chatEnded", {
          message: "Admin has ended the chat.",
        });
        console.log(`Chat ended for user: ${email}`);
      } else {
        console.log(
          `User with email ${email} not found or already disconnected.`
        );
      }
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected, socket ID:", socket.id);
      usersInRoom--;

      // Emit status ke semua klien
      io.emit("roomStatus", usersInRoom >= MAX_USERS);

      if (socket.id === adminSocketId) {
        adminSocketId = null;
        console.log("Admin disconnected.");
      } else {
        for (const email in users) {
          if (users[email] === socket.id) {
            delete users[email];
            break;
          }
        }
      }
    });
  });
}

module.exports = initChat;
