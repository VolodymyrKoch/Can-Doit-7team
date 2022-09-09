import React, { createContext, useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import { Routes, Route } from 'react-router-dom';
import styles from './MainPage.module.css';
import Emergency from '../../components/emergency/emergency';
import ReadMore from '../../components/emergency/readMore';
import AlarmingSuitcasePage from '../AlarmingSuitcasePage/AlarmingSuitcasePage';
import Accordion from '../../components/accordion/accordion';
import Logo from '../../components/Logo/Logo';
import { SearchContext } from '../../shared/search-context';

const MainPage = function () {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <div className={styles.bgContainer}>
        <SearchContext.Provider value={searchValue}>
        <Header setSearchValue={setSearchValue} />
        <Logo />
        <Accordion />
        <Routes>
          <Route path="/" exact element={<Emergency />} />
          <Route path="/readMore" element={<ReadMore />} />
          <Route
            path="/alarmingSuitcasePage"
            element={<AlarmingSuitcasePage />}
          />
        </Routes>
        </SearchContext.Provider>
      </div>

    </>
  );
};

export default MainPage;
