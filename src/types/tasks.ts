export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  deleted: boolean;
  createdAt: Date;
  assignedTo: string;
}

export interface TodoFormInputs {
  text: string;
  assignedTo: string;
}

export type FilterType = "all" | "active" | "completed" | "deleted";
