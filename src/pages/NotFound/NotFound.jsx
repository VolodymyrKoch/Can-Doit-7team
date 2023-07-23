import React, {useState} from "react";
import BreadCrumbs from "../../shared/Breadcrumbs/Breadcrumbs";
import style from './NotFound.module.css'
import Header from "../../components/Header/Header";


const NotFound = () => {

 

  return (

    <div className={style.pageMain}>

      <div className={style.visibleLg}>
        <Header />
        <BreadCrumbs/>
      </div>
      <div className={style.container}> 
        <div className={style.notFound}>

          <div className={style.notFoundStyle } >
              <p className={style.notFoundP}>Oops...</p>
              <h1>404</h1>
              <p>Not found</p>
          </div>
        </div>
      </div>
    </div>

     
  )
}

export default NotFound;