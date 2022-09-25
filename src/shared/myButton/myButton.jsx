import React from "react";
import style from './myButton.module.css'

const MyButton = ({children, ...props}) => {
  return (

       <button {...props} className={`${style.ceBtn} ${style.notActive}  ${style.ceBtnLink} ${style.notActiveDesktop}`}>
                
                 {children}

       </button>


  )
};

export default MyButton;