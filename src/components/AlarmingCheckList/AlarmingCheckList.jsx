import React, { useEffect } from 'react';

import stylesCheckList from './AlarmingCheckList.module.css';
import styles from '../AlarmingSuitcase/alarmingSuitcase.module.css';

const AlarmingCheckList = function (props) {
  const selected = props.selectedList;
  selected
    ? console.log('AlarmingCheckList+selected', selected)
    : console.log('AlarmingCheckList+selected = null', selected);
  // useEffect(() => {
  //   // selectedList(selected);
  // }, [props]);
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Ваш список</h2>
          <div className={styles.container}>
            <ol className={stylesCheckList.orderedList}>
              {selected.map((el, ind) => (
                <li key={ind} className={styles.subjectItem}>
                  <p className={styles.item}>{el}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlarmingCheckList;
