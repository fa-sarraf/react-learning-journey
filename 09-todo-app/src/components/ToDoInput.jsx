import React, { useState } from "react";
export default function ToDoInput({ onAddToDo }) {
  const [text, setText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onAddToDo(text);
    setText("");
  }
  return (
    <div className="todo-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new task here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
