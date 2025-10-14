import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByLabelText("new-todo-input");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Write Tests" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("toggles a todo item (line-through)", () => {
    render(<TodoList />);
    const todoText = screen.getByText("Learn React");
    const todoItem = todoText.closest("li"); 
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle({ textDecoration: "line-through" });
  });


  test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    const li = todo.closest("li");
    const deleteButton = li.querySelector("button[aria-label^='delete-']");
    fireEvent.click(deleteButton);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
