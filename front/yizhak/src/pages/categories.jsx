import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/layout';
import style from './categories.module.css';
import Sidebar from '../components/main/sidebar/sidebar';
import { useParams } from 'react-router-dom';
import Card from '../elements/card';

import PRICES from '../arrays/prices';

function Categories() { 
  const { id:categoryId } = useParams();

  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]); 

  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  
  const [prices, setPrices] = useState(PRICES);
  const [selectedPrices, setSelectedPrices] = useState([]);

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/categories')
    .then(response=>response.json())
    .then(json => setCategories(json));

    fetch('http://127.0.0.1:8000/api/articles')
    .then(response=>response.json())
    .then(json => {
      setArticles(json);
      let uniqueCountries = json.map(article=>article.country).filter((value, index, array) => array.indexOf(value) === index);
      setCountries(uniqueCountries);
    });
  }, []);

  const handleCountryChange = (selectedCountries) => {
    setSelectedCountries(selectedCountries);
  };
  const handlePriceChange = (selectedPrices) => {
    setSelectedPrices(selectedPrices);
  };
  const isAppropriatePrice = (price) => {
    price = price.match(/\d+/)[0];

    for (const selectedPrice of selectedPrices) {
      if (prices.indexOf(selectedPrice) === 0 && price < 50) return true;
      if (prices.indexOf(selectedPrice) === 1 && price >= 50 && price <= 100) return true;
      if (prices.indexOf(selectedPrice) === 2 && price > 100) return true;
    }

    return false;
  };

  return (
    <>
      <Layout>        
        <div className={`categories__container ${style.categories}`}>
          <Sidebar 
            categories={categories} 
            countries={countries} onCountryChange={handleCountryChange}
            prices={prices} onPriceChange={handlePriceChange}
          />
          <div className={style.categoriesProducts}>
            {
              articles
                .filter((value) => 
                  (value.category_id == categoryId || (!categoryId && value.category_id != 1)) && 
                  (!selectedCountries.length || selectedCountries.includes(value.country)) &&
                  (!selectedPrices.length || isAppropriatePrice(value.price)))
                .map((article, index)=>
                <div key={index}>
                  <Card productId={article.id} imgUrl={article.img_url} title={article.name} price={article.price} />
                </div>                
              )
            } 
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Categories;