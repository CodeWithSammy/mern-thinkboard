import express from "express";
import notesRoutes from "./routes/notesRoutes.js"; // Import the notes routes
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js"; // Import the rate limiting middleware
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve(); // Get the current directory name

// Middleware to handle CORS and JSON parsing
// Allow requests from the frontend and specify allowed methods
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json()); // Middleware to parse JSON bodies
app.use(rateLimiter); // Apply rate limiting middleware


app.use("/api/notes", notesRoutes); // Use the notes routes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => { // Connect to the database then start the server
  app.listen(PORT, () => {
  console.log("Server is running on port", PORT);   
});
}
)
