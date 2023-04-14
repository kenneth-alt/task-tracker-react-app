import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Morning Meeting',
        day: 'March 5th at 8:30am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Interview Prep',
        day: 'March 11th at 7:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Market Run',
        day: 'March 15th at 11:30am',
        reminder: false,
    },
]) 

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'Task List Empty!'}
    </div>
  );
}

export default App;
