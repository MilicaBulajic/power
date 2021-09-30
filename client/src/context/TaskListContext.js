import React, {createContext, useState} from "react";
import uuid from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
    const [tasks, setTasks] = useState([
        {title: 'clean house', id: 1},
        {title: 'wash dishes', id: 2}
    ]);

    const addTask = title => {
        setTasks([...tasks, { title, id: uuid() }])
      }

    const removeTask = title => {
        setTasks([...tasks, { title, id: uuid() }])
      }
      
    return (
        <TaskListContext.Provider value={{ tasks, addTask }}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;