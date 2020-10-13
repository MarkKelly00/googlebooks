const express = require("express");
const Path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const { dirname } = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

require('dotenv').config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

app.get("*", (req, res) => {
  res.sendFile(Path.join(__dirname, "/client/build/index.html"));
})
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});