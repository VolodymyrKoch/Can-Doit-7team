import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import style from './Layout.module.css';
import Logo from '../../components/Logo/Logo';
import AccordionList from '../../components/Accordion/AccordionList';

const Layout = () => {
  const [data, setData] = useState([]);

  async function fetchEmergency() {
    const response = await fetch('data/data.json', {
      headers: {
        Accept: 'application/json',
      },
    });

    const dataArray = await response.json();
    setData(dataArray);
  }

  useEffect(() => {
    fetchEmergency();
  }, []);

  return (
    <>
      <div className={style.layoutMain}>
        <div className={style.pageContainer}>
          <div className={style.epAside}>
            <Logo />
            <AccordionList data={data} /*onClick={handleClick}*/ />
          </div>

          <main className={style.layoutContant}>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export { Layout };
