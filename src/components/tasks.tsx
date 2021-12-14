import React from 'react';
import '../styles/task.css'
interface ITask {
    name: string;
}
function Tasks({ name }: ITask): JSX.Element {
    return (
        <div className="task-object">
            <h2 className="task-title">{name}</h2>
        </div>

    );
}


export default Tasks;
