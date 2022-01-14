import React, {createContext} from 'react'
import useCustom from './hooks/useCustom';

const Context = createContext();

export default function ContextProvider({children}) {

  const {getLists, setGetLists, createTask, setCreateTask, showModal, setShowModal} = useCustom(Context)

  return (
    <Context.Provider value={{getLists, setGetLists, createTask, setCreateTask, showModal, setShowModal}}>
      {children}
    </Context.Provider>
  )
}

export {Context}