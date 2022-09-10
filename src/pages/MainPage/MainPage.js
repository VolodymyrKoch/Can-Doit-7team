
import React from 'react';
import styles from './MainPage.module.css'
import Header from '../../components/Header/Header.jsx';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Layout} from '../Layout/Layout'
import EmergencyListPage from '../EmergencyListPage/EmergencyListPage';
import EmergencyPage from '../EmergencyPage/EmergencyPage';
import AlarmingSuitcasePage from '../AlarmingSuitcasePage/AlarmingSuitcasePage';
import AccordionList from '../../components/accordion/accordionList';
import Logo from '../../components/Logo/Logo';
import { SearchContext } from '../../shared/search-context';





const MainPage = function () {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>

     
     <div className={styles.bgContainer}>
        <SearchContext.Provider value={searchValue}>
            {/* <Header setSearchValue={setSearchValue} />
            <Logo />
            <AccordionList />  */}
            <Routes> 
                <Route path="/" element={ <Layout/> }>

                    <Route path="/EmergencyListPage" element={ <EmergencyListPage /> }/>

                    <Route path="/EmergencyPage" element={ <EmergencyPage /> }/>

                    <Route path="/AlarmingSuitcasePage" element={<AlarmingSuitcasePage />}/> 

                </Route>
            </Routes>
          </SearchContext.Provider>
      </div>
     

    </>
  );
};

export default MainPage;
