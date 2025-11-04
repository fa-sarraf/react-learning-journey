import React from "react";
//import ToDoItem from "./components/ToDoItem.jsx";
import TodoItem from "./TodoItem.jsx";

export default function ToDoList({ todos, onToggle, onDelete, onEdit }) {
  if (todos.length === 0) return <p>No tasks yet!</p>;
  return (
    <div className="container">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
}
