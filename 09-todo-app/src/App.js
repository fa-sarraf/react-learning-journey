import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import FilterButtons from "./components/Filters";
function App() {
  const [toDos, setToDos] = useState([]);
  const [filter, setFilter] = useState("all"); //filters: all/active/completed
  // adding new task
  function AddToDo(text) {
    if (!text.trim) return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setToDos((prev) => [...prev, newTodo]);
  }
  //Delete Task
  function deleteTodo(id) {
    setToDos((prev) => prev.filter((todo) => todo.id != id));
  }

  //Toggle task
  function toggleTodo(id) {
    setToDos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  //Edit Task
  function handleEdit(id, newText) {
    setToDos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  }
  //filter tasks
  const filteredTodos = toDos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });
  return (
    <div className="App">
      <Header />
      <ToDoInput onAddToDo={AddToDo} />
      <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
      <ToDoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
