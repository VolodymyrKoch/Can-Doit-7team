import React from "react";
import style from "./emergency.module.css";
import ReadMoreDetail from "./ReadMoreDetail";
import MyButton from "../../shared/MyButton/MyButton";




const ReadMore = ({emergency}) => {

  return (

      <div>
            {emergency.map( (element, id) => (

              <div key={id}>
                    
                  <section className={`${style.ceTodo} ${style.margin1Rem} ${style.sectionDesktopStyleShadow} ${style.hiddenLg} `}> 

                      <div className={style.containerBtn}>

                        <MyButton  style={{color:"var(--whiteColor)"}}   >Докладніше</MyButton>

                      </div>

                      <ReadMoreDetail  element={element}  />

                  </section>

            </div>
          ))}
                
    </div>

  );
 

  
};

export default ReadMore;