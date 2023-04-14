import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
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
    {
      id: 4,
      text: 'Learn coding',
      day: 'March 17th at 7:30pm',
      reminder: false,
  },
  {
    id: 5,
    text: 'Go hiking',
    day: 'March 20th at 9:30am',
    reminder: false,
},
]) 

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { ...tasks, newTask }
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'Task List Empty!'}
    </div>
  );
}

export default App;
