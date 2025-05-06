import { useState, useEffect } from "react";
import { Todo, FilterType } from "../types/tasks";

export const useTodos = () => {
  const getSavedTodos = (): Todo[] => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos).map((todo: Todo) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
          deleted: todo.deleted || false,
        }));
      } catch (e) {
        console.error("Failed to parse todos from localStorage", e);
        return [];
      }
    }
    return [];
  };

  const [todos, setTodos] = useState<Todo[]>(getSavedTodos());
  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string, assignedTo: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      deleted: false,
      createdAt: new Date(),
      assignedTo: assignedTo.trim(),
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, deleted: true } : todo))
    );
  };

  const restoreTodo = (id: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, deleted: false } : todo))
    );
  };

  const permanentlyDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed && !todo.deleted;
    if (filter === "completed") return todo.completed && !todo.deleted;
    if (filter === "deleted") return todo.deleted;
    return !todo.deleted;
  });

  const completedCount = todos.filter(
    (todo) => todo.completed && !todo.deleted
  ).length;
  const activeCount = todos.filter(
    (todo) => !todo.completed && !todo.deleted
  ).length;
  const deletedCount = todos.filter((todo) => todo.deleted).length;
  const totalCount = activeCount + completedCount;

  return {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    restoreTodo,
    permanentlyDeleteTodo,
    filteredTodos,
    counts: {
      completed: completedCount,
      active: activeCount,
      deleted: deletedCount,
      total: totalCount,
    },
  };
};
