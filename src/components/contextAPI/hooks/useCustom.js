import { useEffect, useState } from "react";

export default function useCustom() {

  const [getLists, setGetLists] = useState([]);
  const [createTask, setCreateTask] = useState();

  useEffect(()=>{
    const actualState = JSON.parse(localStorage.getItem('lists'));
    if(actualState){
        setGetLists(actualState);
    }
  }, [])

  useEffect(async ()=>{
    if(getLists.length > 0){
      await localStorage.setItem('lists', JSON.stringify(getLists));
    }
    
  }, [getLists])

  return {getLists, setGetLists, createTask, setCreateTask}
}