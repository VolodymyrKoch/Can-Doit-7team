import React from 'react';
import style from './HomePage.module.css';
//import Navigation from '../../shared/Navigation/Navigation';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home.jsx';

const HomePage = (props) => {

  return (
    <>
          <div className={style.pageMain}>
          <div className={style.visibleLg}>
            <Header  />
          </div>

          <div className={style.pageOutlet}>
             <Home /> 
          </div>

        </div>
           
    </>
  );
};

export default HomePage;