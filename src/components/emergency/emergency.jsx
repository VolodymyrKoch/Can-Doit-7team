
import React, { useContext, useState } from 'react';
import style from './Emergency.module.css';
import { SearchContext } from '../../shared/search-context';

import TodoList from "./TodoList";
import ForbiddenList from "./ForbiddenList";
import MyButton from '../../shared/MyButton/MyButton';
import ReadMoreDetail from './ReadMoreDetail';


const Emergency = ({emergency}) => {


  const  searchValue = useContext (SearchContext);
  const [activeReadMore, setActiveReadMore] = useState(false)
  const [activeTodoList, setActiveTodoList] = useState(true)
 

  const setVisibleBlock = () => {
    
   
   

    setActiveTodoList(!activeTodoList)

    console.log(activeTodoList)
 
    
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

                            
                          <h2 className={style.ceTitle}> 
                          
                          Ваші дії
                          
                          </h2>

                          <TodoList element={element} activeTodoList={activeTodoList}/>
                          
                      </section>
  
                      <hr className={style.ceHr}/>
      
                      <section className={`${style.ceTodo} ${style.sectionDesktopStyleShadowForbidden }`}>

                          <h2 className={`${style.ceTitle} ${style.forbiddenTodoTitle}`}> Заборонено  </h2>

                          <ForbiddenList 
                            element={element} 
                            activeTodoList={activeTodoList} 
                          />

                      </section>
                  </div> 

                
                  <hr className={style.ceHr}/>

                  <div className={`${style.containerBtn} ${style.visibleLg}`}>

                        <div  className={` ${style.notActive}  ${style.ceBtnLink} ${style.notActiveDesktop}`}>

                            <MyButton onClick={setVisibleBlock}>Докладніше</MyButton>

                        </div>


                  </div>

           

                  <section className={`${style.ceTodo} ${style.sectionDesktopStyleShadow} `}> 

                      <div className={style.containerBtn}>

                        <MyButton  style={{color:"var(--whiteColor)"}}  activeReadMore={activeReadMore} >Докладніше</MyButton>

                      </div>

                      <ReadMoreDetail  element={element}  activeReadMore={activeReadMore}/>

                  </section>



              </div>
           ))}
                     
      </div>
    </div>
   </div>

  );
};


export default Emergency;

