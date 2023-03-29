import { useState, useContext } from 'react';
import style from './Accordion.module.css';
import { NavLink} from 'react-router-dom';
import {FiChevronDown, FiChevronUp} from "react-icons/fi";
import { IdContext } from '../../shared/Context/IdContext';



const AccordionItem = ({id, title, cases, isOpen, handlerOpenedItemId}) => {


  
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(null);
  const [isEmergencyItemOpen, setIsEmergencyItemOpen] = useState(null);
  const {setIdSearch} = useContext(IdContext);
   

  const open = () => {
    const openState = isOpen ? null : id;
    handlerOpenedItemId(openState)

  }
  const openEmergencyList =() => (setIsEmergencyOpen(!isEmergencyOpen));
  const openEmergencyItemList =() => (setIsEmergencyItemOpen(!isEmergencyItemOpen));

  
  
  return (

    <ul>
        <li key={id}  className={style.border} >
          <NavLink to={`Category/${id}`} className={`${style.styleList} ${style.width100}`} onClick={open} >

              { ({isActive}) => ( 
                <>
                  <span  className={`${style.iconItem} ${isActive ? style.iconItem2 : style.iconItem1}`}/>
                  <span className={`${style.itemStyle} ${isActive ? style.fontColorActive : '' }`} onClick = {() => setIdSearch(id)}>{title}</span>
                  {isActive ? <FiChevronUp/> : <FiChevronDown/> }
                </> 
              )} 
          </NavLink>
          <ul className={isOpen ? style.displayBlock : style.displayNone}>

            {cases.map( caseItem => (
                <li key={caseItem.id} className={style.information} >
                    <NavLink to={`Category/${caseItem.id}`} onClick={openEmergencyList}>

                      {({isActive}) => (
                        <span 
                          className={`${style.itemStyle} ${isActive ? style.fontColorActive : ''}` }
                          onClick = {()=> setIdSearch(caseItem.id)}>

                            {caseItem.title}

                        </span> 
                      )}
                    </NavLink>
                    <ul className={isEmergencyOpen ? style.displayBlock : style.displayNone}>

                        {caseItem.emergency.map(emergencyItem => (
                          <li key={emergencyItem.id} className={style.information} >

                              {!emergencyItem.emergencyItem 
                                ? <NavLink to={`Category/Emergency-${emergencyItem.id}`} >
                                  { ({isActive}) => (
                                    <span
                                      className={`${style.fontColor} ${isActive ? style.fontColorActive : '' }`} 
                                      onClick = {()=> setIdSearch(emergencyItem.id)}
                                      >
                                        {emergencyItem.title}
                                        
                                    </span>
                                  )}

                                  </NavLink>
                                : <NavLink to={`Category/${emergencyItem.id}`} onClick={openEmergencyItemList}> 
                                  {({isActive}) => (
                                    <span 
                                      className={`${style.itemStyle} ${isActive ? style.fontColorActive : '' }` } 
                                      onClick = {()=> setIdSearch(emergencyItem.id)}
                                      >
                                        {emergencyItem.title} 

                                    </span>
                                  )}
                                  
                                  </NavLink>  
                              }

                              <ul className={isEmergencyItemOpen ? style.displayBlock : style.displayNone}>
                                
                                {isEmergencyItemOpen && emergencyItem.emergencyItem.map(i =>  (
                                  <li key={i.id} className={style.information} > 
                                    <NavLink to={`Category/Emergency-${i.id}`}> 
                                      {({isActive}) => (
                                        <span 
                                          className={`${style.itemStyle} ${isActive ? style.fontColorActive : '' }` } 
                                          onClick = {()=> setIdSearch(i.id)}
                                          >

                                           {i.title} 
                                        </span>
                                      )}
                                        
                                    </NavLink>  
                                  </li>
                                ))} 
                              </ul>
                          </li>
                        ))}
                    </ul> 
                </li>
              ))
            }
            
          </ul>

        </li>
    </ul>
   
  ) 
};

export default AccordionItem;
