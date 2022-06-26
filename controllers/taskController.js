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
      err: err,
    });
  }
};

exports.getAllTasks = async (req, res, next) => {
  try {
    const allTasks = await Task.find({});

    return res.status(200).json({
      status: true,
      tasks: allTasks,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Something went wrog please try again later!",
      err: err,
    });
  }
};

exports.doneTask = async (req, res, next) => {
  try {
    const taskId = req.query.taskId;
    const allTasks = await Task.findByIdAndUpdate(taskId, { isDone: true });

    return res.status(200).json({
      status: true,
      message: "Task marked as Done!",
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Something went wrog please try again later!",
      err: err,
    });
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const taskId = req.query.taskId;
    const allTasks = await Task.findByIdAndDelete(taskId);

    return res.status(200).json({
      status: true,
      message: "Task deleted!",
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Something went wrog please try again later!",
      err: err,
    });
  }
};
