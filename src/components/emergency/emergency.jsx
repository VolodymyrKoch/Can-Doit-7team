import React from "react";
import style from'./emergency.module.css';

const Emergency = props => {

   return (

    <div>
        <div className={style.container}>
          <div id={style.componentEmergency}>
            <hr className={style.ceHr}/>
            <nav aria-label="Breadcrumb" className={style.ceBreadcrumb}>
              <ul>
                  <li><a href="#" className={style.ceBreadcrumbLink}>наслідки війни</a></li>
                  <li><span aria-current="page">знайшли вибухонебезпечні чи підозрілі предмети</span></li>
              </ul>
            </nav>
            <div className={style.ceContent}>
                <section className={style.ceTodo}>
                    <h2 className={style.ceTitle}>
                      Ваші дії
                    </h2>
                    
                    <ul className={style.ceTodoItem}>
                        <li><span className={style.iconItem}></span><span className={style.textItem}>Повідомте 101 або 102</span></li>
                        <li><span className={style.iconItem}></span><span className={style.textItem}>Позначте небезпечне місце добре видимим орієнтиром</span></li>
                        <li><span className={style.iconItem}></span><span className={style.textItem}>Попередьте про знахідку інших осіб поруч</span></li>
                        <li><span className={style.iconItem}></span><span className={style.textItem}>Відведіть інших та відійдіть самостійно на безпечну відстань (не менше 100 м)</span></li>
                    </ul>
                </section>

                <hr className={style.ceHr}/>

                <section className={style.ceTodo}>
                    <h2 className={style.ceTitle}>
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

            <div className={style.ceBtn}>
                <a href="#" className={style.ceBtnLink}>Докладніше</a>
          </div>
         </div>
        </div>
    </div>

      
    )
}

export default Emergency;