import React, { useState} from 'react';
import style from './EmergencyListPage.module.css';
import imageEmergency from '../../image/image1Max.jpg'
import Header from '../../components/Header/Header';





const EmergencyListPage = (props) => {

  const [searchValue, setSearchValue] = useState('');

  return (
    <>
       
        <div className={style.pageMain}>

            <Header setSearchValue={setSearchValue} />
          

            <div className={`${style.visibleLg} ${style.imageContainer}`}> 
                <img src={imageEmergency} className={style.imageEmergency} alt="Emergency" />
            </div>




        </div>  
    </>
  );
};

export default EmergencyListPage;
