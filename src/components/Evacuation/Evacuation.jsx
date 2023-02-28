//import React from "react";
import React from 'react';

import style from'./evacuation.module.css';

const Evacuation = props => {
    return (

    <div>
        <div className={style.container}>
          <div id={style.componentEvacuation}>
                    
            <div className={style.evacContent} >
                <div className={style.evacTitle}>
                    <h2 className={style.evacTitle}>
                    Рекомендації при евакуації:
                    </h2>
                </div>
                    
                <div>
                    <ol className={style.evacTodo}>
                        <li><span className={style.textItem}>Про організацію евакуації можна дізнатись:</span></li>
                            <ul className={style.evacTodoItem}>
                                <li><span className={style.textItem}>у кол-центрах місцевих територіальних громад чи місцевих адміністраціях;</span></li>
                                <li><span className={style.textItem}> в кожній громаді є особа, яка відповідальна за евакуацію,  контактний телефон якої розповсюджується з рук в руки;</span></li>
                                <li><span className={style.textItem}>через смс-розсилки, які доходять до адресатів навіть за відсутності якісного мобільного зв’язку;</span></li>
                                <li><span className={style.textItem}>безпосередньо у водіїв та волонтерів, які під’їжджають до місць перебування людей.</span></li>
                            </ul>
                            <br></br>
                        <li><span className={style.textItem}> Контактна особа проконсультує та зорієнтує на місці про дату і місце евакуації або надасть достовірну інформацію, як і де можна виїхати.</span></li>
                        <br></br>
                        <li><span className={style.textItem}> При посадці в евакуаційний транспорт мати з собою тривожну валізку, склад якої можна підібрати тут. Обов’язково неповнолітнім повісити бейджик або покласти в кишеню чи 
в рюкзак записку з ім’ям дитини, адресою та контактними даними батьків чи опікунів.</span></li>
<br></br>
                        <li><span className={style.textItem}> Евакуаційний транспорт доставить до найближчого шелтеру (прихистку), де вам нададуть комплексну допомогу (нададуть консультаційну допомогу, їжу, ліки,  тимчасове житло, 
відвезуть на евакуаційний потяг).</span></li>
<br></br>
                        <li><span className={style.textItem}> При прибутті евакуаційного потягу в місце призначення координатори та волонтери нададуть необхідну інформацію щодо оформлення документів внутрішньо переміщеної особи,  
можливого прихистку, надання гуманітарної допомоги, проінформують про виїзди в інші регіони України чи за кордон та ін.</span></li>
                     </ol>
                </div>
        

            </div>
           

           
         </div>
        </div>
    </div>


    )
}

export default Evacuation;