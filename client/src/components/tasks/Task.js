import React from 'react';

const Task = ({task}) => {
    return (
        <li>
            <span>{task.title}</span>
        </li>
    );
};

export default Task;