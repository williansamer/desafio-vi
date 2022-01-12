import { useEffect, useState } from "react";

export default function useCustom() {

  const [item, setItem] = useState({});
  const [getLists, setGetLists] = useState([]);
  const [createTask, setCreateTask] = useState();

  useEffect(()=>{

    const saveList = localStorage.getItem('lists')
    if(saveList){
      setGetLists(JSON.parse(saveList));
    }
  }, [])

  return {getLists, setGetLists, createTask, setCreateTask, item, setItem}
}