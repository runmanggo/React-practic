import React from "react";
import classes from "./TodoList.module.css";

function TodoList(props) {
  const onDelete = props.onDelete;
  return (
    <div className={classes.list}>
      <ul>
        {props.list.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button type="button" onClick={() => onDelete(todo.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
