import React from "react";
import style from'./emergency.module.css';
import { Link } from 'react-router-dom';

const Emergency = props => {

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
            <div className={style.ceContent}>
              
                <section className={`${style.ceTodo} ${style.margin1Rem} ${style.sectionDesktopStyle} ${style.sectionDesktopStyleShadow }`}>
                    <h1 className={`${style.ceTitle} ${style.ceTitleH1}`}>
                      Знайшли вибухонебезпечні чи підозрілі предмети
                    </h1>
                    <h2 className={style.ceTitle}>
                      Ваші дії
                    </h2>
                    <ul className={style.ceTodoItem}>
                        <li><span className={style.iconItem}></span><span className={style.textItem}>Повідомте 101 або 102</span></li>
                        <li><span className={style.iconItem}></span><span className={style.textItem}>Позначте небезпечне місце добре видимим орієнтиром</span></li>
                        <li><span className={style.iconItem}></span><span className={style.textItem}>Попередьте про знахідку інших осіб поруч</span></li>
                        <li><span className={style.iconItem}></span><span className={style.textItem}>Відведіть інших та відійдіть самостійно на безпечну відстань (не менше 100 м)</span></li>
                    </ul>
                    <div className={`${style.ceBtn} ${style.visibleLg}`}>
                      <Link to="/readMore"  className={` ${style.notActive}  ${style.ceBtnLink} ${style.notActiveDesktop}`}>Докладніше</Link> 
                    </div>
                </section>

                <hr className={style.ceHr}/>

                <section className={`${style.ceTodo} ${style.margin1Rem} ${style.sectionDesktopStyleShadowForbidden }`}>
                    <h2 className={`${style.ceTitle} ${style.forbiddenTodoTitle}`}>
                      Заборонено
                    </h2>
                    
                    <ul className={style.ceForbiddenTodoItem}>
                        <li><span className={style.iconItem}></span><span className={style.textItem}>Пересувати або брати в руки</span></li>
                        <li><span className={style.iconItem}></span><span className={style.textItem}>Заливати рідиною</span></li>
                        <li><span className={style.iconItem}></span><span className={style.textItem}>Кидати, ударяти по ВНП</span></li>
                        <li><span className={style.iconItem}></span><span className={style.textItem}>Засипати піском та грунтом</span></li>
                        <li><span className={style.iconItem}></span><span className={style.textItem}>Розпалювати поряд багаття</span></li>
                        <li><span className={style.iconItem}></span><span className={style.textItem}>Допускати скупчення людей біля ВНП</span></li>
                        <li><span className={style.iconItem}></span><span className={style.textItem}>Користуватися засобами радіозв’язку, мобільними телефонами</span></li>
                    </ul>
                </section>

            </div>
            <hr className={style.ceHr}/>

            <div className={`${style.ceBtn} ${style.hiddenLg}`}>
                <Link to="/readMore"  className={` ${style.notActive}  ${style.ceBtnLink} ${style.notActiveDesktop}`}>Докладніше</Link> 
          </div>
         </div>
        </div>
    </div>

      
    )
}

export default Emergency;