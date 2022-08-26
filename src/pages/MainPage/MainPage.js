import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import FirstComponent from '../../components/FirstComponen/Firstcomponent.jsx';
import { Routes, Route, Link } from 'react-router-dom';
import styles from './MainPage.module.css';
import Emergency from '../../components/emergency/emergency';
import ReadMore from '../../components/emergency/readMore';
import AlarmingSuitcasePage from '../AlarmingSuitcasePage/AlarmingSuitcasePage';

const MainPage = function () {

  const [emergency, setEmergency] = useState([]);

  async function fetchEmergency () {
   const response = await fetch('data/emergency.json', {
    headers: {
      Accept: 'application/json'
    }
  })

   const data = await response.json();
    setEmergency(data);
 
 }
  useEffect(() => {
    fetchEmergency();
}, []);
 
  return (
    <>
      <div className={styles.bgContainer}>

          <Header />
          <FirstComponent />

        <Routes>
          <Route 
              path="/" 
              element={ <MainPage/> } 
          />
          <Route 
              path="/emergency"   
              element={ <Emergency  emergency={emergency}/> }
          />
          <Route 
              path="/emergency/readMore" 
              element={<ReadMore emergency={emergency} />} 
          />
          <Route
            path="/alarmingSuitcasePage"
            element={<AlarmingSuitcasePage />}
          />
        </Routes>
      </div>
    </>
  );
};

export default MainPage;
