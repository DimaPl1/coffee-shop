import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import House from './pages/House/House'
import OurCoffee from './pages/OurCoffee/OurCoffee'
import ProductDetails from './components/ProductDetails/ProductDetails'
import fetchData from './service/dataService'
import '/src/styles/App.css'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setProducts(data.products);

      } catch (error) {
        console.error('Error fetching data:', error);
        setProducts([]);

      }
    };

    getData();
  }, []);


  return (
    <Routes>
      <Route exact path='/' element={<House/>} />
      <Route path='/our-coffee' element={<OurCoffee/>}/>
      <Route path='/our-coffee/:id' element={<ProductDetails products={products}/>} />
    </Routes>
  )
}

export default App
