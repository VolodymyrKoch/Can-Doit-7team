import React, {useState, useContext} from "react";
import { Link} from "react-router-dom";
import useFetch from '../../Hooks/UseFetch'
import style from './EmergencyList.module.css'
import { IdContext } from '../../shared/Context/IdContext';


const EmergencyItem = () => {

  const {idSearch, setIdSearch} = useContext(IdContext);
  const [openCategory, setOpenCategory] = useState(false);
 
  const data = useFetch('emergency')
  const [openBlock, setOpenBlock] = useState(false)
  const [openItemBlock, setOpenItemBlock] = useState(false)
  const handleClick = () => (setOpenCategory(!openCategory))

  return (
             
    <>
      { data.map(category => ( 
        <section key={category.id} className={style.sectionDesktopStyle}>
            <h1 className={`${style.ceTitle} ${style.ceTitleH1}`} onClick = {() => setIdSearch(category.id)}>
                <div onClick={handleClick}>{category.title}</div>
            </h1>

            <hr className={style.ceHr}/>
      
              { category.id === idSearch || openCategory 
              
                ?
                  <div className={style.dFlex}>
                    <p className={style.icon}></p>
                    <div className={style.contentBlock}>
                    <ul>

                      {category.cases.map(elem => 
                        (<div key={elem.id}>
                          <li  className={style.list} onClick = {() => setIdSearch(elem.id)}>
                            <span className={style.buttonStyle} onClick={() => setOpenBlock(!openBlock)}>{elem.title}</span>
                          </li>

                          {openBlock && elem.emergency.map( el => (
                              <div key={el.id} >

                                {!el.emergencyItem ?                       
                                  <li className={style.listFirst} onClick = {() => setIdSearch(el.id)}>
                                    <Link to={`/Category/Emergency/${el.id}`}>{el.title}</Link>  
                                  </li> :
                                  <>
                                    <li className={style.listFirst} onClick = {() => setIdSearch(el.id)}>
                                        <span className={style.buttonStyle} onClick={() => setOpenItemBlock(!openItemBlock)}>{el.title}</span> 
                                    </li>

                                    {openItemBlock && el.emergencyItem.map( element => (
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

                : null
            }
        
        </section>

      ))}

    </>

  )
}

export default EmergencyItem;