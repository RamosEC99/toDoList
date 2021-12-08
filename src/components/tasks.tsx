import React from 'react';
import '../styles/task.css'
interface ITask {
    name: string;
    status: boolean;
}
function Tasks({ name,status }: ITask): JSX.Element {
    return (
        <div className="task-object">
            <h2 className="task-title">{name}</h2>
            <p className="status-text">Status: {status?'hola':'adios'}</p>
        </div>

    );
}


export default Tasks;
