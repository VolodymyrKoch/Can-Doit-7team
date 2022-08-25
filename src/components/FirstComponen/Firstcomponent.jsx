import React from 'react';
import { Link } from 'react-router-dom';

import './FirstComponen.css';
// import styles from './FirstComponen.css';

const FirstComponent = props => {
  return (
    <>
      <div className="size">
          <Link to="/" >First Component</Link>
      </div>
      {/* <div className={styles.size}>First Componen</div> */}
    </>
  );
};

export default FirstComponent;
