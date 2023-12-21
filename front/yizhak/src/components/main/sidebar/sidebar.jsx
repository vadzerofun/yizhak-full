import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import style from './sidebar.module.css';

function Sidebar(props) {
  const {countries, categories, onCountryChange, prices, onPriceChange} = props;

  // New
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  
  const handleCountryChange = (country) => {
    const updatedCountries = selectedCountries.includes(country)
      ? selectedCountries.filter((c) => c !== country)
      : [...selectedCountries, country];

    setSelectedCountries(updatedCountries);
    onCountryChange(updatedCountries);
  };    
  
  const handlePriceChange = (price) => {
    const updatedPrices = selectedPrices.includes(price)
      ? selectedPrices.filter((c) => c !== price)
      : [...selectedPrices, price];

    setSelectedPrices(updatedPrices);
    onPriceChange(updatedPrices);
  };

  return (
    <div className={style.sidebar}>
      <ul className={style.sidebarCategories}> 
        {
          categories.map((category, index)=>
            <li key={index}>
              <NavLink to={`/categories/${category.id}`} className={(navData) => navData.isActive ? style.categorySelected : style.category}>
                {category.name}
              </NavLink>
            </li>
          )
        } 
      </ul>
      <div className={style.filtersGroup + " mb-3"}>
        <h6>Країна-виробник</h6>
        { countries.map((country, index) =>
          <div className="form-check" key={`country_${index}`}>
            <input 
              className="form-check-input" 
              type="checkbox" 
              value="" 
              id={`flexCheckDefault_${index}`}
              checked={selectedCountries.includes(country)}
              onChange={() => handleCountryChange(country)}
            />
            <label className="form-check-label" htmlFor={`flexCheckDefault_${index}`}>
              {country}
            </label>
          </div>  
        )}         
      </div>
      <div className={style.filtersGroup}>
        <h6>Ціна</h6>
        { prices.map((price, index) =>
          <div className="form-check" key={`price_${index}`}>
            <input 
              className="form-check-input" 
              type="checkbox" 
              value="" 
              id={`flexCheckPrice_${index}`}
              checked={selectedPrices.includes(price)}
              onChange={() => handlePriceChange(price)}
            />
            <label className="form-check-label" htmlFor={`flexCheckPrice_${index}`}>
              {price}
            </label>
          </div>  
        )}         
      </div>
           
    </div>
  );
}

export default Sidebar;