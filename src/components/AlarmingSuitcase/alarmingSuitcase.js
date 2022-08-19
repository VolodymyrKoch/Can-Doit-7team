import React, { useState, useEffect } from 'react';

import styles from './alarmingSuitcase.module.css';

const AlarmingSuitcase = function () {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('data/alarmingSuitcase.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        // console.log('response.url:', response);
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
        // console.log('myJson:', myJson);
        // console.log('data:', data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Тривожна валізка</h2>
          <p className={styles.description}>
            Сформуйте Вашу Тривожну валізку -відмітьте неохідніі Вам речі.
            Обов’язково врахуйте вагу вашої майбутньої валізи чи рюкзака. Вона
            залежатиме від того куди ви прямуєте , будете їхати на авто, чи
            йтимете пішки та як на довго.
          </p>
          <ul className={styles.thingsList}>
            {data.map((el, id) => (
              <li key={id} className={styles.productItem}>
                <h3 className={styles.productTitle}>{el.title}</h3>
                <p className={styles.productDescription}>{el.description}</p>
                <ul className={styles.subjectList}>
                  {/* subjectList */}
                  {el.subjectList.map((subjectEl, subjectId) => (
                    <li key={subjectId} className={styles.subjectItem}>
                      <input type="checkbox" />
                      {subjectEl}
                    </li>
                  ))}
                </ul>
              </li>
              // console.log('el.title:', el.title)
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default AlarmingSuitcase;
