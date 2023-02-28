import React, {useState, useContext} from "react";
import { Link} from "react-router-dom";
import style from './EmergencyList.module.css'
import { IdContext } from '../../shared/Context/IdContext';


const EmergencyRenderItem = (category) => {
  
  const {setIdSearch} = useContext(IdContext);
  const [openCategory, setOpenCategory] = useState(false);
 
  const handleClick = () => (setOpenCategory(!openCategory))

  return (
             
      <section  className={style.sectionDesktopStyle}>

        <h1 className={`${style.ceTitle} ${style.ceTitleH1}`} onClick = {() => setIdSearch(category.id)}>
            <div onClick={handleClick}>{category.title}</div>
        </h1>

        <hr className={style.ceHr}/>

        <div className={style.dFlex}>
          <p className={style.icon}></p>
          <div className={style.contentBlock}>
            <ul>

              {category.cases.map(elem => (
              
                <div key={elem.id}>
                  <li  className={style.list} onClick = {() => setIdSearch(elem.id)}>
                    <span className={style.buttonStyle} >{elem.title}</span>
                  </li>

                    { elem.emergency.map( el => (
                        <div key={el.id} >

                          {!el.emergencyItem ?                       
                            <li className={style.listFirst} onClick = {() => setIdSearch(el.id)}>
                              <Link to={`/Category/Emergency/${el.id}`}>{el.title}</Link>  
                            </li> :
                            <>
                              <li className={style.listFirst} onClick = {() => setIdSearch(el.id)}>
                                  <span className={style.buttonStyle} >{el.title}</span> 
                              </li>

                              { el.emergencyItem.map( element => (
                                <li key={element.id} className={style.listSecond} onClick = {() => setIdSearch(element.id)} >
                                  <Link to={`/Category/Emergency/${element.id}`}>{element.title}</Link>
                                </li>
                              ))}
                            </>
                          }
                        </div>
                    ))}
                </div>
                )
              )}
            </ul>
          </div>
        </div>
      </section>


  )
}

export default EmergencyRenderItem;