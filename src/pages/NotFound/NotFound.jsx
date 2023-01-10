import React from "react";
import style from './NotFound.module.css'

const NotFound = () => {

  return (
     <div className={style.notFound}>
        <div className={style.notFoundStyle } >
            <p className={style.notFoundP}>Oops...</p>
            <h1>404</h1>
            <p>Not found</p>
        </div>
     </div>
  )
}

export default NotFound;