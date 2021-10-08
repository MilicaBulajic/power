import React, { useContext, useState } from 'react';
import moment from "moment";

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
                <div>
                  <p>{task.name}</p>
                </div>
            </div>
          );
        };
        
        export default Task;