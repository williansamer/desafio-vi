import React, { useEffect } from "react";
import "./index.css";

import { Context } from "../contextAPI/ContextProvider";
import useCustom from "../contextAPI/hooks/useCustom";

export default function ListItem() {
  const { getLists, setGetLists } = useCustom(Context);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(getLists));
  }, [getLists]);

  /*   useEffect(()=>{
    const actualState = JSON.parse(localStorage.getItem('lists'));
    if(actualState){
        setGetLists(actualState);
    }
    return;
  }, [getLists]) */

  function handleBegin(item) {
    const newItem = [...getLists];
    newItem.forEach((it) => {
      if (it.id === item.id) {
        item.begin = !item.begin;
        if (item.begin) {
          item.color = "green";
        } else {
          item.color = "black";
        }
      }
    });
    setGetLists(newItem);
  }
  function handleDone(item) {
    const newItem = [...getLists];
    newItem.forEach((it) => {
      if (it.id === item.id) {
        item.done = !item.done;
        if (item.done) {
          item.color = "blue";
          item.begin = true;
        } else {
          item.color = "green";
        }
      }
    });
    setGetLists(newItem);
  }
  function handleBlocked(item) {
    console.log("blocked");
    const newItem = [...getLists];
    newItem.forEach((it) => {
      if (it.id === item.id) {
        item.blocked = !item.blocked;
        if (item.blocked) {
          item.color = "red";
        } else {
          item.color = "black";
          item.begin = false;
          item.done = false;
        }
      }
    });
    setGetLists(newItem);
  }

  function handleUpdate(item) {
    console.log("updating " + item.text);
  }

  function handleDelete(item) {
    const newItem = [];
    getLists.filter((it) => {
      if (it.id !== item.id) {
        newItem.push(it);
      }
    });
    setGetLists(newItem);
  }

  return (
    <div className="container-list-item">
      {getLists &&
        getLists.map((item, index) => (
          <li key={index} className="container-list-details">
            <div className={`${item.color} task`}>{item.text}</div>
            {!item.blocked ? (
              <div className="container-btn">
                <div className="container-btn-up">
                  <button
                    onClick={() => handleBegin(item)}
                    className="btn-begin"
                  >
                    {item.begin ? (
                      <img alt="on" src="../../icons/play-on.png"></img>
                    ) : (
                      <img alt="off" src="../../icons/play-off.png"></img>
                    )}
                  </button>
                  <button onClick={() => handleDone(item)} className="btn-done">
                    {item.done ? (
                      <img alt="on" src="../../icons/done-on.png"></img>
                    ) : (
                      <img alt="off" src="../../icons/done-off.png"></img>
                    )}
                  </button>
                  <button
                    onClick={() => handleBlocked(item)}
                    className="btn-blocked"
                  >
                    {item.blocked ? (
                      <img alt="on" src="../../icons/block-on.png"></img>
                    ) : (
                      <img alt="off" src="../../icons/block-off.png"></img>
                    )}
                  </button>
                </div>
                <div className="container-btn-down">
                  <button
                    onClick={() => handleUpdate(item)}
                    className="btn-update"
                  >
                    Alterar
                  </button>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn-delete"
                  >
                    Deletar
                  </button>
                </div>
              </div>
            ) : (
              <div className="container-btn">
                <div className="container-btn-up">
                  <button
                    onClick={() => handleBlocked(item)}
                    className="btn-blocked"
                  >
                    {item.blocked ? (
                      <img alt="on" src="../../icons/block-on.png"></img>
                    ) : (
                      <img alt="off" src="../../icons/block-off.png"></img>
                    )}
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
    </div>
  );
}
