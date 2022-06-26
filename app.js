const express = require("express");
const path = require("path");
const fs = require("fs");
const taskRouter = require("./routes/taskRoutes");

// Start express app
const app = express();

// Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Routes
app.use(express.static(path.join(__dirname, "todoapp/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "todoapp/build", "index.html"));
});

app.use("/tasks", taskRouter);

app.all("*", (req, res, next) => {
    console.log(req)
  res.status(404).json({
    status: false,
    message: "Request URL not found!",
  });
});

module.exports = app;
