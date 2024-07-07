import { createContext, useEffect, useState } from "react";
import "./App.css";
import { InputBar } from "./components/InputBar";
import { TodosDisplay } from "./components/TodosDisplay";

export const AppContext = createContext(null);

export default function App() {
  const [todos, setTodos] = useState([]);
  const [currTodo, setCurrTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  return (
    <div>
      <h2>To Do List</h2>
      <div className="container">
        <AppContext.Provider
          value={{
            todos,
            setTodos,
            currTodo,
            setCurrTodo,
            isEditing,
            setIsEditing,
            editIndex,
            setEditIndex,
          }}
        >
          <InputBar />
          <TodosDisplay />
        </AppContext.Provider>
      </div>
    </div>
  );
}
