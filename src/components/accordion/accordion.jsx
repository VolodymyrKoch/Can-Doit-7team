import React from 'react';

import style from './accordion.module.css';
// import styles from './accordion.css';
const Accordion = props => {
  return (
    <>
      <div className={style.container}>
        <details>
          <summary>
            <span className={style.iconItem1}></span>Надзвичайні ситуації
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={style.icon}
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <div className={style.information}>
            <details>
              <summary>
                Небезпеки під час війни
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.icon}
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <div className={style.information}>
                <details>
                  <summary>
                    Знайшли вибухо-небезпечні чи підозрілі предмети
                  </summary>
                </details>
                <details>
                  <summary>Обстріл</summary>
                </details>
                <details>
                  <summary>Завал в будинку</summary>
                </details>
              </div>
            </details>
          </div>
        </details>
        <details>
          <summary>
            <span className={style.iconItem2}></span>Домедична допомога
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={style.icon}
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <div className={style.information}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              convallis sodales erat vel accumsan. Nam eget massa nec sem
              vulputate ullamcorper vel quis justo. Duis rhoncus tempor tempus.
              Nulla facilisi. Maecenas nulla ante, lacinia ac consectetur non,
              aliquet sollicitudin libero. Quisque congue odio sodales dui
              fermentum ac laoreet mauris eleifend. Nulla facilisi. Phasellus
              vel erat a ante pharetra pharetra.
            </p>
          </div>
        </details>
        <details>
          <summary>
            <span className={style.iconItem1}></span>Евакуація
          </summary>
        </details>
        <details>
          <summary>
            <span className={style.iconItem1}></span>Тривожна валізка
          </summary>
        </details>
      </div>
    </>
  );
};

export default Accordion;
