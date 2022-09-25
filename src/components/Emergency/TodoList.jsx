import React from "react";
import style from'./Emergency.module.css'; 

const TodoList = ({element}) => {

   return (
    <ul className={style.ceTodoItem}>
      {element.todo.map((item, index) =>  (
             <li key={ index}>
                <span  className={style.iconItem} role="img" >
                  
                  <img className={style.visibleLg} style={{width:"100%"}} src={item.image} alt={item.description} />

                </span>
                <span  className={style.textItem}>{item.description} </span>
            </li>
        ))}
    </ul> 
  );
  
};
export default TodoList;

