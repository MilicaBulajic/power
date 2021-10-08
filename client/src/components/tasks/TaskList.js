import React, {useContext, useState} from 'react';
import {TaskListContext} from '../../context/TaskListContext';
import TaskProject from './TaskProject'

const TaskList = ({ tasklist }) => {
    const [tasks, setTasks] = useState();
    const [loading, setLoading] = use(true);

    const getTasks = async () => {
        try {
            const res = await apiServer.get(`/tasklist/${tasklist.id}/tasks`);
            setTasks(res.data);
            setLoading(false);
          } catch (err) {
            console.log(err);
         }
    };

    useEffect(() => {
        getTasks();
      }, []);

      if (loading) {
          return <Loader />
      }

      const renderedList = tasks.map((task) => {
        return <TaskProject task={task} key={task.id} />
      });
    return (
        <div>
            {renderedList}
        </div>
    )
};

export default TaskList;