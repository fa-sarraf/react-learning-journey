import React from "react";
import { useState, useEffect, useRef } from "react";
export default function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  //state for editing mode
  const [isEditing, setIsEditing] = useState(false);
  //displaying todo text
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef(null);
  // وقتی حالت ویرایش فعال میشه، input به صورت خودکار فوکوس بگیره
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);
  // تابع برای ذخیره تغییرات و خروج از حالت ویرایش
  function handleSave() {
    const trimmed = editText.trim;
    if (trimmed === "") {
      onDelete(todo.id);
    } else if (trimmed !== todo.text) {
      // اگر تغییر کرده، ویرایش انجام بده
      onEdit(todo.id, editText);
    }
    setIsEditing(false);
  }
  // وقتی کلید Enter یا Escape زده شد
  function handleKeyDown(e) {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") {
      setEditText(todo.text);
      setIsEditing(false);
    }
  }
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onAbort={handleKeyDown}
          onBlur={handleSave}
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)} // دابل کلیک برای ورود به حالت ویرایش
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {todo.text}
        </span>
      )}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}
