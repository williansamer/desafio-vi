import React from 'react'
import "./index.css"
import ListItem from '../listItem'
import ModalUpdate from "./modal";

import {Context} from '../contextAPI/ContextProvider';	
import useCustom from '../contextAPI/hooks/useCustom';

export default function List() {
  const {showModal, setShowModal} = useCustom(Context);

  return (
    <div className='container'>
      <h2>Lista de Tarefas</h2>
      <ul className='container-list'>
      {showModal && <ModalUpdate />}
        <ListItem />
      </ul>
    </div>
  )
}
