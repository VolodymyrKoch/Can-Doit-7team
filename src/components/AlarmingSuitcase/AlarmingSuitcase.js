import React, { useState, useEffect } from 'react';
import useFetch from '../../Hooks/UseFetch';

import styles from './AlarmingSuitcase.module.css';

const AlarmingSuitcase = function ({ selectedList }) {
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    selectedList(selected);
  }, [selected, selectedList]);

  const data_alarmingSuitcase = useFetch('alarming-suitcase');
  
  function arrayRemoveElement(array, index) {
    return [...array.slice(0, index), ...array.slice(index + 1)];
  }

  function handleInputChange(event) {
    // console.log('event.target', event.target.checked);

    const target = event.target;
    const ind = selected.indexOf(target.value);
    // console.log('ind', ind);

    if (target.checked === false && ind !== -1) {
      const newSelected = arrayRemoveElement(selected, ind);
      // selected.splice(ind, 1);
      setSelected(newSelected);

      // console.log('checked === false:');
    }
    if (target.checked === true && ind === -1) {
      setSelected([...selected, target.value]);

      // console.log('checked === true:');
    } else {
      return;
    }
  }

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
            {data_alarmingSuitcase.map((el, id) => (
              <li key={id} className={styles.productItem}>
                <h3 className={styles.productTitle}>{el.title}</h3>
                <p className={styles.productDescription}>{el.description}</p>
                <form
                  className={styles.subjectList}
                  // onSubmit={submitHandler}
                >
                  {el.subjectList.map((subjectEl, subjectId) => (
                    <label key={subjectId} className={styles.subjectItem}>
                      <input
                        type="checkbox"
                        value={subjectEl}
                        name={el.title}
                        onChange={handleInputChange}
                      />
                      <p className={styles.subjectEl}>{subjectEl}</p>
                    </label>
                  ))}
                </form>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default AlarmingSuitcase;
