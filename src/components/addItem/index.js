import React, {useState} from 'react'
import "./index.css"
import { v4 as uuidv4 } from 'uuid';

import {Context} from '../contextAPI/ContextProvider';
import useCustom from '../contextAPI/hooks/useCustom';

export default function AddItem() {

  //const {item, setItem} = useCustom(Context);
  const {getLists, setGetLists} = useCustom(Context);
  const [text, setText] = useState("");

  async function handleChange(e){
    let t = e.target.value;
    console.log(t)
    await setText(e.target.value);
  }

  async function handleClick(e){
    e.preventDefault();
    if(text !== ""){
      const newItem = {
        id: uuidv4(),
        text: text,
        begin: true,
        blocked: false,
        done: false
      }
      await setGetLists([...getLists, newItem]);
      await localStorage.setItem('lists', JSON.stringify(getLists));
      //console.log(getLists)
      setText('');
    }
  }

  return (
    <div className='container-add-item'>
      <h2>Adicionar Tarefa</h2>
      <form>
        <input onChange={handleChange} className='task' type="text" value={text} placeholder="Tarefa" />
        <input onClick={handleClick} className='btn' type="submit" value="Adicionar" />
      </form>
    </div>
  )
}
