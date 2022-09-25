import React, { useState } from 'react';
import style from './Accordion.module.css';
import { Link } from 'react-router-dom';
import EmergencyListPage from '../../pages/EmergencyListPage/EmergencyListPage';
import SubItem from './SubItem';

const AccordionItem = ({ someCase, onClick }, props) => {
  return (
    <>
      <details>
        <summary>
          <span className={style.iconItem1}></span>
          {someCase.title}
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
        {someCase.cases.map((caseItem, caseId) => (
          <div key={caseId} className={style.information}>
            <details>
              <summary>
                {caseItem.title}
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

              {caseItem.emergency.map((emergencyItem, emergencyId) => (
                <div key={emergencyId} className={style.information}>
                  <SubItem emergencyItem={emergencyItem} />
                </div>
              ))}
            </details>
          </div>
        ))}
      </details>
    </>
  );
};

export default AccordionItem;
