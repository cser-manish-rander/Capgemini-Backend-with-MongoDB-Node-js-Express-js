const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST"],
  },
});

const distPath = path.join(__dirname, "dist");
const hasBuiltFrontend = fs.existsSync(path.join(distPath, "index.html"));

if (hasBuiltFrontend) {
  app.use(express.static(distPath));
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send(
      "Backend running. Start the React frontend with npm run dev, or build it with npm run build."
    );
  });
}

// Track online users
let onlineUsers = 0;

io.on("connection", (socket) => {
  onlineUsers++;
  console.log(`User connected: ${socket.id} | Online: ${onlineUsers}`);

  // Broadcast updated user count to all clients
  io.emit("user_count", onlineUsers);

  // Broadcast join notification
  socket.broadcast.emit("system_message", "A new user joined the chat");

  // Listen for incoming chat messages
  socket.on("chat_message", (data) => {
    console.log(`Message from ${socket.id}: ${data.text}`);

    // Broadcast to all clients (including sender)
    io.emit("chat_message", {
      roomId: data.roomId || "general",
      id: socket.id.slice(0, 6),      // Short user ID
      authorName: data.authorName || "You",
      text: data.text,
      timestamp: new Date().toLocaleTimeString(),
    });
  });

  // Listen for typing events
  socket.on("typing", (payload) => {
    socket.broadcast.emit("typing", {
      roomId: payload?.roomId || "general",
      userId: socket.id.slice(0, 6),
      authorName: payload?.authorName || "Someone",
      isTyping: Boolean(payload?.isTyping),
    });
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    onlineUsers--;
    console.log(`User disconnected: ${socket.id} | Online: ${onlineUsers}`);
    io.emit("user_count", onlineUsers);
    io.emit("system_message", "A user left the chat");
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Chat server running → http://localhost:${PORT}`);
});