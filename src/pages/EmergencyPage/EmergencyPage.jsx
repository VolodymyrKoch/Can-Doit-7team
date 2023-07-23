import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Emergency from '../../components/Emergency/Emergency.jsx';
import style from './EmergencyPage.module.css';
import { EmergencyContext } from '../../shared/Context/EmergencyContext.js';

const EmergencyPage = () => {
  const { emergency } = useContext(EmergencyContext);

  return (
    <div className={style.pageMain}>
      {!emergency ? <Link to={'Category/:id'} /> : <Emergency />}
    </div>
  );
};

export default EmergencyPage;
