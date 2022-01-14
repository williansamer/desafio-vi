import React, {useState} from 'react'
import "./index.css"

export default function ModalUpdate(item, setShowModal, key) {
  const [textModal, setTextModal] = useState(item.text);

  function handleCloseModal(){
    setShowModal(false);
  }

  function handleTextModal(e){
    setTextModal(e.target.value);
  }

  function handleClickModal(e){
    e.preventDefault();
    item.text = textModal;
    setShowModal(false);
  }

  return (
    <div key={key} className='container-modal'>
      <div onClick={handleCloseModal} className='modal-close'>
        X
      </div>
      <form className='modal-form'>
        <input onChange={handleTextModal} className='task' type="text" value={textModal} placeholder="Tarefa" />
        <button onClick={handleClickModal} className='btn-update'>Atualizar</button>
      </form>
      
    </div>
  )
}
