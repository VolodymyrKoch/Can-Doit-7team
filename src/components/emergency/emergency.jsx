
import React, { useContext, useState } from 'react';
import style from './Emergency.module.css';
import { SearchContext } from '../../shared/search-context';

import TodoList from "./TodoList";
import ForbiddenList from "./ForbiddenList";
import MyButton from '../../shared/MyButton/MyButton';
import ReadMoreDetail from './ReadMoreDetail';


const Emergency = ({emergency}) => {


  const  searchValue = useContext (SearchContext);
  const [isActiveReadMore, setIsActiveReadMore] = useState(false)
  const [activeTodoList, setActiveTodoList] = useState(true)
 

  const setVisibleBlock = () => {
    
    setIsActiveReadMore(true)
       
  }
  const setHiddenBlock = () => {
    
    setIsActiveReadMore(false)
       
  }

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

                          {
                          isActiveReadMore ?

                            <h2 
                              className={`${style.ceTitle} ${style.notActive}`} 
                              onClick={setHiddenBlock}
                              >  Ваші дії 
                            </h2> :

                               <h2 
                               className={style.ceTitle} 
                               onClick={setHiddenBlock}
                               > Ваші дії  
                              </h2>

                         }    


                        {window.innerWidth >= 768 ? 

                           <TodoList element={element} activeTodoList={activeTodoList}/> :   

                              isActiveReadMore? null : <TodoList element={element} activeTodoList={activeTodoList}/> 
                        }
                          
                      </section>
  
                      <hr className={style.ceHr}/>
      
                      <section className={`${style.ceTodo} ${style.sectionDesktopStyleShadowForbidden }`}>

                         {
                          isActiveReadMore ?

                            <h2 
                              className={`${style.ceTitle} ${style.forbiddenTodoTitle} ${style.notActive}`} 
                              onClick={setHiddenBlock}
                              > Заборонено 
                            </h2> :

                               <h2 
                               className={`${style.ceTitle} ${style.forbiddenTodoTitle}`} 
                               onClick={setHiddenBlock}
                               > Заборонено  
                              </h2>

                         } 

                          { window.innerWidth >= 768 ?

                               <ForbiddenList element={element} activeTodoList={activeTodoList}/> :
                          
                                 isActiveReadMore? null : <ForbiddenList element={element} activeTodoList={activeTodoList}/> 
                          }

                     </section>

                </div> 

                
                  <hr className={style.ceHr}/>

                  <div className={style.containerBtn}>

                        <div  className={` ${style.notActive}  ${style.ceBtnLink} ${style.notActiveDesktop}`}>

                           { isActiveReadMore ? null :  <MyButton onClick={setVisibleBlock} >Докладніше</MyButton> }

                        </div>


                  </div>

           
                   {isActiveReadMore ?

                    <section className={`${style.ceTodo} ${style.sectionDesktopStyleShadow} `}> 

                      <div className={style.containerBtn}>

                        <MyButton onClick={setHiddenBlock} >Докладніше</MyButton>

                      </div>

                      <ReadMoreDetail  element={element}  activeReadMore={isActiveReadMore}/>

                    </section> :

                    null
                  }
                  



              </div>
           ))}
                     
      </div>
    </div>
   </div>

  );
};


export default Emergency;

