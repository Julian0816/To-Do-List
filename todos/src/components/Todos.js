import React from "react";

export default function Todos() {
  return (
    <div
      style={{
        backgroundColor: "#f1f0de",
        width: "35rem",
        height: "35rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <div style={{ fontSize: "80px", paddingBottom: '30px', color: 'black' }}>todos</div>

      <div
        style={{
          backgroundColor: "#e8e8e7",
          width: "25rem",
          height: "3rem",
          border: "solid 1px white",
        }}
      >
        Todo 1
      </div>
      <div
        style={{
          backgroundColor: "#e8e8e7",
          width: "25rem",
          height: "3rem",
          border: "solid 1px white",
        }}
      >
        Todo 2
      </div>
      <div
        style={{
          backgroundColor: "#e8e8e7",
          width: "25rem",
          height: "3rem",
          border: "solid 1px white",
        }}
      >
        Todo 3
      </div>
      <div
        style={{
          backgroundColor: "#e8e8e7",
          width: "25rem",
          height: "3rem",
          border: "solid 1px white",
        }}
      >
        Todo 4
      </div>
      <div
        style={{
          backgroundColor: "#e8e8e7",
          width: "25rem",
          height: "3rem",
          border: "solid 1px white",
        }}
      >
        Todo 5
      </div>
      <div
        style={{
          backgroundColor: "#e8e8e7",
          width: "25rem",
          height: "3rem",
          border: "solid 1px white",
        }}
      >
        Todo 6
      </div>
      <div
        style={{
          backgroundColor: "#e8e8e7",
          width: "25rem",
          height: "2rem",
          border: "solid 1px white",
          textAlign: 'start',
          fontSize: '20px',
          color: 'black',
          
        }}
      >
        <div style={{textAlign: 'start', padding: '4px 4px' , fontSize: '15px'}}>
            Items left
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#e8e8e7",
          width: "24.7rem",
          height: "0.2rem",
          border: "solid 1px white",
        }}
      >
        
      </div>
      <div
        style={{
          backgroundColor: "#e8e8e7",
          width: "24.4rem",
          height: "0.2rem",
          border: "solid 1px white",
        }}
      >
        
      </div>
    </div>
  );
}
