import React, { useState } from "react";
import "./index.css";
import Item from "../items/Items";

import { Context } from "../contextAPI/ContextProvider";
import useCustom from "../contextAPI/hooks/useCustom";

export default function AddItem() {
  
  const { getLists, setGetLists } = useCustom(Context);
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    if (text !== "") {
      const item = new Item(text);
      localStorage.setItem(
        "lists",
        JSON.stringify([...JSON.parse(localStorage.getItem("lists")), item])
      );
      setGetLists(JSON.parse(localStorage.getItem("lists")));
      console.log(getLists);
      setText("");
    }
  }

  return (
    <div className="container-add-item">
      <h2>Adicionar Tarefa</h2>
      <form>
        <input
          onChange={handleChange}
          required
          className="task"
          type="text"
          value={text}
          placeholder="Tarefa"
        />
        <input
          onClick={handleClick}
          className="btn"
          type="submit"
          value="Adicionar"
        />
      </form>
    </div>
  );
}
