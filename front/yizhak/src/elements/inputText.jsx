import React from 'react';
import style from './inputText.module.css';

function InputText(props) {
  const {placeholder} = props;

  return (
    <>
      <input className={style.customInput} type="text" placeholder={placeholder} />
    </>
  );
}

export default InputText;