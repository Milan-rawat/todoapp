const Task = require("../models/taskModel");

exports.addTask = async (req, res, next) => {
  try {
    const { taskName, deadLine, category, isDone } = req.body;
    const newTask = await Task.create({
      taskName: taskName,
      deadLine: deadLine,
      category: category,
      isDone: isDone,
    });

    return res.status(201).json({
      status: true,
      message: "Task created Successfully!",
      task: newTask,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Something went wrog please try again later!",
      err: err
    });
  }
};
