import React, { useEffect } from 'react';

import styles from './AlarmingCheckList.module.css';

const AlarmingCheckList = function (props) {
  const selected = props.selectedList;
  console.log('AlarmingCheckList+selected', selected);
  // useEffect(() => {
  //   // selectedList(selected);
  // }, [props]);
  return (
    <>
      <div className={styles.container}>
        <ul>
          {selected.map((el, ind) => (
            <li key={ind} className={styles.subjectItem}>
              <p className={styles.item}>{el}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AlarmingCheckList;
