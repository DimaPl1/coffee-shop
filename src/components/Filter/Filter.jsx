import React, { useEffect, useState } from 'react';
import '../../styles/App.css';
import styles from './Filter.module.css';
import fetchData from '../../service/dataService';
import Buttons from '../UI/Button/Buttons';
import FilterCard from '../UI/Filter-Card/FilterCard';
import MyInput from '../UI/Input/MyInput';


const Filter = () => {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filter, setFilter] = useState('');
  const [initialProducts, setInitialProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setProducts(data.products);
        setInitialProducts(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
        setProducts([]);
        setInitialProducts([]);
      }
    };

    getData();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleFilterButtonClick = (filterValue) => {
    setFilter(filterValue);
  };

  const resetFilterAndSearch = () => {
    setSearchInput('');
    setFilter('');
    setProducts(initialProducts);
  };


  const filteredProducts = products.filter((product) => {
    // Фильтрация по поисковому запросу
    if (searchInput && !product.country.toLowerCase().includes(searchInput.toLowerCase())) {
      return false;
    } 

    // Фильтрация по выбранному фильтру
    if (filter && product.country.toLowerCase() !== filter.toLowerCase()) {
      return false;
    }

    return true;
  });



  return (
    <div className={styles.choosing_coffee}>
      <div className="container">
        <div className={styles.filter_wrapper}>
          <div className={styles.search}>
            <MyInput
              value={searchInput} 
              onChange={handleSearchInputChange}
            />
          </div>
          <div className={styles.filter}>
            <span>Or filter</span>
              <Buttons
                resetFilterAndSearch={resetFilterAndSearch}
                filter={filter} 
                onClick={handleFilterButtonClick}
              />
          </div>
        </div>
        <div className={styles.card_wrapper}>
          {filteredProducts.map((product) => (
            <FilterCard key={product.id} product={product} index={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;