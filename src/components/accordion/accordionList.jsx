import React, {useState} from "react";
import { Link } from "react-router-dom";
import style from'./accordion.module.css';
import AccordionItem from "./accordionItem";

const AccordionList = ({data, onClick}) => {


  return (
    <>
       <div className={`${style.container} ${style.width100}`}>
       {data.map( (someCase, id) => (
          <div key={id} >

              <AccordionItem 
                  someCase={someCase}
                  // onClick={onClick}
              />

          </div>

       ))}
      <Link to="/alarmingSuitcasePage">
       <details>
					<summary><span className={style.iconItem1}></span>Евакуація</summary>
			</details>
      </Link>
			<details>
					<summary><span className={style.iconItem1}></span>Тривожна валізка</summary>
			</details>
      </div>
  </>
  )
};

export default AccordionList;