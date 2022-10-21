import React, {useContext } from "react";
import { Link} from "react-router-dom";
import style from './Accordion.module.css'
import { IdContext } from "../../shared/Context/IdContext";

const SubItem = ({id, title}) => {

const {setIdSearch } = useContext(IdContext)

  return (

                            
            <Link  to={"/EmergencyPage"}  > 
              
                <details onClick = {() => setIdSearch(id)}><summary className={style.fontColorActive} key={id} >{title} </summary></details> 
            </Link> 


  )
}

export default SubItem;