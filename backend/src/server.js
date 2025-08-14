import express from "express";
import notesRoutes from "./routes/notesRoutes.js"; // Import the notes routes
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js"; // Import the rate limiting middleware
import dotenv from "dotenv";
import cors from "cors";
dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to handle CORS and JSON parsing
// Allow requests from the frontend and specify allowed methods
app.use(cors(
  {
    origin: "http://localhost:5173", // Allow requests from the frontend
    methods: "GET,POST,PUT,DELETE", // Allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  }
))
app.use(express.json()); // Middleware to parse JSON bodies
app.use(rateLimiter); // Apply rate limiting middleware


app.use("/api/notes", notesRoutes); // Use the notes routes);


connectDB().then(() => { // Connect to the database then start the server
  app.listen(PORT, () => {
  console.log("Server is running on port", PORT);   
});
}
)
