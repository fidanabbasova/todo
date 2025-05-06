import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TodoFormInputs } from "../types/tasks";
import { TextInput } from "./TextInput";

interface TodoFormProps {
  onSubmit: (data: TodoFormInputs) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormInputs>({
    defaultValues: {
      text: "",
      assignedTo: "",
    },
  });

  const submitHandler: SubmitHandler<TodoFormInputs> = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="mb-4">
      <TextInput
        id="text"
        label="Task Description"
        placeholder="Enter task description..."
        register={register}
        error={errors.text}
        validation={{
          required: "Task cannot be empty",
          maxLength: {
            value: 50,
            message: "Task must be less than 50 characters",
          },
        }}
      />

      <TextInput
        id="assignedTo"
        label="Assigned To"
        placeholder="Assigned To"
        register={register}
        error={errors.assignedTo}
        validation={{
          required: "User cannot be empty",
          validate: (value: string) => {
            const nameParts = value.trim().split(/\s+/);
            return nameParts.length >= 2 || "Please enter first and last name";
          },
        }}
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Add Task
      </button>
    </form>
  );
};
