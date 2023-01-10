import React, { useState, useContext } from 'react';
import style from './Accordion.module.css';
import { NavLink } from 'react-router-dom';
import {FiChevronDown, FiChevronUp} from "react-icons/fi";
import { EmergencyContext } from '../../shared/Context/EmergencyContext';
import { IdContext } from '../../shared/Context/IdContext';

const AccordionItem = ({id, title, cases}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isEmergencyItemOpen, setIsEmergencyItemOpen] = useState(false);

  const {idSearch, setIdSearch} = useContext(IdContext);
  const open = () => (setIsOpen(!isOpen));
  const openEmergencyList =() => (setIsEmergencyOpen(!isEmergencyOpen));
  const openEmergencyItemList =() => (setIsEmergencyItemOpen(!isEmergencyItemOpen));


  
  return (

   <ul>
      <li key={id}  className={style.border} >
        <NavLink to={`Category/${id}`} className={`${style.styleList} ${style.width100}`} onClick={open } >
                
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
                                    ? <NavLink to={`Category/${caseItem.id}/Emergency/${emergencyItem.id}`} 
                                          className={style.fontColorActive} 
                                          onClick = {()=> setIdSearch(emergencyItem.id)} 
                                      >
                                          {emergencyItem.title}
                                      </NavLink>
                                    : <span 
                                          className={`${style.itemStyle} ${ style.fontColorActive }` } 
                                          onClick={openEmergencyItemList}>{emergencyItem.title}
                                      </span> 
                                    }
                                    <ul className={isEmergencyItemOpen ? style.displayBlock : style.displayNone}>
                                      
                                        {isEmergencyItemOpen && emergencyItem.emergencyItem.map(i =>  (
                                            <li key={i.id} className={style.information} > 
                                              <NavLink to={`Category/${caseItem.id}/Emergency/${i.id}`}> 
                                                  <span 
                                                    className={`${style.itemStyle} ${style.fontColorActive}` } 
                                                    onClick = {()=> setIdSearch(i.id)}
                                                    >
                                                    {i.title} 
                                                  </span>
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
