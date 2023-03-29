import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import style from './Breadcrumbs.module.css'
import { useLocation} from 'react-router-dom';

const BreadCrumbs = () => {

  const location = useLocation();

  let currentLink = '';

  const crumbs = location.pathname.split('/')
    .filter( crumb => crumb !== '')
      .map( crumb => {
    
        currentLink += `/${crumb}`;
          
        return (
          <div className={style.ceCrumb} key={crumb}> 
            <Link underline="hover"  href={currentLink}>{crumb}</Link>
          </div>
        )
  })

  return (
    <div className={style.ceBreadcrumb}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
         {crumbs}
      </Breadcrumbs>
    </div>
  )
}

export default BreadCrumbs;


