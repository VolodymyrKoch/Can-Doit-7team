import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import style from './Breadcrumbs.module.css';

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className={`${style.breadcrumbs} ${style.ceBreadcrumb}`}>
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <div className={`${style.bc}`} key={match.url}>
          <Link to={match.url || ""}>{breadcrumb}</Link>
          {index < breadcrumbs.length - 1 && ">"}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;