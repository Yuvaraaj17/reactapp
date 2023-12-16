import { useState } from "react"

function App() {
  
  const [taskName,settaskName]=useState("") // state for storing taskname from input field
  const [id,setId]=useState(1) // state of id
  const [tasks,setTasks]=useState([]) // state of list of task
  
  
  const change = (event)=>{ // caputre change in input field 
    settaskName(event.target.value) 
  }

  const addItem=()=>{ // add new task
    var obj={id: id,name: taskName,checked: false}
    tasks.push(obj)
    setTasks(tasks)
    settaskName("")
    setId(id+1)
  }
  
 const update=(id)=>{ // update state of task
  const newlist=tasks.map(
    (task)=>
      task.id===id ? {...task,checked:!task.checked} : task)
  setTasks(newlist)
 }

 const remove=()=>{ // remove finished/checked tasks
  const newtasks=tasks.filter((task)=>task.checked==false);
  setTasks(newtasks)
  console.log(newtasks)
 }

  return(
    <div>
      <p>Simple To do List</p>
      <input type="text" value={taskName} onChange={(event) =>change(event)}/>
      <div>
        <button onClick={addItem}>Add</button>
        <button onClick={remove}>Remove</button>
      </div>
      <ul>
      {tasks.map((task)=>(
        <li key={task.id}>
          {task.name}
          <input type="checkbox" checked={task.checked} onChange={()=>{update(task.id)}}/>
        </li>
      ))}  
      </ul>
    </div>
  )
}
export default App;