// const connectDB = require("./config/db");// ✅ Fixed: "st" removed
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// const authRoutes = require("./routes/auth");
// const userRoutes = require("./routes/users");
// const chatRoutes = require("./routes/chat");
// const bookingRoutes = require("./routes/booking");

// // 🔧 Load environment variables
// dotenv.config({ path: "./.env" });

// // ⚙️ Initialize express app
// const app = express();

// ✅ Middleware
// app.use(cors()); // Enable CORS
// app.use(express.json()); // To parse JSON request body

// ✅ Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/chat", chatRoutes);
// app.use("/api/booking", bookingRoutes);
// app.get("/", (req, res) => {
//     res.send("✅ UstaadX backend is live!");
// });


// ✅ Database Connection and Server Start
// console.log("Mongo URI: ", process.env.MONGO_URI);
// console.log("Type of URI:", typeof process.env.MONGO_URI);
// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT || 8000, "0.0.0.0", () => {
//       console.log(`⚙️ Server is running at port: ${process.env.PORT || 8000}`);
//     });
//   })
//   .catch((err) => {
//     console.log("❌ MONGO DB connection failed !!!", err);
//   });

// File: src/index.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const chatRoutes = require('./routes/chat');
const bookingRoutes = require('./routes/bookings');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
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
app.use('/api/booking', bookingRoutes);

// Connect DB and Start Server
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, '0.0.0.0', () => {
      console.log(`⚙️ Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log('❌ MONGO DB connection failed !!!', err);
  });
