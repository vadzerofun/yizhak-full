import React from 'react';
import style from './formButton.module.css';

function FormButton(props) {
  return (
    <>
      <button className={style.formButton} type='submit'>{props.children}</button>
    </>
  );
}

export default FormButton;