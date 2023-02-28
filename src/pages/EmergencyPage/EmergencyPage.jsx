import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Emergency from '../../components/Emergency/Emergency.jsx';
import style from './EmergencyPage.module.css';
import { EmergencyContext } from '../../shared/Context/EmergencyContext.js';

//import Breadcrumbs from '../../shared/Breadcrumbs/Breadcrumbs.jsx';
import { Link } from 'react-router-dom';

const EmergencyPage = () => {
  
  
  const {emergency, setEmergency} = useContext(EmergencyContext);
  
  return (

    <div className={style.pageMain}>

        {
         !emergency  ?  <Link to={'Category/:id'}/> : <Emergency/>
       }
    
    </div>
  );
};

export default EmergencyPage;
