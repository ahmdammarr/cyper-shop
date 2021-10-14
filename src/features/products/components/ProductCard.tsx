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
      <Card 
     // className="col-3 p-2"
      style={{  height: '28rem' }}>
        <Card.Img style={{ height: '40%' }} variant='top' src={image} />
        <Card.Body>
          <Card.Title  style={{ height: '20%' }}>
            {truncateText(title, 30)}
            {title.length > 20 ? '...' : null}
          </Card.Title>
          <Card.Text style={{ height: '30%' }}>
            {truncateText(description, 60)}
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
