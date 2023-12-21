import React from 'react';
import './button.css';

function Button(props) {
  const {text} = props;

  return (
    <>
      <button className="btn btn-success">{text}</button>
    </>
  );
}

export default Button;