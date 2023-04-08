import React, { useState} from 'react';
import style from './evacuationPage.module.css';
import imageEmergency from '../../image/image1Max.jpg'
import Header from '../../components/Header/Header';
import Evacuation from '../../components/Evacuation/Evacuation.jsx';
import BreadCrumbs from '../../shared/Breadcrumbs/Breadcrumbs';

const EvacuationPage = (props) => {

  const [searchValue, setSearchValue] = useState('');

  return (
    <>
       
        <div className={style.pageMain}>


        <div className={style.visibleLg}>
          <Header setSearchValue={setSearchValue} />
          <BreadCrumbs/>
          </div> 

          <div className={style.pageOutlet}>
          <Evacuation />
          </div>

        </div>  
    </>
  );
};

export default EvacuationPage;






/*import React, { useState, useEffect } from 'react';
import Navigation from '../../shared/Navigation/Navigation';
import Header from '../../components/Header/Header.jsx';
//import AlarmingSuitcase from '../../components/AlarmingSuitcase/AlarmingSuitcase';
//import AlarmingCheckList from '../../components/AlarmingCheckList/AlarmingCheckList.jsx';
import styles from './evacuation.module.css';
import Evacuation from '../../components/evacuation/evacuation';

const EvacuationPage = function () {
    const [checked, setChecked] = useState([]);
  
   /* function checkedList(selectedListArr) {
      setChecked(selectedListArr);
      console.log('checked top:', checked);
      console.log('selectedListArr:', selectedListArr);
    }*/
  
    /*return (
      <>
        <div className={styles.pageMain}>
          <Header />
          <Navigation />
          <div className={styles.pageMain}>
            <Evacuation />
            
          </div>
        </div>
      </>
    );
  };
  
  export default EvacuationPage;*/
  