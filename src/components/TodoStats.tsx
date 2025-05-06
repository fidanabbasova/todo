import React from "react";

interface TodoStatsProps {
  total: number;
  completed: number;
  deleted: number;
}

export const TodoStats: React.FC<TodoStatsProps> = ({
  total,
  completed,
  deleted,
}) => {
  return (
    <div className="flex justify-between text-sm text-gray-600 mb-4">
      <span>Total tasks: {total}</span>
      <span>Completed: {completed}</span>
      <span>Deleted: {deleted}</span>
    </div>
  );
};
