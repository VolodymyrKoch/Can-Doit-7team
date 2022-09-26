import React from 'react';
import style from './Emergency.module.css';

const ReadMoreDetail = ({ element }) => {
  var decodeHTML = function (html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div className={style.textItemReadMore}>{decodeHTML(element.detail)}</div>
  );
};

export default ReadMoreDetail;
