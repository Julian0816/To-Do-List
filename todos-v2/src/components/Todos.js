import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todos.css'

const Todos = () => {

    const [inputValue, setInputValue ] = useState('');
    
    const validateInput = () => {
      if(inputValue === "") alert("You cannot save an empty todo");
      else alert("Todo saved");
    };

    return (
        <div className="mainContainer">
            <div>
                <h1 className="header">todos</h1>
            </div>        
            <ul className="u-li">
                {<li><input className="input" type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} /></li>}
            <div className="todos-left"><p className="todos-left-text">X todos left</p></div>
            <div className="extra-style-1"></div>
            <div className="extra-style-2"></div>
            </ul>
            <Button onClick={validateInput} variant="light">Save todo</Button>
        </div>
    )
}

export default Todos;