import React from "react";
import style from'./emergency.module.css'; 

const TodoList = ({element}) => {

   return (
    <ul className={style.ceTodoItem}>
      {element.todo.map((item, index) =>  (
             <li key={ index}>
                <span  className={style.iconItem} role="img" >
                  
                  <img className={style.visibleLg}  src={item.image} alt={item.description} />

                </span>
                <span  className={style.textItem}>{item.description} </span>
            </li>
        ))}
    </ul> 
  );
  
};
export default TodoList;

