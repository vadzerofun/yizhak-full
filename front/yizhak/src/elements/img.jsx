import React from 'react';
import style from './img.module.css';

function Img(props) {
  const {src, alt} = props;

  return (
    <>
      <img src={src} alt={alt} className={style.image}/>
    </>
  );
}

export default Img;