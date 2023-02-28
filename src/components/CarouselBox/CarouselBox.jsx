import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './carouselBox.module.css';
import imageMax1 from '../../image/image1Max.jpg';
import imageMax2 from '../../image/image2Max.jpg';
import imageMax3 from '../../image/image3Max.jpg';
import imageMax4 from '../../image/image4Max.jpg';
import imageMax5 from '../../image/image5Max.jpg';
import imageMax6 from '../../image/image6Max.jpg';

const CarouselComponent = props => {

   return (

    <div>                    
                <div className={style.carouselBox}>
                     <Carousel>
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
                    </Carousel> 
                 
                </div>
               
                
                {/* <div className={style.logo}>
                    <img src={imageMax1} alt="" />
                </div>         */}
    
    
    </div>

    )
}

export default CarouselComponent;