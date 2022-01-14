import React from "react";
import "./index.css";
import ListItem from "../listItem";

export default function List() {
  return (
    <div className="container">
      <h2>Lista de Tarefas</h2>
      <ul className="container-list">
        <ListItem />
      </ul>
    </div>
  );
}
