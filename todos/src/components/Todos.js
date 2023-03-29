import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Todos.css";

export default function Todos() {
  return (
    <div className="Todo-container">
      <div className="Todo-title">todos</div>
      <div>
        <input className="Input"></input>
        <Button variant="info">x</Button>{" "}
      </div>
      <h3 className="Todos-left">X todos left</h3>
    </div>
  );
}
