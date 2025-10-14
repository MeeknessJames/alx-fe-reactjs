import React, { useState } from "react";

export default function TodoList() {
  // Initial demo todos
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Todo App", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  // Add todo
  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    const newItem = { id: Date.now(), text: newTodo.trim(), completed: false };
    setTodos((t) => [...t, newItem]);
    setNewTodo("");
  };

  // Toggle todo
  const toggleTodo = (id) => {
    setTodos((t) =>
      t.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos((t) => t.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={addTodo} aria-label="add-todo-form">
        <input
          aria-label="new-todo-input"
          placeholder="Add new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul aria-label="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            data-testid={`todo-${todo.id}`}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            <span>{todo.text}</span>
            <button
              aria-label={`delete-${todo.id}`}
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
