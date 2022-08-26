
import React from 'react';
import style from './emergency.module.css';
import { Link } from 'react-router-dom';
import TodoList from "./todoList";
import ForbiddenList from "./forbiddenList";


const Emergency = ({emergency}) => {

  
  return (

    <div>

        <div className={style.container}>
          <div id={style.componentEmergency}>
            <hr className={style.ceHr}/>
            <nav aria-label="Breadcrumb" className={style.ceBreadcrumb}>
              <ul>
                  <li><a href="#" className={style.ceBreadcrumbLink}>Головна</a></li>
                  <li><a href="#" className={style.ceBreadcrumbLink}>Надзвичайні ситуації</a></li>
                  <li><span aria-current="page">Знайшли вибухонебезпечні чи підозрілі предмети</span></li>
              </ul>
            </nav>
                {emergency.map( (element, id) => (

                  <div key={id} className={style.ceContent}>

                      <section className={`${style.ceTodo} ${style.margin1Rem} ${style.sectionDesktopStyle} ${style.sectionDesktopStyleShadow }`}>
  
                          <h1 className={`${style.ceTitle} ${style.ceTitleH1}`}>
                              {element.title} 
                          </h1>
    
                            
                          <h2 className={style.ceTitle}> Ваші дії  </h2>
    
                          <TodoList element={element}/>
    
                          <div className={`${style.ceBtn} ${style.visibleLg}`}>
                            <Link to="/emergency/readMore"  className={` ${style.notActive}  ${style.ceBtnLink} ${style.notActiveDesktop}`}>Докладніше</Link> 
                          </div>
                      </section>
  
                      <hr className={style.ceHr}/>
  
                      <section className={`${style.ceTodo} ${style.margin1Rem} ${style.sectionDesktopStyleShadowForbidden }`}>

                          <h2 className={`${style.ceTitle} ${style.forbiddenTodoTitle}`}> Заборонено  </h2>

                          <ForbiddenList element={element}/>

                      </section>
                  </div> 
  

                ))}
                  
              
            <hr className={style.ceHr}/>

            <div className={`${style.ceBtn} ${style.hiddenLg}`}>
                <Link to="/emergency/readMore"  className={` ${style.notActive}  ${style.ceBtnLink} ${style.notActiveDesktop}`}>Докладніше</Link> 
            </div>
         </div>

        </div>
      </div>
  );
};


export default Emergency;

