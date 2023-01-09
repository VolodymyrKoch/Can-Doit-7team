import React, { useState} from 'react';
import style from './EmergencyListPage.module.css';
import imageEmergency from '../../image/image1Max.jpg'
import Header from '../../components/Header/Header';
import Navigation from '../../shared/Navigation/Navigation';
import EmergencyList from '../../components/EmergencyList/EmergencyList';



const EmergencyListPage = (props) => {

  const [searchValue, setSearchValue] = useState('');


  return (
    <>
       
        <div className={style.pageMain}>

          <div className={style.visibleLg}>

                  <Header setSearchValue={setSearchValue} />
                  <Navigation /> 

                  <div className={style.container}> 
                    
                    <EmergencyList/>

                  </div>

          </div>


        </div>  
    </>
  );
};

export default EmergencyListPage;
