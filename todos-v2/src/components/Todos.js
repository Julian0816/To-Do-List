import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todos.css'

const Todos = () => {
    const [toDos, setToDos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const newTodos = () => {
        if (inputValue === '') {
            return
        } else {
            setToDos([...toDos, inputValue.trim()]);
            console.log(toDos)
        }
    }

    const validateInput = () => {
        if (inputValue === "") alert("No tasks, add a task");
    };

    const deleteTodo = (index) => {
        const newTodos = [...toDos];
        newTodos.splice(index, 1);
        setToDos(newTodos);
      };
    

    return (
        <div className="mainContainer">
            <div>
                <h1 className="header">todos</h1>
            </div>
            <input className="input" type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
            <ul className="u-li">
                {toDos.map((todo, index) => (<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}><li key={index} className="input"><p>{todo}{isHovered && <Button onClick={deleteTodo} variant="light">x</Button>}</p></li></div>))}
                <div className="todos-left"><p className="todos-left-text">{toDos.length} items left</p></div>
                <div className="extra-style-1"></div>
                <div className="extra-style-2"></div>
            </ul>
            <Button onClick={newTodos} onClickCapture={validateInput} variant="light">Save</Button> 
        </div>
    )
}

export default Todos;