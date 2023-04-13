import { useEffect, useState } from "react";
import axios from "../axios";

function Tasks({userId}) {
    console.log(userId)
   const [task,setTask] = useState('');
   const [tasks,setTasks ] = useState([])
   useEffect(()=>{
        const getData=async()=>{
            const response = await axios.get('/tasks');
            const data =response.data.data
            const usertasks = data.filter((el)=>{
                console.log(el,userId)
                return el.createUserId == userId

            })
            console.log(usertasks)
            setTasks([...usertasks])
        }   
        getData()
   },[]) 


    const addTask = async()=>{
        try{
            const response = await axios.post("/tasks",{
                task
            });
            const data =response.data.data
            console.log(response)
        setTasks([...tasks, data])

        }catch(err){
            console.log(err)
        }
   
    }
    return (  
        <div>
            <input type="text" onChange={(e)=>{setTask(e.target.value)}}/>
            <button onClick={addTask}>add</button>
            <div>
                {tasks.map(el=>(
                    <p>{el.task}</p>
                ))
                }

            </div>
        </div>
    );
}

export default Tasks
