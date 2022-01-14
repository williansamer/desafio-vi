import { useEffect, useState } from "react";

export default function useCustom() {

  const [getLists, setGetLists] = useState([]);
  const [createTask, setCreateTask] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{
    const actualState = JSON.parse(localStorage.getItem('lists'));
    if(actualState){
        setGetLists(actualState);
    }
  }, [])

  useEffect(()=>{
    if(getLists.length > 0){
      localStorage.setItem('lists', JSON.stringify(getLists));
    }
    
  }, [getLists])

  return {getLists, setGetLists, createTask, setCreateTask, showModal, setShowModal}
}