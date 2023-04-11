import React, { useContext } from "react";
import style from './Breadcrumbs.module.css'
import { useParams, NavLink} from 'react-router-dom';
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { EmergencyContext } from "../Context/EmergencyContext";


const BreadCrumbs = () => {

  const params = useParams();
  const {emergency} = useContext(EmergencyContext);
  const DynamicCategoryBreadcrumb = () => (
    !emergency? 
    <span>{params.id}</span> :
    <span>{emergency.title}</span>
  );

const routes = [
  { path: "/", breadcrumb: 'Головна' },
  { path: "/Category", breadcrumb: 'Категорії' },
  { path: "/Category/:id", breadcrumb: DynamicCategoryBreadcrumb },
  { path: "/Category/Emergency-:emergencyid", breadcrumb:  DynamicCategoryBreadcrumb },
  { path: "/EvacuationPage", breadcrumb: "Евакуація" },
  { path: "/AlarmingSuitcasePage", breadcrumb: "Тривожна валізка" },
 
];
  
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className={style.ceBreadcrumb} >
       {breadcrumbs.map(({ match, breadcrumb }) => (
        <div className={style.ceCrumb} key={match.pathname}>
          <NavLink to={match.pathname} >
          {breadcrumb}
        </NavLink>
        </div>
        
      ))}
    </div>
  )
}

export default BreadCrumbs;
