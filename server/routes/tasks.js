const express = require("express");
const { asyncHandler } = require("./utilities/utils");
const { requireAuth } = require("./utilities/auth");
const { check, validationResult } = require("express-validator");
const { Task, Comment } = require("../db/models");
const router = express.Router();


router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const tasks = await Task.findAll({});

    res.json(tasks);
  })
);


router.get(
  "/user/:id",
  asyncHandler(async (req, res, next) => {
    const user_id = req.params.id;
    const tasks = await Task.findAll({
      where: {
        assignee_id: user_id,
      },
    });
    res.json(tasks);
  })
);


router.post(
  "/:id/comment",
  asyncHandler(async (req, res, next) => {
    const task_id = req.params.id;
    const { text, user_id } = req.body;
    const comment = await Comment.create({
      text: text,
      task_id: task_id,
      user_id: user_id,
    });
    if (!comment) {
      res.status(404);
    } else {
      res.status(201);
    }
  })
);


router.get(
  "/:id/comment",
  asyncHandler(async (req, res, next) => {
    const task_id = req.params.id;
    const comments = await Comment.findAll({
      where: {
        task_id: task_id,
      },
    });
  })
);


router.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const task_id = req.params.id;

    const task = await Task.delete({
      where: { id: task_id },
    });
    res.json(202);
  })
);

module.exports = router;
