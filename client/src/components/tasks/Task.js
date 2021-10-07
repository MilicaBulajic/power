import React, { useContext, useState } from 'react';

const Task = ({ task }) => {
    const date = moment(
        task.createdAt.substring(0, 10).replace("-", ""),
        "DDMMYYYY"
        );
        const [open, setOpen] = useState(true);
        const openModal = () => {
            setOpen(true);
        };
          return (
            <div>
              <li className="task-home-item" onClick={openModal}>
                <div>
                  <p>{task.name}</p>
                </div>
            </div>
          );
        };
        
        export default Task;