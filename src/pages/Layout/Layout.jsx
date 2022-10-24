import React, { useState, useEffect, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import style from './Layout.module.css';
import Logo from '../../components/Logo/Logo';
import AccordionList from '../../components/Accordion/AccordionList';
import Header from '../../components/Header/Header';
import useFetch from '../../Hooks/UseFetch';
import { IdContext } from '../../shared/Context/IdContext';
import { EmergencyContext } from '../../shared/Context/EmergencyContext';
import Logo7team from '../../shared/Logo7team/Logo7team';


const Layout = () => {

  const [searchValue, setSearchValue] = useState();
  const {idSearch, setIdSearch} = useContext(IdContext);
  const [arrayOfEmergency, setArrayOfEmergency] = useState([]);
  const {emergency, setEmergency} = useContext(EmergencyContext);


  const data = useFetch('emergency')
  //  console.log('data', data)
  // console.log('idSearch', idSearch)


  const getArrayOfEmergencyFromData = () => {
    const array = []
    data.map(item => {
      item.cases.map( element => {
        element.emergency.map( elem => {
          if (!elem.emergencyItem) {
            array.push(elem)
          } else {
            elem.emergencyItem.map(el => array.push(el))
          }
        })
      })
    })
    setArrayOfEmergency(array)
  }

  useEffect(() => {
    getArrayOfEmergencyFromData()

  }, [data])

  const getObjectById = () => {
    const obj = arrayOfEmergency.find(el => el.id === idSearch)
     setEmergency(obj)
  }

  useEffect(() => {
    getObjectById();

  }, [idSearch])

  // console.log('emergency', emergency)

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

            <AccordionList  data={data} />
          </div>

          <main className={style.layoutContent}>
            <Outlet />
            <Logo7team/>
          </main>
        </div>
      </div>
    </>
  );
};

export { Layout };
