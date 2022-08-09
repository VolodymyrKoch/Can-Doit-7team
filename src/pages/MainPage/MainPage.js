import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import FirstComponent from '../../components/FirstComponen/Firstcomponent.jsx';

import styles from './MainPage.module.css';
import Emergency from '../../components/emergency/emergency';

const MainPage = function () {
  return (
    <>
      <div className={styles.bgContainer}>
        <Header />
        <FirstComponent />
        <Emergency/>
      </div>
    </>
  );
};

export default MainPage;
