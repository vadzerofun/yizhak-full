import React, { useEffect } from 'react';
import Layout from '../components/layout/layout';
import style from './cart.module.css';
import Button from '../elements/button';
import { useParams } from 'react-router-dom';
import { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


function Cart(props) {  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const {id} = useParams();

  const [article, setArticle] = useState({});

  useEffect(()=>{
    fetch(`http://127.0.0.1:8000/api/articles/${id}`)
    .then(response=>response.json())
    .then(json => setArticle(json));
  }, []);


  return (
    <>
      <Layout>        
        {/* New */}
        <div className={`cart__container ${style.cart}`}>
          <div className={`${style.cartGallery}`}>
            <Swiper
              style={{
                '--swiper-navigation-color': '#A0C49D',
                '--swiper-pagination-color': '#A0C49D',
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >              
              <SwiperSlide>
                <img src={article.img_url} alt='img'/>
              </SwiperSlide>           
              <SwiperSlide>
                <img src={article.img_url} alt='img'/>
              </SwiperSlide>           
              <SwiperSlide>
                <img src={article.img_url} alt='img'/>
              </SwiperSlide>           
            </Swiper>
          </div>
          <div className={`${style.cartInfo}`}>
            <h4 className='mb-0'>{article.name}</h4>
            <h5 className='mb-0'>{article.price}</h5>
            <Button text='Додати в кошик'/>
            <div className={style.infoLine}></div>
            <h4 className='mb-0'>Опис</h4>
            <p className={`mb-0 ${style.paragraph}`}>{article.description}</p>
            <h6>Країна-виробник: <span className="fw-normal">{article.country}</span></h6>            
          </div>
        </div>
      </Layout>   
    </>
  );
}

export default Cart;