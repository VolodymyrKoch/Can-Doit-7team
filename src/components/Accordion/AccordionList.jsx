import React, { useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import style from './Accordion.module.css';
import AccordionItem from './AccordionItem';
import { IsActiveContext } from '../../shared/Context/isActiveContext';


const AccordionList = ({ data }) => {
  const [openedItemId, setOpenedItemId] = useState(null)
  const { setIsActiveLink} = useContext(IsActiveContext)

const handlerOpenedItemId = (id) => {
  setOpenedItemId(id);
  setIsActiveLink(id)
}

  return (

      <div className={`${style.container} ${style.width100} `}>
        <ul>

            {data.map((someCase) => (
                <li key={someCase.id} className={style.border} >
                    <AccordionItem  {...someCase} handlerOpenedItemId = {handlerOpenedItemId} isOpen = {openedItemId === someCase.id}/>
              </li>
            ))}

            <li  className={style.border} >
              <NavLink to="EvacuationPage" className={style.styleList}> 
                  {({isActive}) => (
                    <>
                      <span  className={`${style.iconItem} ${isActive ? style.iconItem2 : style.iconItem1}`}/>
                      <span className={`${isActive ? style.fontColorActive : ''}`}>Евакуація</span>
                    </>
                  )}
              </NavLink>
            </li>
            <li  className={style.border}>
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
  );
};

export default AccordionList;
