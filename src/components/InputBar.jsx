import React, { useContext, useState } from "react";
import "./InputBar.css";
import { MdCheck } from "react-icons/md";
import { AppContext } from "../App";
import { FaMoon, FaSun } from 'react-icons/fa';

export const InputBar = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const buttonStyle = {
    background: 'white',
    border: 'none',
    borderRadius: '7px',
    cursor: 'pointer',
    fontSize: '24px',
    padding: '10px',
    marginLeft: '5px' 
  };

  const {
    todos,
    setTodos,
    currTodo,
    setCurrTodo,
    isEditing,
    setIsEditing,
    editIndex,
    setEditIndex,
  } = useContext(AppContext);

  const handleChange = (e) => {
    setCurrTodo(e.target.value);
  };

  const handleClick = () => {
    const newTodos = [...todos];
    if (currTodo === "") {
      alert("Enter the task!!");
    } else {
      if(isEditing) {
        const updatedTodos = todos.map((todo, index) =>
          index === editIndex ? currTodo : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setIsEditing(false);
        setEditIndex(null);
        setCurrTodo("");
      } else {
        newTodos.push(currTodo);
        setTodos(newTodos);
        setCurrTodo("");
        localStorage.setItem("todos", JSON.stringify(newTodos));
      }
    }
  };

  return (
    <div className="input-bar">
      <input
        className="input-box"
        type="text"
        placeholder="Enter the task"
        onChange={handleChange}
        value={currTodo}
      />
      <button className="btn" onClick={handleClick}>
        <MdCheck style={{ color: "green", fontSize: "28px" }} />
      </button>
      <button onClick={toggleTheme} style={buttonStyle}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};
