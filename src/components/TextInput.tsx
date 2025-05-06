import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { TodoFormInputs } from "../types/tasks";

interface TextInputProps {
  id: keyof TodoFormInputs;
  label: string;
  placeholder: string;
  register: UseFormRegister<TodoFormInputs>;
  error?: FieldError;
  validation?: Record<string, unknown>;
}

export const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  placeholder,
  register,
  error,
  validation,
}) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register(id, validation)}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};
