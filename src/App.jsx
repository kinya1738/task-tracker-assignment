import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (taskText) => {
    if (!taskText.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    if (editingTask?.id === id) setEditingTask(null);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ));
  };

  const saveEditedTask = (text) => {
    if (!text.trim()) return;
    setTasks(tasks.map(task => 
      task.id === editingTask.id ? {...task, text} : task
    ));
    setEditingTask(null);
  };

  return (
    <div className="app">
      <h1>TaskTracker</h1>
      <TaskForm 
        onAdd={addTask} 
        onSaveEdit={saveEditedTask}
        editingTask={editingTask}
        onCancelEdit={() => setEditingTask(null)}
      />
      <TaskList 
        tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleComplete}
        onEdit={setEditingTask}
      />
    </div>
  );
}

export default App;