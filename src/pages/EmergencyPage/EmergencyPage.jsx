import React, { useState, useEffect, useContext } from 'react';
import Emergency from '../../components/Emergency/Emergency.jsx';
import style from './EmergencyPage.module.css';
import Navigation from '../../shared/Navigation/Navigation';
import Header from '../../components/Header/Header';
import { EmergencyContext } from '../../shared/Context/EmergencyContext.js';
import Breadcrumbs from '../../shared/Breadcrumbs/Breadcrumbs.jsx';

const EmergencyPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const { emergency, setEmergency } = useContext(EmergencyContext);

  return (
    <div className={style.pageMain}>
      <div className={style.visibleLg}>
        <Header setSearchValue={setSearchValue} />
        {/* <Breadcrumbs />  */}
        <Navigation />
      </div>

      {emergency && <Emergency />}
    </div>
  );
};

export default EmergencyPage;
