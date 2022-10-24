import React, {useContext} from "react";
import style from'./Emergency.module.css'; 
import { EmergencyContext } from "../../shared/Context/EmergencyContext";

const TodoList = () => {

  const {emergency, setEmergency} = useContext(EmergencyContext);

   return (
    <ul className={style.ceTodoItem}>
      {emergency.todo 
          ? emergency.todo.map((item, id) =>  (
             <li key={id}>
                <span  className={style.iconItem} role="img" >
                  
                  <img className={style.visibleLg} style={{width:"100%"}} src={item.image} alt={item.description} />

                </span>
                <span  className={style.textItem}>{item.description} </span>
            </li>
            ))
         : null
      }
    </ul> 
  );
  
};
export default TodoList;

