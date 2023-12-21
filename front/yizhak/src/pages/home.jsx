import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Layout from '../components/layout/layout';
import Img from '../elements/img';
import style from './home.module.css';
import '../../node_modules/bootstrap/js/src/carousel';

import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import banner_1 from '../images/banner_1.jpg';
import banner_2 from '../images/banner_2.jpg';
import banner_3 from '../images/banner_3.jpg';
import Card from '../elements/card';


function Home() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/articles')
    .then(response=>response.json())
    .then(json => setArticles(json));

    fetch('http://127.0.0.1:8000/api/categories')
    .then(response=>response.json())
    .then(json => setCategories(json));
  }, []);

  return (
    <>
      <Layout>
        <div className={`home__container ${style.home}`}>
          {/* Banners */}
          <Swiper 
            style={{
              '--swiper-navigation-color': '#A0C49D',
              '--swiper-pagination-color': '#A0C49D',
            }}
            className={style.sampleSwiper}            
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}            
            slidesPerView={1}
            navigation={{ clickable: true }}
            loop={true}                     
          >
            <SwiperSlide>
              <Img src={banner_1} alt="Img"/>
            </SwiperSlide>
            <SwiperSlide>
              <Img src={banner_2} alt="Img"/>
              </SwiperSlide>
            <SwiperSlide>
              <Img src={banner_3} alt="Img"/>
            </SwiperSlide>
          </Swiper>
          
          {
            categories
              .filter(category => articles.find(article=>article.category_id === category.id))
              .map((category, index) => 
              <div key={category.id}>
                <h4>{category.name}</h4>
                <Swiper 
                  style={{
                    '--swiper-navigation-color': '#A0C49D',
                    '--swiper-pagination-color': '#A0C49D',
                  }}
                  className={`${style.sampleSwiper} ${style.productsSlider}`}            
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={30}
                  slidesPerView={5}
                  pagination={{ clickable: true }}
                  navigation={{ clickable: true }}
                  loop={true}                 
                >
                  {
                    articles.filter(value=>value.category_id === category.id).map((value, index)=>
                      <SwiperSlide key={`${category.id}-${value.id}`}>
                        <Card productId={value.id} imgUrl={value.img_url} title={value.name} price={value.price} />
                      </SwiperSlide>               
                    )
                  }           
                </Swiper>    
              </div> 
            )
          }  
            
        </div>
      </Layout>      
    </>
  );
}

export default Home;