
import React, { useContext, useState, useEffect } from 'react';
import style from './Emergency.module.css';
import { SearchContext } from '../../shared/search-context';

import TodoList from "./TodoList";
import ForbiddenList from "./ForbiddenList";
import MyButton from '../../shared/MyButton/MyButton';
import ReadMoreDetail from './ReadMoreDetail';
import { EmergencyContext } from '../../shared/Context/EmergencyContext';


const Emergency = () => {

  const  searchValue = useContext (SearchContext);
  const [isActiveReadMore, setIsActiveReadMore] = useState(false)
  const [activeTodoList, setActiveTodoList] = useState(true)
  const {emergency, setEmergency} = useContext(EmergencyContext);
  console.log('emergency in component', emergency)

useEffect(() => {
  
})
  const setVisibleBlock = () => {

    setIsActiveReadMore( visible => !visible)
  }
  
   return (

    <div>

      <div className={style.container}>
        <div id={style.componentEmergency}>
          <hr className={style.ceHr}/>
              <div >
                <div className={style.ceContent}>

                      <section className={`${style.ceTodo} ${style.sectionDesktopStyle} ${style.sectionDesktopStyleShadow }`}>

                          <h1 className={`${style.ceTitle} ${style.ceTitleH1}`}>

                              {emergency.title}

                          </h1>

                          {
                          isActiveReadMore ?

                            <h2 
                              className={`${style.ceTitle} ${style.notActive}`} 
                              onClick={setVisibleBlock}
                              >  Ваші дії 
                            </h2> :

                               <h2 
                               className={style.ceTitle} 
                               onClick={setVisibleBlock}
                               > Ваші дії  
                              </h2>

                         }    
                            <div className={style.visibleLg}>
                                
                               <TodoList  activeTodoList={activeTodoList}/>  

                            </div>

                         <div className={style.hiddenLg}>

                         { !isActiveReadMore && <TodoList activeTodoList={activeTodoList}/> }

                         </div>
                        
                          
                      </section>
  
                      <hr className={style.ceHr}/>
      
                      <section className={`${style.ceTodo} ${style.sectionDesktopStyleShadowForbidden }`}>

                         {
                          isActiveReadMore ?

                            <h2 
                              className={`${style.ceTitle} ${style.forbiddenTodoTitle} ${style.notActive}`} 
                              onClick={setVisibleBlock}
                              > Заборонено 
                            </h2> :

                               <h2 
                               className={`${style.ceTitle} ${style.forbiddenTodoTitle}`} 
                               onClick={setVisibleBlock}
                               > Заборонено  
                              </h2>

                         } 

                            <div className={style.visibleLg}>
                                
                                <ForbiddenList activeTodoList={activeTodoList}/>  

                            </div>
                            <div className={style.hiddenLg}>
                            
                                { !isActiveReadMore && <ForbiddenList  activeTodoList={activeTodoList}/> }
  
                            </div>


                     </section>

                </div> 

                
                  <hr className={style.ceHr}/>

                  <div className={style.containerBtn}>

                        <div  className={` ${style.notActive}  ${style.ceBtnLink} ${style.notActiveDesktop}`}>

                           { !isActiveReadMore &&  <MyButton onClick={setVisibleBlock} >Докладніше</MyButton> }

                        </div>


                  </div>

           
                   {isActiveReadMore &&

                    <section className={`${style.ceTodo} ${style.sectionDesktopStyleShadow} `}> 

                      <div className={style.containerBtn}>

                        <MyButton onClick={setVisibleBlock} >Докладніше</MyButton>

                      </div>

                      <ReadMoreDetail activeReadMore={isActiveReadMore}/>

                    </section>  
                  }

              </div>
      </div>
    </div>
   </div>

  );
};


export default Emergency;

