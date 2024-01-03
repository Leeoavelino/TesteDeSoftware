import { useState } from "react"
import axios from "axios"

interface Task {
    id:string
    title: string
}

const Tasks = () => {

    const [tasks, setTasks] = useState<Task[]>([])

    const handleClick = async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')

        setTasks(data)

    }

    return(

        <div>

        <h1>
            Tasks from API
        </h1>

        <button disabled={false} onClick={handleClick}>Get Tasks from API</button>

        {tasks.map(task => <p key={task.id}>{task.title}</p>)}




        </div>

    )

}

export default Tasks