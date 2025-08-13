import express from "express";
import notesRoutes from "./routes/notesRoutes.js"; // Import the notes routes
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js"; // Import the rate limiting middleware
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5001;


app.use(express.json()); // Middleware to parse JSON bodies
app.use(rateLimiter); // Apply rate limiting middleware
// app.use ((req, res, next) => {
//   console.log(`Request method is ${req.method} and is requesting for '${req.url}'`);
//   next();
// })
app.use("/api/notes", notesRoutes); // Use the notes routes);


connectDB().then(() => { // Connect to the database then start the server
  app.listen(PORT, () => {
  console.log("Server is running on port", PORT);   
});
}
)
