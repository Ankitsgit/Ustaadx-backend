
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
app.use(
  cors({
    origin: 'http://localhost:5173', // ✅ No trailing slash!
    credentials: true, // ✅ Optional if you're using cookies
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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
