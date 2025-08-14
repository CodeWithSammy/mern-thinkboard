import axios from "axios";
// Create an axios instance with default settings
const api = axios.create({
  baseURL: "http://localhost:5001/api",
}); // Default base URL
export default api;
