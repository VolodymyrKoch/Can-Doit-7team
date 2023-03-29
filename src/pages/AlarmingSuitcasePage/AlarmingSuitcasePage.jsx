import React, { useState, useEffect } from 'react';
// import React, { useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

import Header from '../../components/Header/Header.jsx';
import AlarmingSuitcase from '../../components/AlarmingSuitcase/AlarmingSuitcase';
import AlarmingCheckList from '../../components/AlarmingCheckList/AlarmingCheckList.jsx';
import styles from './AlarmingSuitcasePage.module.css';
import BreadCrumbs from '../../shared/Breadcrumbs/BreadCrumb';

const AlarmingSuitcasePage = function () {
  const [checked, setChecked] = useState([]);

  function checkedList(selectedListArr) {
    setChecked(selectedListArr);
    console.log('checked top:', checked);
    console.log('selectedListArr:', selectedListArr);
  }

  return (
    <>
      <div className={styles.alarmingPage}>
        <div className={styles.visibleLg}>
          <Header />
          <BreadCrumbs/>
        </div>
        <div className={styles.alarming}>
          <AlarmingSuitcase selectedList={checkedList} />
          <AlarmingCheckList selectedList={checked} />
        </div>
      </div>
    </>
  );
};

export default AlarmingSuitcasePage;
