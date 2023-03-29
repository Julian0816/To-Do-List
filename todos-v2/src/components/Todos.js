import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todos.css'

const Todos = () => {
    const [toDos, setToDos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const newTodos = () => {
        if (inputValue === '') {
            return
        } else {
        setToDos([...toDos, inputValue.trim()]);
        console.log(toDos)
        }
    }

    const validateInput = () => {
        if (inputValue === "") alert("You cannot save an empty todo");
        else alert("Todo saved");
    };

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            console.log('Enter key pressed');
        }
    }

    return (
        <div className="mainContainer">
            <div>
                <h1 className="header">todos</h1>
            </div>
            <input className="input" type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
            <ul className="u-li">
                {toDos.map((todo, index) => (<li key={index} className="input"><p>{todo === '' ? stop : todo}</p></li>))}
                <div className="todos-left"><p className="todos-left-text">{toDos.length} todos left</p></div>
                <div className="extra-style-1"></div>
                <div className="extra-style-2"></div>
            </ul>
            <Button onClick={newTodos} onClickCapture={validateInput} variant="light">Save todo</Button>
            {/* <button className="saveTodos" onClick={newTodos}>Save</button> */}
        </div>
    )
}

export default Todos;