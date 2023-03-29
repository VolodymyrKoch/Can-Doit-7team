import React, { useState, useEffect, useContext } from 'react';
import style from './HomePage.module.css';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home.jsx';
import BreadCrumbs from '../../shared/Breadcrumbs/BreadCrumb';

const HomePage = () => {

  const [searchValue, setSearchValue] = useState('');

  return (
    <>
          <div className={style.pageMain}>
          
          <div className={style.visibleLg}>
          <Header setSearchValue={setSearchValue} />
              <BreadCrumbs/>
          </div>

          <div className={style.pageOutlet}>
             <Home /> 
          </div>

        </div>
           
    </>
  );
};

export default HomePage;