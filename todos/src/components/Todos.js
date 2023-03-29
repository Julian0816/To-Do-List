// import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Todos.css";

// export default function Todos() {

//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState("")

//   const receiveTodo = () => {
//     setTodos([...todos, text])
//   }

//   const
  
//   return (
//     <div className="Todo-container">
//       <div className="Todo-title">todos</div>
//       <div>
//         <input className="Input"></input>
//       </div>
//       <h3 className="Todos-left">X todos left</h3>
//     </div>
//   );
// }


// import React, { useState } from 'react';
import "./Todos.css";

// function TodoList() {
//   const [todos, setTodos] = useState([]);

//   const handleAddTodo = (e) => {
//     e.preventDefault();
//     const todoText = e.target.elements.todoText.value.trim();
//     if (todoText.length > 0) {
//       setTodos([...todos, { text: todoText, completed: false }]);
//       e.target.reset();
//     }
//   };

//   const handleCompleteTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <div className="Todo-container">
//       <h1 className="Todo-title">Todos</h1>
//       <form onSubmit={handleAddTodo}>
//         <input className="Input" type="text" name="todoText" />
//         <Button type="submit"  variant="info">Add</Button>{' '}
//       </form>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             <span
//               style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
//               onClick={() => handleCompleteTodo(index)}
//             >
//               {todo.text}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;

import React, { useState } from 'react';

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
  );
}

export default TodoList;