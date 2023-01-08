import React from 'react';
//import CarouselComponent from '../CarouselBox/CarouselBox.jsx';
import style from './home.module.css';
import imageMax1 from '../../image/image1Max.jpg';

const Home = props => {

   return (

    <div>
        <div className={style.container}>
          <div id={style.componentMain}>
                    
            <div className={style.mainContent} >
                <div className={style.mainTitle}>
                    <h2 className={style.mainTitle}>
                    Вебзастосунок «CanDoIt»
                    </h2>
                </div>
                    
                {/* <div className={style.carouselBox}>
                     <CarouselComponent />                                            
                </div> */}
                               
                <div className={style.logo}>
                    <img src={imageMax1} alt="" />
                </div>


                <div className={style.textHome}>

                    <p > <b className={style.phone}>Вебзастосунок «CanDoIt» </b>- Ваш мініпомічник в екстрених ситуаціях, де в 2-4 кроках описано, як діяти за певних обставин до прибуття швидкої допомоги чи МНС.

                    </p>
                    
                    <p>Паніка - страшний ворог, але конкретні дії, іноді навіть мінімальні, можуть врятувати життя не лише своє, а й оточуючих.
    Задимленість, кровотеча, осколкові поранення, опіки, втрата свідомості, перебування під завалами будинку і т. д. - чималий перелік ситуацій, у які потрапляють українці щодня.

                    </p>
                
                    <p >Завдання застосунку - вказати конкретні дії, які потрібно виконати в певній надзвичайній ситуації і які зможуть виконати навіть діти.

                    </p>

                    <br></br>
                        <ul className={style.list}>
                            <li><p >Перелік екстренних телефонів, які можна набрати як зі стаціонарних так і з мобільних телефонів:</p></li>
                            
                                
                            <li><p > <b className={style.phone}>112 </b>– Унiверсальний номер системи екстреної допомоги (почне діяти з кінця 2022 року у пілотному форматі — у Києві та Київській області)</p></li>

                            <li><p> <b className={style.phone}>101 </b> – Допомога в надзвичайних ситуаціях, пожежна допомога</p></li>
                        
                            <li><p> <b className={style.phone}>102 </b>– Полiцiя </p></li>

                            <li><p> <b className={style.phone}>103 </b> – Швидка медична допомога </p></li>

                            <li><p> <b className={style.phone}>104 </b>- Аварiйна служба газової мережi </p></li>

                            <li><p> <b className={style.phone}>109 </b>– Довідкова служба</p></li>
                            
                        </ul>

                </div>
        

            </div>
           

           
         </div>
        
    </div>
    
    </div>

    )
}

export default Home;