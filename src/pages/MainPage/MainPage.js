import React, { useState } from 'react';
import Header from '../../components/Header/Header.jsx';

// import FirstComponent from '../../components/FirstComponen/Firstcomponent.jsx';
import { Routes, Route } from 'react-router-dom';
import styles from './MainPage.module.css';
import Emergency from '../../components/emergency/emergency';
import ReadMore from '../../components/emergency/readMore';
import AlarmingSuitcasePage from '../AlarmingSuitcasePage/AlarmingSuitcasePage';
import Accordion from '../../components/accordion/accordion';

const MainPage = function () {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <div className={styles.bgContainer}>
        <Header setSearchValue={setSearchValue} />
        <Accordion />
        <Routes>
          <Route path="/" exact element={<Emergency />} />
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
