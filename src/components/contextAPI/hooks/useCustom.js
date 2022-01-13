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

  useEffect(async ()=>{
    if(getLists.length > 0){
      await localStorage.setItem('lists', JSON.stringify(getLists));
    }
    console.log(getLists)
  }, [getLists])

  return {getLists, setGetLists, createTask, setCreateTask, item, setItem}
}