import React, { Fragment,useState } from 'react';
import Tasks from './components/tasks'
import './index.css'
type formElement =React.FormEvent<HTMLFormElement>

interface ITask {
  name: string;
  done: boolean;
}

function App():JSX.Element {
  const [newTask,setNewTask]= useState<string>('')
  const [taskList,setList]=useState<ITask[]>([])
  const handleSubmit =(e: formElement)=>{
    e.preventDefault();
    addTask(newTask)
    setNewTask('')
    console.log(taskList);
  }

  const addTask=(task:string)=>{
      const newTaskList:ITask[]=[...taskList,{name:task,done:false}]
      setList(newTaskList)
  }
  return (
    <Fragment >
      
      <form onSubmit={handleSubmit} className="input-container">
          <input className="text-field" type="text" onChange={(e)=>{setNewTask(e.target.value)}} value={newTask}/>
          <div className="button-container">
            <button className="button" type="submit" >Send</button>
          </div>
          
      </form>
      <div className="task-container">
      {
        taskList.map((task:ITask,index:number)=>{
          return(
            <Tasks key={index} name={task.name} status={true}/>
          )
        })
      }
      </div>
      
      
    </Fragment>
  );
}

export default App;
