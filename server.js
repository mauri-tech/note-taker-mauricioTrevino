// Import required dependencies
const express = require("express");

// Create an instance of Express app
const app = express();

// Set the port to listen on, using the environment variable if available, otherwise defaulting to 3001
const PORT = process.env.PORT || 3001;

// Import API and HTML routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Middleware setup
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies
app.use(express.static("public")); // Serve static files from the "public" directory

// Define route handlers
app.use("/api", apiRoutes); // API routes
app.use("/", htmlRoutes); // HTML routes

// Start the server and listen on the specified port
const server = app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

module.exports = server; // Export the server for testing or other usage
