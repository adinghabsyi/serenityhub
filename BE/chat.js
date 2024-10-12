const { Server } = require("socket.io");

// Function to initialize chat
function initChat(httpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173", // Replace with your client app's URL
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type"],
      credentials: true,
    },
  });

  const users = {}; // {email: socketId}
  const usersQueue = []; // Array to store waiting users
  let adminSocketId = null; // To store admin socket ID
  const MAX_USERS = 2; // Maximum users in the room
  let usersInRoom = 0; // Counter for users currently in the room

  io.on("connection", (socket) => {
    console.log("New client connected, socket ID:", socket.id);

    // Check if the room is full
    if (usersInRoom >= MAX_USERS) {
      // If full, add user to the queue
      usersQueue.push(socket); // Add the socket to the queue
      const queuePosition = usersQueue.length; // Get the user's queue position
      socket.emit("roomStatus", { full: true, queueCount: queuePosition });
      console.log(`User added to queue. Queue position: ${queuePosition}`);

      // Handle disconnection from queue
      socket.on("disconnect", () => {
        const index = usersQueue.indexOf(socket);
        if (index !== -1) {
          usersQueue.splice(index, 1); // Remove user from queue on disconnect
          console.log("User disconnected from queue.");
        }
      });
      return; // Stop processing if the room is full
    }

    // User registration
    socket.on("register", ({ email, username, isAdmin }) => {
      if (isAdmin) {
        adminSocketId = socket.id;
        console.log(`Admin registered, socket ID: ${socket.id}`);
      } else {
        if (usersInRoom < MAX_USERS) {
          users[email] = socket.id;
          usersInRoom++; // Increase user count only after registration
          console.log(
            `User registered: ${username} (${email}), socket ID: ${socket.id}`
          );
        } else {
          // If the room is already full after registration
          usersQueue.push(socket); // Add to queue
          const queuePosition = usersQueue.length;
          socket.emit("roomStatus", { full: true, queueCount: queuePosition });
          console.log(`User added to queue. Queue position: ${queuePosition}`);
        }
      }

      // Emit status to all clients
      io.emit("roomStatus", {
        full: usersInRoom >= MAX_USERS,
        queueCount: usersQueue.length,
      });
    });

    // Sending messages
    socket.on("sendMessage", (data) => {
      console.log("Message received:", data);
      let recipientSocketId;

      // Determine recipient socket ID
      if (data.sender === "admin") {
        recipientSocketId = users[data.to];
      } else if (data.to === "admin") {
        recipientSocketId = adminSocketId;
      }

      // Emit message to recipient if found
      if (recipientSocketId) {
        io.to(recipientSocketId).emit("receiveMessage", data);
      } else {
        console.log(`Recipient (${data.to}) not found.`);
      }
    });

    // Ending chat
    socket.on("endChat", (data) => {
      const { email } = data; // Now contains the correct email

      if (!email) {
        console.log("Email is undefined or missing");
        return;
      }

      const recipientSocketId = users[email]; // Get socketId of registered user

      if (recipientSocketId) {
        io.to(recipientSocketId).emit("chatEnded", {
          message: "Admin has ended the chat.",
        });
        console.log(`Chat ended for user: ${email}`);

        // Remove user from queue if they were waiting
        const index = usersQueue.indexOf(recipientSocketId);
        if (index > -1) {
          usersQueue.splice(index, 1);
          console.log(`User ${email} removed from queue.`);
        }

        // Emit number of users in queue to all clients
        io.emit("queueStatus", usersQueue.length);
      } else {
        console.log(
          `User with email ${email} not found or already disconnected.`
        );
      }
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("Client disconnected, socket ID:", socket.id);
      // Emit status to all clients
      io.emit("queueStatus", usersQueue.length);

      // Check if admin disconnected
      if (socket.id === adminSocketId) {
        adminSocketId = null;
        console.log("Admin disconnected.");
      } else {
        // Remove user from users object and queue
        for (const email in users) {
          if (users[email] === socket.id) {
            delete users[email];
            const index = usersQueue.indexOf(socket.id);
            if (index > -1) {
              usersQueue.splice(index, 1); // Remove from queue if exists
              console.log(`User ${email} removed from queue on disconnect.`);
            }
            usersInRoom--; // Decrease user count when a user disconnects
            break;
          }
        }
      }
    });
  });
}

module.exports = initChat;
