const express = require("express");
const { asyncHandler } = require("./utilities/utils");
const { requireAuth } = require("./utilities/auth");
const { check, validationResult } = require("express-validator");
const { TaskList, Task } = require("../db/models");
const router = express.Router();


router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const tasklists = await TaskList.findAll({});

    res.json(tasklists);
  })
);


router.get(
  "/:id/tasks",
  asyncHandler(async (req, res, next) => {
    const tasklist_id = req.params.id;
    const tasks = await Task.findAll({
      where: {
        tasklist_id: tasklist_id,
      },
    });
    res.json(tasks);
  })
);


router.post(
  "/:id/task",
  asyncHandler(async (req, res, next) => {
    const tasklist_id = req.params.id;
    const {
      description,
      due_date,
      completed,
      project_id,
      user_id,
    } = req.body;
    const task = await Task.create({
      user_id,
      description,
      due_date,
      completed,
      project_id,
    });
    if (!task) {
      res.status(404);
    } else {
      res.status(201);
    }
  })
);


router.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const tasklist_id = req.params.id;

    const tasklist = await TaskList.delete({
      where: { id: tasklist_id },
    });
    res.json(202);
  })
);

module.exports = router;
