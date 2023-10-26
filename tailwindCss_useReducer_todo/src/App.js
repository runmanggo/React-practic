import { Fragment, useReducer, useState } from "react";
import "./App.css";

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...todos,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "DEL":
      return todos.filter((todo) => todo.id !== action.payload);
    case "EDIT":
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    default:
      return todos;
  }
};

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = useState("");
  const [isEdit, setIsEdit] = useState(null);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch({ type: "EDIT", payload: { id: isEdit.id, text: newTodo } });
      setIsEdit(null);
    } else {
      dispatch({ type: "ADD", payload: newTodo });
    }
    setNewTodo("");
  };

  const handleDel = (id) => {
    dispatch({ type: "DEL", payload: id });
  };

  const handleEdit = (item) => {
    setNewTodo(item.text);
    setIsEdit(item);
  };

  return (
    <Fragment>
      <form onSubmit={handleAddTodo} className="max-w-lg w-full mt-10 mx-auto">
        <div className="flex items-center gap-4">
          <input
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
            value={newTodo}
            className="py-3 px-5 w-full rounded-md text-black outline "
            type="text"
            placeholder="Enter your todo..."
          />
          <span
            onClick={handleAddTodo}
            className="py-3 px-5 cursor-pointer bg-blue-500 font-semibold rounded-md"
          >
            {isEdit ? "Save" : "Add"}
          </span>
        </div>

        <ul className="flex flex-col gap-4 mt-5 ">
          {todos.length <= 0 && (
            <div className="text-red-200 font-medium text-xl text-center">
              There is no Todos here!
            </div>
          )}
          {todos.map((item) => {
            return (
              <li
                key={item.id}
                className="flex items-center p-3 rounded-md transition-all hover:bg-slate-500 hover:bg-opacity-50 justify-between"
              >
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>{item.text}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    onClick={() => {
                      handleEdit(item);
                    }}
                    className="w-7 h-7 cursor-pointer flex items-center justify-center bg-red-200 rounded-full text-black"
                  >
                    🖋️
                  </span>
                  <span
                    onClick={() => handleDel(item.id)}
                    className="w-7 h-7 cursor-point cursor-pointer flex items-center justify-center bg-blue-200 rounded-full text-black"
                  >
                    X
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </form>
    </Fragment>
  );
}

export default App;
