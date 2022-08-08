import React from "react";
import classes from'./emergency.module.css'

const Emergency = props => {

   return (

    <div>
        <div className="container">
          <div id="component-emergency">
            <hr className="ce-hr"/>
            <nav aria-label="Breadcrumb" className="ce-breadcrumb">
              <ul>
                  <li><a href="#" className="ce-breadcrumb-link">наслідки війни</a></li>
                  <li><span aria-current="page">знайшли вибухонебезпечні чи підозрілі предмети</span></li>
              </ul>
            </nav>
            <div className="ce-content">
                <section className="ce-todo">
                    <h2 className="ce-title">
                      Ваші дії
                    </h2>
                    
                    <ul className="ce-todo-item">
                        <li><span className="icon-item"></span><span className="text-item">Повідомте 101 або 102</span></li>
                        <li><span className="icon-item"></span><span className="text-item">Позначте небезпечне місце добре видимим орієнтиром</span></li>
                        <li><span className="icon-item"></span><span className="text-item">Попередьте про знахідку інших осіб поруч</span></li>
                        <li><span className="icon-item"></span><span className="text-item">Відведіть інших та відійдіть самостійно на безпечну відстань (не менше 100 м)</span></li>
                    </ul>
                </section>

                <hr className="ce-hr"/>

                <section className="ce-todo">
                    <h2 className="ce-title">
                      Заборонено
                    </h2>
                    
                    <ul className="ce-forbidden-todo-item">
                        <li><span className="icon-item"></span><span className="text-item">Пересувати або брати в руки</span></li>
                        <li><span className="icon-item"></span><span className="text-item">Заливати рідиною</span></li>
                        <li><span className="icon-item"></span><span className="text-item">Кидати, ударяти по ВНП</span></li>
                        <li><span className="icon-item"></span><span className="text-item">Засипати піском та грунтом</span></li>
                        <li><span className="icon-item"></span><span className="text-item">Розпалювати поряд багаття</span></li>
                        <li><span className="icon-item"></span><span className="text-item">Допускати скупчення людей біля ВНП</span></li>
                        <li><span className="icon-item"></span><span className="text-item">Користуватися засобами радіозв’язку, мобільними телефонами</span></li>
                    </ul>
                </section>

            </div>
            <hr className="ce-hr"/>

            <div className="ce-btn">
                <a href="#" className="ce-btn-link">Докладніше</a>
          </div>
         </div>
        </div>
    </div>

      
    )
}

export default Emergency;