import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Accordion.module.css';
import AccordionItem from './AccordionItem';

const AccordionList = ({ data }) => {
  const [iconActive, setIconActive] = useState(true);
  const openListIcon = () => {
    setIconActive(open => !open);
  };

  return (
    <>
      <div className={`${style.container} ${style.width100}`}>
        {data.map(someCase => (
          <div key={someCase.id}>
            <AccordionItem {...someCase} />
          </div>
        ))}
        <Link to="EvacuationPage">
          <details>
            <summary onClick={openListIcon}>
              <span
                className={`${style.iconItem}  ${
                  iconActive ? style.iconItem1 : style.iconItem2
                }`}
              ></span>
              Евакуація
            </summary>
          </details>
        </Link>
        <Link to="/AlarmingSuitcasePage">
          <details>
            <summary>
              <span
                className={`${style.iconItem}  ${
                  iconActive ? style.iconItem1 : style.iconItem2
                }`}
              ></span>
              Тривожна валізка
            </summary>
          </details>
        </Link>
      </div>
    </>
  );
};

export default AccordionList;
