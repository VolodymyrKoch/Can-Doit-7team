import React, { useState, useEffect } from 'react';

import styles from './alarmingSuitcase.module.css';

const AlarmingSuitcase = function () {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  // console.log('selected:', selected);

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

  function handleInputChange(event) {
    console.log('event.target', event.target.checked);

    const target = event.target;
    const ind = selected.indexOf(target.value);
    console.log('ind', ind);

    if (target.checked === false && ind !== -1) {
      const copySelected = selected;
      const delEl = copySelected.splice(ind, 1);
      setSelected(copySelected);
    }
    if (target.checked === true && ind === -1) {
      setSelected([...selected, target.value]);
    } else {
      // setSelected(selected);
      // console.log('selected-2:', selected);
      return;
    }
    // const name = target.name;
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
            {data.map((el, id) => (
              <li key={id} className={styles.productItem}>
                <h3 className={styles.productTitle}>{el.title}</h3>
                <p className={styles.productDescription}>{el.description}</p>
                <form className={styles.subjectList}>
                  {/* subjectList */}
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
              // console.log('el.title:', el.title)
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default AlarmingSuitcase;
