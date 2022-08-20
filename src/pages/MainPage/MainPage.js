import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import FirstComponent from '../../components/FirstComponen/Firstcomponent.jsx';
import { Routes, Route, Link } from 'react-router-dom';
import styles from './MainPage.module.css';
import Emergency from '../../components/emergency/emergency';
import ReadMore from '../../components/emergency/readMore';
import AlarmingSuitcasePage from '../AlarmingSuitcasePage/AlarmingSuitcasePage';

const MainPage = function () {
  return (
    <>
      <div className={styles.bgContainer}>

          <Header />
          <FirstComponent />
    


        <Routes>
          <Route path="/" element={<Emergency />} />
          <Route path="/readMore" element={<ReadMore />} />
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
