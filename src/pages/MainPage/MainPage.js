import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import FirstComponent from '../../components/FirstComponen/Firstcomponent.jsx';
import {Routes, Route, Link} from 'react-router-dom';
import styles from './MainPage.module.css';
import Emergency from '../../components/emergency/emergency';
import ReadMore from '../../components/emergency/readMore';



const MainPage = function () {
  // eslint-disable-next-line no-unused-vars
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className={styles.bgContainer}>
          <Header setSearchValue={setSearchValue}/>
          <Routes>
              <Route path="/" element={<Emergency />}/>
              <Route path="/readMore" element={<ReadMore/>} />
          </Routes>

      </div>
    </>
  );
};

export default MainPage;
