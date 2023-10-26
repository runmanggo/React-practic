import React, { useState } from "react";
import classes from "./ToDoInput.module.css";

const ToDoInput = (props) => {
  const [input, setInPut] = useState("");

  const UploadTodo = (event) => {
    event.preventDefault();
    props.onAddTodo(input);
    setInPut("");
  };

  const AddTodo = (event) => {
    setInPut(event.target.value);
  };

  return (
    <div className={classes.input}>
      <form onSubmit={UploadTodo}>
        <input type="text" onChange={AddTodo} value={input}></input>
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default ToDoInput;
