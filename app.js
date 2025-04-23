const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

// Enable CORS
app.use(cors());

// Use routes
// app.use("/api/users", userRouter);

module.exports = app;
