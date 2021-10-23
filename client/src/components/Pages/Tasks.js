import React, { useContext, useEffect, useState } from 'react';
import { Context as TaskContext } from "../../context/store/TaskStore";
import TaskDetails from "../tasks/TaskDetails";
import moment from "moment";
import apiServer from "../../service/apiServer";
import TaskForm from '../Forms/TaskForm'

const Tasks = () => {
  const [taskState, taskdispatch] = useContext(TaskContext);
  const [tasks, setTasks] = useState();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const getUserTasks = async () => {
    const id = localStorage.getItem("userId");
    const res = await apiServer.get(`/task/user/${id}`);
    await taskdispatch({ type: "get_user_tasks", payload: res.data });

    setLoading(false);
  };
  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    getUserTasks();
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  const modalBody = (
    <div className="modal-container">
      <TaskForm clickClose={closeModal} open={open}></TaskForm>
    </div>
  );

  const recentlyAdded = tasks.filter((task) => {
    const date = new Date(task.createdAt);
    const createdDate = moment(date);
    const todaysDate = moment(new Date());
    const previousDate = moment(new Date()).subtract(1, "week");
    return createdDate.isBetween(previousDate, todaysDate); //created date is between previous week and today
  });


  return (
    <>
      <div className="tasks-container">
        <div className="tasks-inner-container">
          <div className="tasks-container-header">
            <button className="add-task-button">Add Task</button>
          </div>
          <TaskDetails title={"Recently Added"} tasks={recentlyAdded} />
        </div>
      </div>
    </>
  );
};

export default Tasks;