import React, { useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

// import Header from '../../components/Header/Header';
import AlarmingSuitcase from '../../components/AlarmingSuitcase/alarmingSuitcase';

import styles from './AlarmingSuitcasePage.module.css';

const AlarmingSuitcasePage = function () {
  return (
    <>
      <div className={styles.container}>
        {/* <Header /> */}
        <AlarmingSuitcase />
      </div>
    </>
  );
};

export default AlarmingSuitcasePage;
