import React from "react";
import { FilterType } from "../types/tasks";

interface EmptyStateProps {
  filter: FilterType;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ filter }) => {
  const getMessage = () => {
    switch (filter) {
      case "all":
        return "No tasks yet. Add one above!";
      case "active":
        return "No active tasks.";
      case "completed":
        return "No completed tasks.";
      case "deleted":
        return "No deleted tasks.";
      default:
        return "No tasks found.";
    }
  };

  return <li className="text-center py-4 text-gray-500">{getMessage()}</li>;
};
