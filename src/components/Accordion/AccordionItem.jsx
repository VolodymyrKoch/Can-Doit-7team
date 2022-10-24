import React, { useState, useContext } from 'react';
import style from './Accordion.module.css';
import { Link } from 'react-router-dom';
import SubItem from './SubItem';
import IconArrow from '../../image/icon/icon-arrow';
import { IdContext } from '../../shared/Context/IdContext';

const AccordionItem = ({id, title, cases}) => {

  const [iconActive, setIconActive] = useState(true)

  const {setIdSearch} = useContext(IdContext)
  const openListIcon = () => {
    setIconActive((open) => !open) 
  }

  React.useEffect(() => {
   
    }, [] )

  return (
    <>
      <details  className={iconActive ? style.fontColorActive : ''}>
  
          <summary key={id}  /*onClick = {() => setIdSearch(id)}*/ className={`${iconActive ? '' : style.fontColorActive }`}>
            <span onClick={openListIcon} className={`${style.iconItem}  ${iconActive ? style.iconItem1 : style.iconItem2}`}></span>
    
              {title}

              <IconArrow/>
       
          </summary>
        
        {cases.map((caseItem) => (
          <div key={caseItem.id} className={style.information}>
            <details >
              <summary /*onClick = {() => setIdSearch(caseItem.id)}*/ className={`${style.aligment} ${!iconActive ? style.fontColorActive : ''}`}>
                {caseItem.title}

                <IconArrow/>

                </summary>

              {caseItem.emergency.map((emergencyItem) => (
               
                  
                  <div className={style.information} key={emergencyItem.id} >
                    
                    <details >
                    
                      <summary className={style.fontColorActive} onClick = {() => setIdSearch(emergencyItem.id)}>
                                            
                        {!emergencyItem.emergencyItem 
                          ? <Link to={"/EmergencyPage"} onClick = {() => setIdSearch(emergencyItem.id)} className={style.fontColorActive}> 
                             {emergencyItem.title}
                           </Link>
                          : emergencyItem.title
                        } 
                 
                      </summary>

                    {
                        emergencyItem.emergencyItem 
                        
                         && emergencyItem.emergencyItem.map((i) =>  (

                              <div className={style.information} key={i.id} >

                              
                                   <SubItem   {...i}  />
                              
                              </div>
                            )
                            
                          ) 
                   
                    } 
                    </details> 
 
                  </div>
                  
                  )

              )}


            </details>
          </div>
        ))}
      </details>
    </>
  );
};

export default AccordionItem;
