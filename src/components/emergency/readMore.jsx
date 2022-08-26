import React from "react";
import style from "./emergency.module.css";
import { Link } from "react-router-dom";
import TodoList from "./todoList";
import ForbiddenList from "./forbiddenList";
import ReadMoreDetail from "./readMoreDetail";




const ReadMore = ({emergency}) => {

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
                  <div key={id}>
                        <div className={style.ceContent}>
                      
                            <section className={`${style.ceTodo} ${style.margin1Rem} ${style.sectionDesktopStyleShadow}`}>
                                <h1 className={`${style.ceTitle} ${style.ceTitleH1}`}>
                                    <Link to="/emergency" className={style.activeH1}>{element.title}</Link>
                                </h1>
                                <h2 className={style.ceTitle}>
                                      <Link to="/emergency"  className={`${style.notActive} ${style.fontColorBlack }`}>Ваші дії</Link> 
                                </h2>

                                    <TodoList element={element} className={style.visible}/>

                            </section>

                            <hr className={style.ceHr}/>

                            <section className={`${style.ceTodo} ${style.margin1Rem} ${style.sectionDesktopStyleShadowForbidden}`}>
                                <h2 className={style.ceTitle}>
                                  <Link to="/"  className={`${style.forbiddenTodoTitle} ${style.notActive} `}> Заборонено</Link>
                                </h2>

                                <ForbiddenList element={element} className={style.visible}/>

                            </section>

                        </div>

                        <hr className={style.ceHr}/>
                        
                        <section className={`${style.ceTodo} ${style.margin1Rem} ${style.sectionDesktopStyleShadow}`}> 
                            <div className={style.ceBtn}>
                                <Link to="/emergency" className={style.activeH1}> 
                                    <p className={`${style.active} ${style.ceBtnLink} ${style.notActiveDesktop}` }>Докладніше</p>
                                </Link>
                            </div>
                          <ReadMoreDetail  element={element}  />
                        </section>
                  </div>
                ))}
           </div>
        </div>

    </div>

  )
};

export default ReadMore;