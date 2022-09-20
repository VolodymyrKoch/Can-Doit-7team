import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.css';
import logoIcon from '../../image/icon/you-прозорий.png';

const Logo = function () {
  return (
    <>
      <div className={styles.colorBackground}>
        <div className={styles.rectangleTop}>
          <div className={styles.triangle}>
            <div className={styles.topPart}>
              <Link to="/">
                <div className={styles.imageYouCanDoIt}>
                  <img src={logoIcon} alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.rectangleBottom}></div>
      </div>
    </>
  );
};
export default Logo;
