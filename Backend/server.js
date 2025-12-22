import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import leadRoutes from "./routes/leadRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/leads", leadRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send(" API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(` Server running on http://localhost:${PORT}`)
);