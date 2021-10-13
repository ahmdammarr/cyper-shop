import { useEffect } from 'react';

import './App.css';
import { useAppDispatch } from './app/hooks';
import { getProducts } from './features/products/productsSlice';
import  Products from 'features/products/Products';
function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getProducts())
    //eslint-disable-next-line
  }, [])
  return (
    <div className="App">
      <Products/>
    </div>
  );
}

export default App;
