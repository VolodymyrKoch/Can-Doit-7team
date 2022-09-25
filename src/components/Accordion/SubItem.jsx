import React from "react";
import { Link } from "react-router-dom";

const SubItem = ({emergencyItem, onClick}) => {
  console.log('subitem:', emergencyItem)

  // const handleClick = ({emergencyItem}) => {
  //     console.log('onClick:', emergencyItem)
  //   onClick({emergencyItem})
  // }
  return (

                            
            <Link  to={"/EmergencyPage"} /*onClick={handleClick}*/ > 
              
                <details><summary>{emergencyItem.title}</summary></details> 

            </Link> 


  )
}

export default SubItem;