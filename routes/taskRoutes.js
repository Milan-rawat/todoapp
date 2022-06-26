const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.post("/addTask", taskController.addTask);
router.get("/getAllTasks", taskController.getAllTasks);
router.post("/doneTask", taskController.doneTask);
router.delete("/deleteTask", taskController.deleteTask);

module.exports = router;
