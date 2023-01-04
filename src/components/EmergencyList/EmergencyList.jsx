import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import style from './EmergencyList.module.css';
import {EmergencyContext} from '../../shared/Context/EmergencyContext';
import Emergency from '../Emergency/Emergency';
import EmergencyItem from './EmergencyItem';

const EmergencyList = () => {
  
  const {emergency, setEmergency} = useContext(EmergencyContext);

  return (
      <>

          { emergency 
          ? <Link to={`Emergency/${emergency.id}`}/> 
          : 
          <>
            <div className={style.pageMain}>
                <EmergencyItem/>
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
      </>
  )
}

export default EmergencyList;