import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buy rice', category: 'Food' },
    { id: 2, text: 'Save a tenner', category: 'Money' },
    { id: 3, text: 'Build a todo app', category: 'Code' },
    { id: 4, text: 'Build todo API', category: 'Code' },
    { id: 5, text: 'Get an ISA', category: 'Money' },
    { id: 6, text: 'Cook rice', category: 'Food' },
    { id: 7, text: 'Tidy house', category: 'Misc' },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Code', 'Food', 'Money', 'Misc'];

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = selectedCategory === 'All'
    ? tasks
    : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <header>
        <h2>My tasks</h2>
      </header>
      <aside>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <NewTaskForm
          categories={categories}
          onTaskFormSubmit={handleAddTask}
        />
      </aside>
      <main>
        <TaskList
          tasks={filteredTasks}
          onDeleteTask={handleDeleteTask}
        />
      </main>
    </div>
  );
}

export default App;