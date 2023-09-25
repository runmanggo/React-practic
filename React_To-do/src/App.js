import "./App.css";
import React, { useState } from "react";
import ToDoInput from "./components/ToDoInput";
import TodoList from "./components/TodoList";

function App() {
  const [list, setList] = useState([]);

  const changeList = (todo) => {
    setList((prevList) => {
      return [{ content: todo, id: Math.random().toString }, ...prevList];
    });
  };

  const RemoveTodo = (itemId) => {
    setList((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h3>오늘은 무엇을 해야할까?</h3>
      <ToDoInput onAddTodo={changeList} />
      <TodoList list={list} onDelete={RemoveTodo} />
    </div>
  );
}

export default App;
