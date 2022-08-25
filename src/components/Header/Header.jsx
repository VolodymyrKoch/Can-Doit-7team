import React, { useEffect, useRef } from 'react';

import styles from './Header.module.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import searchIcon from '../../image/icon/vector-search.png';
import menuIcon from '../../image/icon/button-menu.png';
import logoIcon from '../../image/icon/you-прозорий.png';
import btn101Icon from '../../image/icon/button-101.png';
import btn103Icon from '../../image/icon/button-103.png';
import btnDelete from '../../image/icon/X.png';
import PropTypes from 'prop-types';


const Header = function({ setSearchValue }) {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const inputEl = useRef(null);

  useEffect(() => {
    if (transcript && inputEl.current) {
      inputEl.current.value = transcript;
      setSearchValue(transcript);
    }
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn&apos;t support speech recognition.</span>;
  }
  return (
    <>
      <div className={styles.colorBackground}>
        <div className={styles.rectangleTop}>
          <div className={styles.triangle}>
            <div className={styles.topPart}>
              <div className={styles.menu}><img src={menuIcon} alt=""/></div>
              <div className={styles.imageYouCanDoIt}><img src={logoIcon} alt=""/></div>
              <div className={styles.btn101}><img src={btn101Icon} alt=""/></div>
              <div className={styles.btn103}><img src={btn103Icon} alt=""/></div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleBottom}>
          <div className={styles.searchPartHeader}>
            <img className={styles.btnSearch} src={searchIcon}/>
            <input className={styles.inputSearch} type="text" ref={inputEl}
                   onChange={(e) => setSearchValue(e.target.value)}/>
            <img className={styles.btnDelete} src={btnDelete} alt=""/>
            <div className={styles.btnMicrophone}>
              {listening ? <label className="bi bi-mic"
                                  onClick={() => SpeechRecognition.stopListening()}></label>
                :
                <label className="bi bi-mic-mute"
                       onClick={() => SpeechRecognition.startListening()}></label>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  setSearchValue: PropTypes.func,
};

export default Header;
