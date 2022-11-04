import React from 'react';
import styles from './MainPage.module.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Layout } from '../Layout/Layout.jsx';
import EmergencyListPage from '../EmergencyListPage/EmergencyListPage';
import EmergencyPage from '../EmergencyPage/EmergencyPage';
import EvacuationPage from '../EvacuationPage/EvacuationPage';
import AlarmingSuitcasePage from '../AlarmingSuitcasePage/AlarmingSuitcasePage.jsx';
import { SearchContext } from '../../shared/search-context';
import { IdContext } from '../../shared/Context/IdContext';
import { EmergencyContext} from '../../shared/Context/EmergencyContext'



const MainPage = function () {

  const [searchValue, setSearchValue] = useState('');
  const [idSearch, setIdSearch] = useState([]);
  const [emergency, setEmergency] = useState();


  console.log('idSearch', idSearch)

  return (
    <>
      <div className={styles.bgContainer}>
        <SearchContext.Provider value={searchValue}>
          <IdContext.Provider value={{idSearch, setIdSearch}}>
            <EmergencyContext.Provider value={{emergency, setEmergency}}>
              <Routes>
                <Route path="/" element={<Layout />}>

                {/* <Route path="/home" element={<HomePage />} />₴ */}


                  <Route
                    path="/EmergencyListPage"
                    element={<EmergencyListPage />}
                  />

                  <Route path="/EmergencyPage" element={<EmergencyPage />} />

                  <Route path="/EvacuationPage" element={<EvacuationPage />} />

                  <Route
                    path="/AlarmingSuitcasePage"
                    element={<AlarmingSuitcasePage />}
                  />
                </Route>
              </Routes>
            </EmergencyContext.Provider>
           </IdContext.Provider>
        </SearchContext.Provider>
      </div>
    </>
  );
};

export default MainPage;
