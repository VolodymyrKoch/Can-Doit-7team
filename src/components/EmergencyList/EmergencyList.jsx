import React, {useContext, useState, useEffect} from 'react';
import { Link} from 'react-router-dom';
import style from './EmergencyList.module.css';
import {EmergencyContext} from '../../shared/Context/EmergencyContext';
import EmergencyRenderItem from './EmergencyRenderItem';
import useFetch from '../../Hooks/UseFetch';
import { IsActiveContext } from '../../shared/Context/isActiveContext'

const EmergencyList = () => {

  const {emergency} = useContext(EmergencyContext);
  const [currentId, setCurrentId] = useState();
  const {isActiveLink} = useContext(IsActiveContext)
  
  const data = useFetch('emergency')
   
   useEffect (() => {
    if (isActiveLink ) 
      setCurrentId(isActiveLink) 
  },[isActiveLink])

  
  return (
     
          <div className={style.visibleLg}> 
            { emergency 

              ? <Link to={`emergency-${emergency.id}`}/> 

              : 
                <>
                  <div className={style.pageMain}>
                      { data.map( category => (
                         currentId === category.id 
                        ? <EmergencyRenderItem key={category.id} {...category}/> 
                        : 
                          <section key={category.id} className={style.sectionDesktopStyle}>
                              <h1 className={`${style.ceTitle} ${style.ceTitleH1}`} onClick={() => setCurrentId(category.id)}> 
                                {category.title}
                              </h1>
                           
                          </section>

                      )) }
                  </div> 
                  <section className={style.sectionDesktopStyle}>
                    <Link to="/EvacuationPage">
                      <h1 className={`${style.ceTitle} ${style.ceTitleH1}`}> 
                        Евакуація
                      </h1>
                    </Link>
                  </section>
                  <section className={style.sectionDesktopStyle}>
                    <Link to="/AlarmingSuitcasePage">
                      <h1 className={`${style.ceTitle} ${style.ceTitleH1}`}> 
                        Тривожна валізка
                      </h1>
                    </Link>
                  </section>
                </>
              
            } 
        </div>
    
  )
}

export default EmergencyList;