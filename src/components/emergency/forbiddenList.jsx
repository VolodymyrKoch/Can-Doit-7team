import React from "react";
import style from'./Emergency.module.css';

const ForbiddenList = ({element}) => {  

  return (
    <ul className={style.ceForbiddenTodoItem}>
      {element.forbidden.map((item,index) =>  (
           <li key={ index}>
                <span  className={style.iconItem} />
                <span  className={style.textItem}>{item.description} </span>
            </li>
       ))}
    </ul>
  )
}

export default ForbiddenList;