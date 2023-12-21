import React from 'react';
import style from './formTextarea.module.css';

function FormTextarea(props) {
  const {placeholder} = props;

  return (
    <>
      <textarea className={style.formTextarea} rows={4} placeholder={placeholder}></textarea>
    </>
  );
}

export default FormTextarea;