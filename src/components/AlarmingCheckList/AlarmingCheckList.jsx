import React, { useEffect } from 'react';

import stylesCheckList from './AlarmingCheckList.module.css';
import styles from '../AlarmingSuitcase/AlarmingSuitcase.module.css';

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
            {selected.length > 0 ? (
              <p className={styles.description}>
                Ви зможете його переглянути, роздрукувати або скачати у форматі
                pdf
              </p>
            ) : (
              <p className={styles.description}>
                Виберіть необхідні речі зі списку в лівій частині екрану
              </p>
            )}

            <ol className={stylesCheckList.orderedList}>
              {selected.map((el, ind) => (
                <li key={ind} className={styles.subjectItem}>
                  <p className={stylesCheckList.itemNumber}>{ind + 1} </p>
                  <p className={styles.item}>{el}</p>
                </li>
              ))}
            </ol>
            {selected.length > 0 ? (
              <div className={stylesCheckList.pdf}>
                <p>Переглянути та роздрукувати ваш список &#128209; </p>
                <p>Скачати ваш список &#128190; </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default AlarmingCheckList;
