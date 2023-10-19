import React, { createContext, useState } from 'react';

interface Context {
  readonly toDoList: string[];
  readonly onAdd: (toDo: string) => void;
  readonly onDelete: (toDo: string) => void;
}

const ToDoListContext = createContext<Context>({
  toDoList: [],
  onAdd: () => {},
  onDelete: () => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ToDoListContextProvider = ({ children }: Props) => {
  const [toDoList, setToDoList] = useState(['할 일 1', '할 일 2', '할 일 3']);

  const handleDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  const handleAddToDo = (todo: string) => {
    setToDoList((prevState) => [...prevState, todo]);
  };

  return (
    // context 를 제공하고 할일 목록 및 함수들을 값을 설정
    <ToDoListContext.Provider value={{ toDoList, onAdd: handleAddToDo, onDelete: handleDelete }}>
      {children}
    </ToDoListContext.Provider>
  );
};

export default ToDoListContextProvider;
