
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout} from '../Layout/Layout'
import EmergencyListPage from '../EmergencyListPage/EmergencyListPage';
import EmergencyPage from '../EmergencyPage/EmergencyPage';
import AlarmingSuitcasePage from '../AlarmingSuitcasePage/AlarmingSuitcasePage';




const MainPage = function () {
  
  return (
    <>
     
        <Routes> 
            <Route path="/" element={ <Layout/> }>

                <Route path="/EmergencyListPage" element={ <EmergencyListPage /> }/>

                <Route path="/EmergencyPage" element={ <EmergencyPage /> }/>

                <Route path="/alarmingSuitcasePage" element={<AlarmingSuitcasePage />}/>

            </Route>
        </Routes>
     
    </>
  );
};

export default MainPage;
