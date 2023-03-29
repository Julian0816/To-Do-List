import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from 'react';
import "./Todos.css";


function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const todoText = e.target.elements.todoText.value.trim();
    if (todoText.length > 0) {
      setTodos([...todos, { text: todoText, completed: false }]);
      e.target.reset();
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="Todo-container">
      <h1 className="Todo-title">todos</h1>
      <div className="Todo-sub-container">
      <form onSubmit={handleAddTodo}>
        <input className="Input" type="text" name="todoText" />
        <Button type="submit" variant="info">add</Button>
      </form>
      <ul className="ul-list">
        {todos.map((todo, index) => (
          <li className="li" key={index}>
            <span>
              {todo.text}
            </span>
            <Button variant="light" onClick={() => handleDeleteTodo(index)}>X</Button>{' '}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default TodoList;

