import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Context as TaskContext } from "../../context/store/TaskStore";
import Task from './Task';

const TaskDetails = ({ title,tasks }) => {
    const [open, setOpen] = useState(true);
    const [taskState] = useContext(TaskContext);

    const taskList = tasks.map((task, i) => {
        return <Task task={task} key={i} />;

    });
    return (
      <div>
          <h3 className="task-section-title">{title}</h3>
        <div>{taskList}</div>
      </div>
    );
  };

export default TaskDetails;