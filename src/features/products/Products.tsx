import { useAppSelector } from '../../app/hooks';
import {selectProducts } from './productsSlice'

export function Products() {
  const products = useAppSelector(selectProducts);
  console.log('products', products)
  
  return (
    <div>

    </div>
  );
}
