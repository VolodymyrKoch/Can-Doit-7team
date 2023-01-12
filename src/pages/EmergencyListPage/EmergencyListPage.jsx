import React, { useState} from 'react';
import { Outlet } from 'react-router-dom';
import style from './EmergencyListPage.module.css';
import Header from '../../components/Header/Header';
import Navigation from '../../shared/Navigation/Navigation';




const EmergencyListPage = () => {

  const [searchValue, setSearchValue] = useState('');


  return (

        <div className={style.pageMain}>

            <div className={style.visibleLg}>

              <Header setSearchValue={setSearchValue} />
              <Navigation /> 
            </div>

            <div className={style.container}> 
                <Outlet/>
            </div>

        </div>  

  );
};

export default EmergencyListPage;
