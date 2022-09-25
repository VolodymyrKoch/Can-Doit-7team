import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Accordion.module.css';
import AccordionItem from './AccordionItem';

const AccordionList = ({ data }) => {
  return (
    <>
      <div className={`${style.container} ${style.width100}`}>
        {data.map((someCase, id) => (
          <div key={id}>
            <AccordionItem
              someCase={someCase}
              // onClick={onClick}
            />
          </div>
        ))}
        <Link to="/alarmingSuitcasePage">
          <details>
            <summary>
              <span className={style.iconItem1}></span>Евакуація
            </summary>
          </details>
        </Link>
        <Link to="/AlarmingSuitcasePage">
          <details>
            <summary>
              <span className={style.iconItem1}></span>Тривожна валізка
            </summary>
          </details>
        </Link>
      </div>
    </>
  );
};

export default AccordionList;
