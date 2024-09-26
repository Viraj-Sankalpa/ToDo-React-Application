import { useState } from "react";

const ToDoList = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask,setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() !== ''){
            setTasks([...tasks,{task:newTask, completed:false}]);
            setNewTask("");
        }
    };

    const removeTask = (task) => {
        setTasks(tasks.filter(t => t !== task));
    };

    return (
        
        <div className="todo-list">
            <input className="todoList-input" type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} />
            <button className="todo-add" onClick={addTask}>ADD</button>
            
            
        

        <ul>
            {tasks.map((tasks,index)=>(
                <li key={index}>
                    <div className="todo-item">
                        
                    <div className="todo-text">{tasks.task}</div>
                    <button className="todo-remove" onClick={()=>removeTask(tasks)}>REMOVE</button>
                    </div>
                </li>
            ))}
        </ul>


        </div>
     );
}
 
export default ToDoList;