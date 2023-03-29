import React, { useState } from 'react';
import styles from './MainPage.module.css';
import { Routes, Route} from 'react-router-dom';
import { Layout } from '../Layout/Layout.jsx';
import EmergencyListPage from '../EmergencyListPage/EmergencyListPage';
import EmergencyPage from '../EmergencyPage/EmergencyPage';
import EvacuationPage from '../EvacuationPage/EvacuationPage';
import AlarmingSuitcasePage from '../AlarmingSuitcasePage/AlarmingSuitcasePage.jsx';
import { SearchContext } from '../../shared/search-context';
import { IdContext } from '../../shared/Context/IdContext';
import { EmergencyContext} from '../../shared/Context/EmergencyContext'
import HomePage from '../HomePage/HomePage';
import NotFound from '../NotFound/NotFound';
import EmergencyList from '../../components/EmergencyList/EmergencyList';
import { IsActiveContext } from '../../shared/Context/isActiveContext';




const MainPage = function () {

  const [searchValue, setSearchValue] = useState('');
  const [idSearch, setIdSearch] = useState([]);
  const [emergency, setEmergency] = useState();
  const [isActiveLink, setIsActiveLink] = useState(null);



  return (
    <>
      <div className={styles.bgContainer}>
        <SearchContext.Provider value={searchValue}>
            <IdContext.Provider value={{idSearch, setIdSearch}}>
              <EmergencyContext.Provider value={{emergency, setEmergency}}>
              <IsActiveContext.Provider value={{ isActiveLink, setIsActiveLink }}>
                  <Routes>
    
                    <Route path="/" element={<Layout />}>

                        <Route index element={<HomePage />}/>
                      
                        <Route path="Category"  element={<EmergencyListPage />}>

                            <Route path=":id" element={<EmergencyList/>}/>
                            <Route path="Emergency-:emergencyid" element={<EmergencyPage />}/> 

                        </Route>

                        <Route path="EvacuationPage" element={<EvacuationPage />}/>
                        <Route path="AlarmingSuitcasePage" element={<AlarmingSuitcasePage />}/>
                        <Route path="*" element={<NotFound/> } />

                    </Route>

                </Routes>
                </IsActiveContext.Provider>
              </EmergencyContext.Provider>
            </IdContext.Provider>
        </SearchContext.Provider>
      </div>
    </>
  );
};

export default MainPage;
