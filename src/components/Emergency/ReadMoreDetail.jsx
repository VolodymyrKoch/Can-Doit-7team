import React, {useContext} from 'react';
import style from './Emergency.module.css';
import { EmergencyContext } from '../../shared/Context/EmergencyContext';

const ReadMoreDetail = () => {

  const {emergency, setEmergency} = useContext(EmergencyContext);

  var decodeHTML = function (html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  return (

    <div className={style.textItemReadMore}>
      { emergency.detail
          ? decodeHTML(emergency.detail) 
          : <p>
             <b>Перелік екстренних телефонів, які можна набирати як зі стаціонарних так i з мобільних телефонів:</b><br/>
              112 – Унiверсальний номер системи екстреної допомоги (почне діяти з кінця 2022 року у пілотному форматі — у Києві та Київській області);<br/>
              101 – Допомога в надзвичайних ситуаціях, пожежна допомога;<br/>
              102 – Полiцiя;103 – Швидка медична допомога;<br/>
              104 – Аварiйна служба газової мережi'
          </p>
          }
    </div>

  );
};

export default ReadMoreDetail;
