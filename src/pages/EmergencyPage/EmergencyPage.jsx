import React, { useState, useEffect } from "react";
import Emergency from "../../components/emergency/emergency";
import style from "./EmergencyPage.module.css";
import Navigation from '../../shared/Navigation/Navigation';
import Header from "../../components/Header/Header";

const EmergencyPage = ({emergencyItem}, ...props) => {

  // console.log("emergencyItem",emergencyItem,props)

  const [emergency, setEmergency] = useState([]);
  const [searchValue, setSearchValue] = useState('');
   

  async function fetchEmergency () {
    const response = await fetch('data/emergency.json', {
     headers: {
       Accept: 'application/json'
     }
   })
 
    const data = await response.json();
     setEmergency(data);
  
  }
   useEffect(() => {
     fetchEmergency();
 }, []);

 
  return (

    <div className={style.pageMain}>

             <Header setSearchValue={setSearchValue} />
                
                <Navigation/>

               <Emergency  emergency={emergency}/>

    </div>

   
  )
}

export default EmergencyPage;