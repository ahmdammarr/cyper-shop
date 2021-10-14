import { useEffect } from 'react';

import './App.css';
import { useAppDispatch } from './app/hooks';
import { getProducts, getProductsByCategory } from './features/products/productsSlice';
import  Products from 'features/products/Products';
import Nav from 'app/components/Nav';
function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getProducts())
   //dispatch(getProductsByCategory('jewelery')) 
   //eslint-disable-next-line
  }, [dispatch])
  return (
    <div className="App">
      <Nav/>
      <Products/>
    </div>
  );
}

export default App;
