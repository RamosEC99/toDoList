import React, { Fragment } from 'react';
import Tasks from './components/tasks'
import { useSelector,useDispatch } from 'react-redux';
import {IToDoState} from './redux/reducers/toDoReducer'
import {addToDo,setToDo} from './redux/actions/toDoActions'
import './index.css'
type formElement =React.FormEvent<HTMLFormElement>



function App():JSX.Element {
  const toDoList =useSelector<IToDoState,IToDoState["toDo"]>((store)=>store.toDo)
  const inputToDo =useSelector<IToDoState,IToDoState["inputToDo"]>((store)=>store.inputToDo)
  
  const dispatch = useDispatch();

  const addToDoList =(toDo:string)=>{
    dispatch(addToDo(toDo))
  }
  const setToDoInput=(toDo:string)=>{
    dispatch(setToDo(toDo))
  }
  // const [newTask,setNewTask]= useState<string>('')
  // const [taskList,setList]=useState<ITask[]>([])
  const handleSubmit =(e: formElement)=>{
    e.preventDefault();
    addToDoList(inputToDo)
    setToDoInput('')
  }

  // const addTask=(task:string)=>{
  //     const newTaskList:ITask[]=[...taskList,{name:task,done:false}]
  //     setList(newTaskList)
  // }




  
  return (
    <Fragment >
      
      <form onSubmit={handleSubmit} className="input-container">
          <input className="text-field" type="text" onChange={(e)=>{setToDoInput(e.target.value)}} value={inputToDo}/>
          <div className="button-container">
            <button className="button" type="submit" >Send</button>
          </div>
          
      </form>
      <div className="task-container">
      {
        toDoList.map((task:string,index:number)=>{
          return(
            <Tasks key={index} name={task}/>
          )
        })
      }
      </div>
      
      
    </Fragment>
  );
}

export default App;
