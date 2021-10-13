import { useEffect } from 'react';

import './App.css';
import { useAppDispatch } from './app/hooks';
import { getProducts, getProductsByCategory } from './features/products/productsSlice';
import  Products from 'features/products/Products';
function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getProducts())
   //dispatch(getProductsByCategory('jewelery')) 
   //eslint-disable-next-line
  }, [dispatch])
  return (
    <div className="App">
      <Products/>
    </div>
  );
}

export default App;
