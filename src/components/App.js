import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS); 
  const [categoryFilter, setCategoryFilter] = useState("All");

  const handleCategorySelect = (category) => {
    setCategoryFilter(category);
  };

  const handleAddTask = (newTask) => {
    
    const updatedTasks = [...tasks, { id: tasks.length + 1, ...newTask }];
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
   
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

 
  const filteredTasks = categoryFilter === "All" ? tasks : tasks.filter((task) => task.category === categoryFilter);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={[...CATEGORIES, "All"]} 
        selectedCategory={categoryFilter}
        onSelectCategory={handleCategorySelect}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleAddTask}/>
      <TaskList
        tasks={filteredTasks} 
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;