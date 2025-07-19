
const http = require('http');
const { Server } = require('socket.io');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const chatRoutes = require('./routes/chat');
const bookingRoutes = require('./routes/bookings');
const exploreRoutes = require('./routes/explore');

dotenv.config();

const app = express();
const server = http.createServer(app); // ✅ Create HTTP server manually
const io = new Server(server, {
  cors: {
    origin: 'https://ustaad-x.vercel.app', // your frontend
    credentials: true
  }
});


// 🔄 Store online users (key: userId, value: socket.id)
const onlineUsers = new Map();

io.on('connection', (socket) => {
  console.log('🔌 User connected:', socket.id);

  //  When user joins their personal room
  socket.on('join', (userId) => {
    socket.join(userId);
    socket.userId = userId;

    onlineUsers.set(userId, socket.id);
    console.log(`✅ User ${userId} joined their room`);

    // Notify others this user is online
    socket.broadcast.emit('userOnline', userId);
  });

  //  Receive and forward chat messages
  socket.on('sendMessage', async ({ senderId, receiverId, content }) => {
    const message = {
      sender: senderId,
      receiver: receiverId,
      content,
      createdAt: new Date()
    };

    //  Emit only to the receiver's room
    io.to(receiverId).emit('newMessage', message);
  });

  //  Typing indicator
  socket.on('typing', ({ to }) => {
    io.to(to).emit('userTyping', socket.userId); // emit typing to receiver
  });

  // 🔴 On disconnect
  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
    if (socket.userId) {
      onlineUsers.delete(socket.userId);
      socket.broadcast.emit('userOffline', socket.userId); // notify others
    }
  });
});

// CORS and Middlewares
// app.use(cors({
//   origin: 'https://ustaad-x.vercel.app',
//   credentials: true,
// }));
app.use(cors({
  origin: 'https://ustaad-x.vercel.app',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  API Routes
app.get('/', (req, res) => {
  res.status(200).json({
    message: '🎉 Welcome to UstaadX API!',
    status: 'running',
    time: new Date().toISOString()
  });
});
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/users/explore', exploreRoutes);

//  Connect DB and Start Server
connectDB()
  .then(() => {
    server.listen(process.env.PORT || 8000, '0.0.0.0', () => {
      console.log(`⚙️ Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log('❌ MONGO DB connection failed !!!', err);
  });
