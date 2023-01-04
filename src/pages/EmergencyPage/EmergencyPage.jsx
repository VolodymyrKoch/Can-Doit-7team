import React, { useState, useEffect, useContext } from 'react';
import Emergency from '../../components/Emergency/Emergency.jsx';
import style from './EmergencyPage.module.css';
import Navigation from '../../shared/Navigation/Navigation';
import Header from '../../components/Header/Header';
import { EmergencyContext } from '../../shared/Context/EmergencyContext.js';
import { Link } from 'react-router-dom';


const EmergencyPage = () => {
  
  
  const [searchValue, setSearchValue] = useState('');
  const {emergency, setEmergency} = useContext(EmergencyContext);
  console.log('emergency from EmergencyPage', emergency)
  
  return (

    <div className={style.pageMain}>

      <div className={style.visibleLg}>
        <Header setSearchValue={setSearchValue} />
        <Navigation /> 
      </div>

   
       {
         !emergency  ?  <Link to={`Category/:id`}/> : <Emergency/>
       }
    
    </div>
  );
};

export default EmergencyPage;
