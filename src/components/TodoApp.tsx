import React from "react";
import { TodoFormInputs } from "../types/tasks";
import { useTodos } from "../hooks/useTodos";
import { TodoForm } from "./TodoForm";
import { TodoStats } from "./TodoStats";
import { FilterButtons } from "./FilterButtons";
import { TodoItem } from "./TodoItem";
import { EmptyState } from "./EmptyState";

const TodoApp: React.FC = () => {
  const {
    filteredTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    restoreTodo,
    permanentlyDeleteTodo,
    counts,
  } = useTodos();

  const handleSubmit = (data: TodoFormInputs) => {
    addTodo(data.text, data.assignedTo);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Todo App</h1>

      <TodoForm onSubmit={handleSubmit} />

      <TodoStats
        total={counts.total}
        completed={counts.completed}
        deleted={counts.deleted}
      />

      <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

      <ul className="space-y-2">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onRestore={restoreTodo}
              onPermanentDelete={permanentlyDeleteTodo}
            />
          ))
        ) : (
          <EmptyState filter={filter} />
        )}
      </ul>
    </div>
  );
};

export default TodoApp;
