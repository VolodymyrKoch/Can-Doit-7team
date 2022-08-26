import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Accordion from "../../components/accordion/accordion";
import Emergency from "../../components/emergency/emergency";
import style from "./EmergencyPage.module.css";

const EmergencyPage = (props) => {

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

    <div className={style.main}>
        <div className={style.container}>
            <div className={style.aside}>

                <Accordion />

            </div>
            <div className={style.mainContent}>

                <Header setSearchValue={setSearchValue} />

                <Emergency  emergency={emergency}/>

            </div>
        </div>
    </div>

   
  )
}

export default EmergencyPage;