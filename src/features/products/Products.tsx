import { useState, useEffect, ReactElement } from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectProducts, selectStatus } from './productsSlice'
import { ProductsStateEnum } from './types'
import ProductCard from './components/ProductCard'
import Loader from 'app/components/Loader/Loader'
import { Badge } from 'react-bootstrap'

export default function Products() {
  const products = useAppSelector(selectProducts)
  const status = useAppSelector(selectStatus)
  const [_ProductsState, setProductsState] = useState<ProductsStateEnum>(
    'loading'
  )
  useEffect(() => {
    if (status === 'loading') {
      setProductsState('loading')
    } else if (status === 'failed') {
      setProductsState('failed')
    } else {
      setProductsState('done')
    }
  }, [status])

  const ProductsState: { [key in ProductsStateEnum]: ReactElement } = {
    loading: <Loader width={150} />,
    failed: (
      <div className='col-6 offset-3'>
        {' '}
        <h2>
          <Badge bg='danger'>Somethig Went Wrong</Badge>
        </h2>
      </div>
    ),
    done: (
      <>
        {' '}
        {products?.map(
          ({ id, title, image, description, category, price }, _) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              description={description}
              category={category}
              price={price}
              image={image}
            />
          )
        )}
      </>
    )
  }

  return <div className='row p-2'>{ProductsState[_ProductsState]}</div>
}
