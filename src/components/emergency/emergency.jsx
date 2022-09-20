
import React, { useContext } from 'react';
import style from './emergency.module.css';
import { SearchContext } from '../../shared/search-context';

import TodoList from "./todoList";
import ForbiddenList from "./forbiddenList";
import MyButton from '../../shared/myButton/myButton';
import ReadMoreDetail from './readMoreDetail';


const Emergency = ({emergency}) => {
  const  searchValue = useContext (SearchContext);
 

  return (

    <div>

      <div className={style.container}>
        <div id={style.componentEmergency}>
          <hr className={style.ceHr}/>
                   {emergency.map( (element, id) => (

              <div key={id}>

                <div className={style.ceContent}>

                      <section className={`${style.ceTodo} ${style.sectionDesktopStyle} ${style.sectionDesktopStyleShadow }`}>

                          <h1 className={`${style.ceTitle} ${style.ceTitleH1}`}>

                              {element.title}

                          </h1>

                            
                          <h2 className={style.ceTitle}> 
                          
                          Ваші дії
                          
                          </h2>

                          <TodoList element={element}/>
                          
                      </section>
  
                      <hr className={style.ceHr}/>
      
                      <section className={`${style.ceTodo} ${style.sectionDesktopStyleShadowForbidden }`}>

                          <h2 className={`${style.ceTitle} ${style.forbiddenTodoTitle}`}> Заборонено  </h2>

                          <ForbiddenList element={element}/>

                      </section>
                  </div> 

                
                  <hr className={style.ceHr}/>

                  <div className={`${style.containerBtn} ${style.visibleLg}`}>

                        <div  className={` ${style.notActive}  ${style.ceBtnLink} ${style.notActiveDesktop}`}>

                            <MyButton >Докладніше</MyButton>

                        </div>


                  </div>

           

                  <section className={`${style.ceTodo} ${style.sectionDesktopStyleShadow} `}> 

                      <div className={style.containerBtn}>

                        <MyButton  style={{color:"var(--whiteColor)"}}   >Докладніше</MyButton>

                      </div>

                      <ReadMoreDetail  element={element}  />

                  </section>



              </div>
           ))}
                     
      </div>
    </div>
   </div>

  );
};


export default Emergency;

