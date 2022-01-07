import React from "react";
import { Todo } from "../models/Todo";
import TodoItem from "./TodoItem";
import s from "./Todos.module.css";

const Todos: React.FC<{ todos: Todo[]; onDelete: (id: string) => void }> = ({
  todos,
  onDelete,
}) => {
  return (
    <ul className={s.todos}>
      {todos.map((item) => (
        //   <li key={item.id}>{item.title}</li>
        <TodoItem key={item.id} todo={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default Todos;
