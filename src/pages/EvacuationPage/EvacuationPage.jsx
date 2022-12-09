import React from 'react';
import style from './evacuationPage.module.css';
import Header from '../../components/Header/Header';
import Evacuation from '../../components/Evacuation/Evacuation.jsx';

const EvacuationPage = (props) => {

  return (
    <>
       
        <div className={style.pageMain}>
            <div className={style.visibleLg}> 
              <Header />
            </div>
          <div className={style.pageOutlet}> 
              <Evacuation />
          </div>
        </div>     
        
    </>
  );
};

export default EvacuationPage;

