import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Do stuff 1",
      day: "15",
      reminder: false,
    },
    { id: 2, text: "Do stuff 2", day: "12", reminder: true },
    { id: 3, text: "Do stuff 3", day: "13", reminder: true },
  ]);

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000);
    setTasks([...tasks, { id, ...task }]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <header className='container'>
      <Header tittle='Task Tracker' />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggleReminder={toggleReminder}
        />
      ) : (
        "Free time"
      )}
    </header>
  );
}

export default App;
