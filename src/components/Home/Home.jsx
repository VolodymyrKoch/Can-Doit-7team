import React from 'react';
import style from './home.module.css';
//import Carousel from 'react-bootstrap/Carousel';
//import 'bootstrap/dist/css/bootstrap.min.css';
import imageMax1 from '../../image/image1Max.jpg';
import imageMax2 from '../../image/image2Max.jpg';
import imageMax3 from '../../image/image3Max.jpg';
import imageMax4 from '../../image/image4Max.jpg';
import imageMax5 from '../../image/image5Max.jpg';
import imageMax6 from '../../image/image6Max.jpg';

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
                    
                <div className={style.carouselBox}>
                    {/* <Carousel>
                        <Carousel.Item>
                            <div >
                                <img
                                src={imageMax1}
                                alt='imageMax1'
                                />

                                <img
                                src={imageMax2}
                                alt='imageMax1'
                                />

                                <img
                                src={imageMax3}
                                alt='imageMax1'
                                />
                            </div>
                            
                        </Carousel.Item>

                        <Carousel.Item>
                            <div>
                            <img
                                src={imageMax4}
                                alt='imageMax2'
                            />
                            <img
                                src={imageMax5}
                                alt='imageMax2'
                            />
                            <img
                                src={imageMax6}
                                alt='imageMax2'
                            />
                            </div>
                        </Carousel.Item>
                    </Carousel> */}
                 
                </div>
               
                
                <div className={style.logo}>
                    <img src={imageMax1} alt="" />
                </div>


                <div className={style.textItem}>

                    <div className={style.textItem}>Вебзастосунок «CanDoIt» - Ваш мініпомічник в екстрених ситуаціях, де в 2-4 кроках описано, як діяти за певних обставин до прибуття швидкої допомоги чи МНС.

                    </div>
                    
                    <div className={style.textItem}>Паніка - страшний ворог, але конкретні дії, іноді навіть мінімальні, можуть врятувати життя не лише своє, а й оточуючих.
    Задимленість, кровотеча, осколкові поранення, опіки, втрата свідомості, перебування під завалами будинку і т. д. - чималий перелік ситуацій, у які потрапляють українці щодня.

                    </div>
                
                    <div className={style.textItem}>Завдання застосунку - вказати конкретні дії, які потрібно виконати в певній надзвичайній ситуації і які зможуть виконати навіть діти.

                    </div>

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