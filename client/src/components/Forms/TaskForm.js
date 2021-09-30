import React, { useContext, useState } from "react";
import { TaskListContext } from "../../context/TaskListContext";
import TextField from "@material-ui/core/TextField";

const TaskForm = () => {
  const { addTask } = useContext(TaskListContext);
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Add Task..."
          value={title}
          onChange={handleChange}
          required
          className="task-input"
        />
        <button className="button" type="submit">
          Add task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
