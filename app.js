const express = require("express");
const cors = require("cors");
const globalErrorHandler = require("./controllers/errorController");

const app = express();
app.use(express.json());

// Enable CORS
app.use(cors());

// Use routes
// app.use("/api/users", userRouter);

app.all("*", (req, res, next) => {
  next(
    new AppError(`Can't find ${req.originalUrl} on this server!`, 404)
  );
});

app.use(globalErrorHandler);

module.exports = app;
