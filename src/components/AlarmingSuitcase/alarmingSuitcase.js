import React, { useState, useEffect } from 'react';

import styles from './alarmingSuitcase.module.css';

const AlarmingSuitcase = function () {
  const getData = () => {
    fetch('data/alarmingSuitcase.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log('response:', response);
        return response.json();
      })
      .then(function (myJson) {
        console.log('myJson:', myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={styles.bgAlarmingSuitcase}>AlarmingSuitcase</div>
    </>
  );
};

export default AlarmingSuitcase;
