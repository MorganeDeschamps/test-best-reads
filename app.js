require("dotenv/config");
require("./db");

const express = require("express");
const app = express();

require("./config")(app);

// ROUTES
const allRoutes = require("./routes");
app.use("/api", allRoutes);

app.use((req, res, next) => {
    // If no routes match, send them the React HTML.
    res.sendFile(__dirname + "/public/index.html");
  });


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);
module.exports = app;
