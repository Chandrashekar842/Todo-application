import React, { useContext, useEffect } from "react";
import "./InputBar.css";
import { AppContext } from "../App";
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

export const TodosDisplay = () => {
  const { todos, setTodos, setCurrTodo, setEditIndex, setIsEditing } = useContext(AppContext);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const deleteTodo = (index) => {
    const todoDelete = todos[index]
    const updatedTodo = todos.filter(todo => todo !== todoDelete)
    setTodos(updatedTodo)
    localStorage.setItem('todos', JSON.stringify(updatedTodo))
  }

  const editTodo = (index) => {
    setIsEditing(true)
    setEditIndex(index)
    setCurrTodo(todos[index])
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <div className="todo">
              {todo}
            </div>
            <div className="action-btns"> 
              <button className="edit-btn" onClick={() => editTodo(index)}><MdEdit size={25} color="blue" /></button>
              <button className="del-btn" onClick={() => deleteTodo(index)}><MdDelete size={25} color="red"/></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
