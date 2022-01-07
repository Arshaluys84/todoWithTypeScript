import { Todo } from "../models/Todo";
import s from "./TodoItem.module.css";

const TodoItem: React.FC<{ todo: Todo; onDelete: (id: string) => void }> = ({
  todo,
  onDelete,
}) => {
  return (
    <li onClick={() => onDelete(todo.id)} className={s.item}>
      {todo.title}
    </li>
  );
};

export default TodoItem;
