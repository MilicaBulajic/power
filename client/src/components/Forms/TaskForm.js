import React, { useEffect, useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import { Modal } from "@material-ui/core";
import { useForm } from "react-hook-form";
import apiServer from "../../service/apiServer";
import TextField from '@material-ui/core/TextField';
import { Context as ProjectContext } from "../../context/store/ProjectStore";
import { Context as TasklistContext } from "../../context/store/TasklistStore";

const TaskForm = ({ clickClose, open }) => {
  const { register, handleSubmit, errors, clearErrors } = useForm();
  const [projects, setProjects] = useState();
  const [taskListError, setTaskListError] = useState();
  const [projectError, setProjectError] = useState();
  const [assigneeError, setAssigneeError] = useState();
  const [projectState, projectdispatch] = useContext(ProjectContext);
  const [tasklistState, tasklistdispatch] = useContext(TasklistContext);
  const [reload, setReload] = useState();
  const [projectUsers, setProjectUsers] = useState([
    {
      id: "0",
      name: "Choose a Project First",
    },
  ]);
  const [projectTaskLists, setProjectTaskLists] = useState([
    {
      id: "0",
      name: "Choose a Project First",
    },
  ]);

  const [loading, setLoading] = useState(true);


  const getProjectUsers = async (event) => {
    const res = await apiServer.get(`/project/users`);
    setProjectUsers(res.data);
    getProjectTasklists();
  };

  const getProjectTasklists = async (event) => {
    const select = document.getElementById("project-select");
    const res = await apiServer.get(`/project/${select.value}/tasklists`);
    setProjectTaskLists(res.data);
  };

  // useEffect(() => {
  //   getUserProjects();
  // }, []);
  //Probably need dispatch here to update the task page when task is created.
  const onSubmit = async ({
    name,
    projectId,
    assigneeId,
    due_date,
    tasklistId,
    completed,
    description,
  }) => {
    await apiServer.post(`/tasklist/${tasklistId}/task`, {
      name,
      projectId,
      assigneeId,
      due_date,
      completed,
      description,
    });

    // const res = await apiServer.get(`/project/${projectId}/tasklists`);
    const res = await apiServer.get(
      `/project/user/${localStorage.getItem("userId")}`
    );
    await projectdispatch({ type: "get_user_projects", payload: res.data });

    // console.log(name, "name");
    // var projectId = document.getElementById("project-select");
    // console.log(projectId, "projectId");
    // var assigneeId = document.getElementById("assignee-select");
    // console.log(assigneeId, "assigneeId");
    // console.log(due_date, "due_date");
    // console.log(tasklistId, "tasklistId");
    // console.log(completed, "completed");
    // console.log(description, "description");
    window.location.reload();

    clickClose();
  };

  // if (loading) {
  //   return <Loader />;
  // }

  const renderedProjects = projectState.projects.map((project, i) => {
    return (
      <option key={i} id={project.id} value={project.id}>
        {project.name}
      </option>
    );
  });

  const renderedUsers = projectUsers.map((user, i) => {
    return (
      <option key={i} value={user.id}>
        {user.name}
      </option>
    );
  });

  const renderedTasklists = projectTaskLists.map((tasklist, i) => {
    return (
      <option key={i} value={tasklist.id}>
        {tasklist.name}
      </option>
    );
  });

  return (
    <div>
      <Modal open={open} onClose={clickClose}>
        <div>
          <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="form-header">Add a Task</h2>
            <div className="form-top-container">
              <div className="form-top-left">
                <TextField>
                  Subject
                  <input
                    name="name"
                    type="text"
                    placeholder={"Task Name"}
                    className="form-input"
                    ref={register({ required: true })}
                  ></input>
                  {errors.name?.type === "required" && (
                    <p className="error-message">Please enter a task name</p>
                  )}
                </TextField>
                <div>
                  <TextField
                    name="description"
                    type="text"
                    placeholder={"Task Description"}
                    className="edit-task-description textarea"
                    ref={register}
                  ></TextField>
               </div>
                <label className="form-label">
                  Project
                  <select
                    id="project-select"
                    name="projectId"
                    className="form-input"
                    onChange={getProjectUsers}
                    ref={register({ required: true })}
                  >
                    <option value={0}>{"<---Choose Project--->"}</option>
                    {renderedProjects}
                  </select>
                  <p className="error-message">{projectError}</p>
                  {errors.projectId?.type === "required" && (
                    <p className="error-message">Please choose a project</p>
                  )}
                </label>
              </div>
              <div className="form-top-middle">
                <label className="form-label">
                  Assignee
                  <select
                    id="assignee-select"
                    name="assigneeId"
                    className="form-input"
                    ref={register({ required: true })}
                  >
                    {renderedUsers}
                  </select>
                  <p className="error-message">{assigneeError}</p>
                  {errors.assigneeId?.type === "required" && (
                    <p className="error-message">Please choose an assignee</p>
                  )}
                </label>
                <label className="form-label">
                  Due date
                  <input
                    className="form-input"
                    type="date"
                    name="due_date"
                    ref={register({ required: true })}
                  ></input>
                  {errors.due_date?.type === "required" && (
                    <p className="error-message">Please choose a due_date</p>
                  )}
                </label>
              </div>
              <div className="form-top-right">
                <label className="form-label" style={{ paddingBottom: "10px" }}>
                  Tasklist
                  <select
                    id="tasklist-select"
                    name="tasklistId"
                    className="form-input"
                    ref={register({
                      required: true,
                    })}
                  >
                    {/* <option value={0}>Choose a project first</option> */}
                    {renderedTasklists}
                  </select>
                  {/* <p className="error-message">{taskListError}</p> */}
                  {errors.tasklistId?.type === "required" && (
                    <p className="error-message">
                      Please choose a tasklist. You may need to make a tasklist
                      first before adding a task.
                    </p>
                  )}
                </label>
                <label
                  className="form-label"
                  style={{ padding: "10px 5px 10px 0px" }}
                >
                  Mark Complete
                  <input
                    style={{ margin: "10px 0" }}
                    type="checkbox"
                    name="completed"
                    ref={register}
                  ></input>
                </label>
              </div>
            </div>


            <div style={{ display: "flex", marginLeft: "500px" }}>
              <Button
                style={{ color: "#0093ff" }}
                onClick={clickClose}
                color="primary"
              >
                Cancel
              </Button>
              <Button
                style={{ color: "#0093ff" }}
                type="submit"
                color="primary"
              >
                Add
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default TaskForm;
