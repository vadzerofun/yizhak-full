import React from 'react';
import {Link} from 'react-router-dom';
import './card.css';

function Card(props) {
  const {productId, imgUrl, title, price } = props;

  return (
    <>
      <Link to={`/cart/${productId}`}>
        <div className="mycard">
          <img src={imgUrl} alt='img'/>
          <h6>{title}</h6>
          <h6 className='text-red'>{price}</h6>
          <button>
            <div className="plus-line"></div>
            <div className="plus-line vertical"></div>
          </button>
        </div>
      </Link>
    </>
  );
}

export default Card;
