const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.post("/addTask", taskController.addTask);

module.exports = router;
