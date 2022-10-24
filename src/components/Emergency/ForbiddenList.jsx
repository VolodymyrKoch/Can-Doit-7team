import React, {useContext} from "react";
import style from'./Emergency.module.css';
import { EmergencyContext } from "../../shared/Context/EmergencyContext";

const ForbiddenList = () => {

  const {emergency, setEmergency} = useContext(EmergencyContext);

  return (
    <ul className={style.ceForbiddenTodoItem}>
      {emergency.forbidden 
      
        ? emergency.forbidden.map((item,id) =>  (
            <li key={id}>
                  <span  className={style.iconItem} />
                  <span  className={style.textItem}>{item.description} </span>
              </li>
            )) 
        
        : null
      }
    </ul>
  )
}

export default ForbiddenList;