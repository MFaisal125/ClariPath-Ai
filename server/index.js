const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectMongoDB = require("./DataBase/ConnectMongoDB");

dotenv.config();
const app = express();

// CORS Configuration
app.use(
  cors({
    origin: [
      "https://ai-coach-career.vercel.app",
      "http://localhost:3000",
      "https://clari-path-ai-agent.vercel.app",
      "http://localhost:5173",
      "https://clari-path-ai.vercel.app",
    ],
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type",
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Routes
const UserRouter = require("./routes/User");
app.use("/user", UserRouter);

const PORT = process.env.PORT || 5005;

// Connect to MongoDB and Start Server
connectMongoDB()
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("❌ MongoDB Connection has Failed:", error);
    process.exit(1);
  });

// Default Route
app.get("/", (req, res) => {
  res.send("🚀 Welcome to Career Craft AI Backend");
});
