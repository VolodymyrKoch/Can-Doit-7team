import React, { useState} from 'react';
import { Outlet, useParams } from 'react-router-dom';
import style from './EmergencyListPage.module.css';
import Header from '../../components/Header/Header';
import BreadCrumbs from '../../shared/Breadcrumbs/Breadcrumbs';
import EmergencyList from '../../components/EmergencyList/EmergencyList';




const EmergencyListPage = () => {

  const [searchValue, setSearchValue] = useState('');
  const param = useParams();
  const paramLength =  Object.entries(param).length
 

  return (

        <div className={style.pageMain}>

            <div className={style.visibleLg}>

              <Header setSearchValue={setSearchValue} />
              <BreadCrumbs/>
            </div>

            <div className={style.container}> 
               {paramLength ?  <Outlet/> : <EmergencyList/>}
            </div>

        </div>  

  );
};

export default EmergencyListPage;
