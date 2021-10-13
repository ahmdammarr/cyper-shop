import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'
import { Product } from '../types'

const truncateText = (text: string, limit: number) =>
  text.split('').slice(0, limit)

function ProductCard ({
  id,
  title,
  price,
  category,
  description,
  image
}: Product) {
  return (
    <div className='col-3 p-2'>
      <Card style={{ width: '22rem', height: '28rem' }}>
        <Card.Img style={{ height: '40%' }} variant='top' src={image} />
        <Card.Body>
          <Card.Title>
            {truncateText(title, 20)}
            {title.length > 20 ? '...' : null}
          </Card.Title>
          <Card.Text>
            {truncateText(description, 40)}
            {description.length > 40 ? '...' : null}
          </Card.Text>
          <Card.Text>
            <Badge bg='secondary'>{category}</Badge>
            <h5>{price} EGP</h5>
          </Card.Text>

          <Button variant='primary'>Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductCard
