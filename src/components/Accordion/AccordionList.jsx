import React, { useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import style from './Accordion.module.css';
import AccordionItem from './AccordionItem';


const AccordionList = ({ data }) => {

  const [isIconActive, setIsIconActive] = useState(false)
  const [isEvacuation, setIsEvacuation] = useState(false)
  
  const openListIcon = () => {
    setIsIconActive((open) => !open) 
  }

  return (
    <>
      <div className={`${style.container} ${style.width100} `}>
        <ul>

           
              {data.map((someCase) => (
                 <li key={someCase.id} className={style.border} >
                     <AccordionItem  {...someCase} />
                </li>
              ))}
          
          
            <li  className={style.border} onClick={() => setIsEvacuation(!isEvacuation)}>
                <NavLink to="EvacuationPage" className={style.styleList}> 
                {({isActive}) => (
                  <>
                  <span  className={`${style.iconItem} ${isActive ? style.iconItem2 : style.iconItem1}`}/>
                  <span className={`${isActive ? style.fontColorActive : ''}`}>Евакуація</span>
                  </>
                )}
                    
                    
                </NavLink>
            </li>
            <li onClick={openListIcon} className={style.border}>
              <NavLink to="AlarmingSuitcasePage" className={style.styleList}>
                {({isActive}) => (
                  <>
                  <span  className={`${style.iconItem} ${isActive ? style.iconItem2 : style.iconItem1}`}></span>
                  <span className={`${isActive ? style.fontColorActive : ''}`}>Тривожна валізка</span>
                  </>
                )}
                
              </NavLink>
            </li>
        </ul>
      </div>
    </>
  );
};

export default AccordionList;
