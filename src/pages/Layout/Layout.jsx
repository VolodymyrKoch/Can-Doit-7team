import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import style from './Layout.module.css';
import Logo from '../../components/Logo/Logo';
import AccordionList from '../../components/Accordion/AccordionList';
import Header from '../../components/Header/Header';

const Layout = () => {
  
  const [data, setData] = useState([]);
  // const [emergencyItem, setEmergencyItem] = useState([])
  const [searchValue, setSearchValue] = useState('');

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


//   const titleList = data.map( 
//      ({id, title}) => ({[id] : title}))
// console.log('emergencyTitles',titleList);

  // const caseList = data.map( 
  //   ({title, cases:[]}) => ({[id] : title}))

  //  const handleClick = (e) => {
  // setEmergencyItem(emergencyItem)
  // console.log('emergencyItem', emergencyItem)
  // };

  return (
    <>
      <div className={style.layoutMain}>
        <div className={style.pageContainer}>
          <div className={style.epAside}>
            
            <div className={style.visibleLg}>
                <Logo />
            </div>
              
            <div className={style.hiddenLg}>
                <Header setSearchValue={setSearchValue} />
            </div>

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
