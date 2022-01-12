import React, {createContext} from 'react'
import useCustom from './hooks/useCustom';

const Context = createContext();

export default function ContextProvider({children}) {

  const {getLists, setGetLists, createTask, setCreateTask, item, setItem} = useCustom(Context)

  return (
    <Context.Provider value={{getLists, setGetLists, createTask, setCreateTask, item, setItem}}>
      {children}
    </Context.Provider>
  )
}

export {Context}