import React from "react";
import {NavLink } from "react-router-dom";
import style from './Navigation.module.css'




const Navigation = (props) => {
  
const setActive = ({isActive}) => isActive ? 'style.ceBreadcrumbActive' : ''; 
 
  return (
    <nav aria-label="Breadcrumb" className={`${style.ceBreadcrumb} `}>
        <ul>
            <li>
              <NavLink 
                  to="/" 
                  className={`${style.ceBreadcrumbLink}${setActive }`}
              > Головна</NavLink>
            </li>
            <li>
              <NavLink 
                to="EmergencyListPage" 
                className={`${style.ceBreadcrumbLink} ${setActive }`}
              >Надзвичайні ситуації</NavLink>
            </li>
            <li>
              <NavLink 
                to="EmergencyPage" 
                className={`${style.ceBreadcrumbLink} ${setActive } `} 
                 >Знайшли вибухонебезпечні чи підозрілі предмети</NavLink>
            </li>
        </ul>
   </nav>
  )
};

export default Navigation;