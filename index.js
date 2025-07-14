const connectDB = require("./src/config/db"); // ✅ Fixed: "st" removed
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("./src/routes/auth");
const userRoutes = require("./src/routes/users");
const chatRoutes = require("./src/routes/chat");
const bookingRoutes = require("./src/routes/booking");

// 🔧 Load environment variables
dotenv.config({ path: "./.env" });

// ⚙️ Initialize express app
const app = express();

// ✅ Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // To parse JSON request body

// ✅ Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/chat", chatRoutes);
// app.use("/api/booking", bookingRoutes);
app.get("/", (req, res) => {
    res.send("✅ UstaadX backend is live!");
});


// ✅ Database Connection and Server Start
// console.log("Mongo URI: ", process.env.MONGO_URI);
// console.log("Type of URI:", typeof process.env.MONGO_URI);
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, "0.0.0.0", () => {
      console.log(`⚙️ Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("❌ MONGO DB connection failed !!!", err);
  });
