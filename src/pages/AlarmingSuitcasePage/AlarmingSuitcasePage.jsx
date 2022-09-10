import React, { useState, useEffect } from 'react';
// import React, { useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

// import Header from '../../components/Header/Header.jsx';
import AlarmingSuitcase from '../../components/AlarmingSuitcase/alarmingSuitcase';
import AlarmingCheckList from '../../components/AlarmingCheckList/AlarmingCheckList.jsx';
import styles from './AlarmingSuitcasePage.module.css';

const AlarmingSuitcasePage = function () {
  const [checked, setChecked] = useState([]);

  function checkedList(selectedListArr) {
    setChecked(selectedListArr);
    console.log('checked top:', checked);
    console.log('selectedListArr:', selectedListArr);
  }

  return (
    <>
      <div className={styles.container}>
        <AlarmingSuitcase selectedList={checkedList} />
        <AlarmingCheckList selectedList={checked} />
      </div>
    </>
  );
};

export default AlarmingSuitcasePage;
