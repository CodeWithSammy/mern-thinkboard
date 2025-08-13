 import ratelimit from "../config/upstash.js";
 
 const rateLimiter = async (req, res, next) => {
    try {
        const {success} = await ratelimit.limit("my-limit-key"); // Limit requests based on IP address
        if (!success) {
            return res.status(429).json({ message: "Too many requests, please try again later." });
        }
        next(); // If the request is within the limit, proceed to the next middleware
    } catch (error) {
        console.log("Error in rate limiter middleware:", error);
        next(error); // Pass the error to the next middleware for handling
    }
 }

 export default rateLimiter;