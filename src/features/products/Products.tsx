import { useAppSelector } from '../../app/hooks';
import {selectProducts } from './productsSlice'

export function Counter() {
  const products = useAppSelector(selectProducts);
  console.log('products', products)
  
  return (
    <div>

    </div>
  );
}
