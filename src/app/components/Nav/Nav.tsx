import { useEffect, useState, ReactElement } from 'react'
import { ProductsStateEnum } from 'features/products/types'
import {
  Navbar,
  Container,
  Nav as BootstrapNav,
  NavDropdown
} from 'react-bootstrap'
import { useProducts } from 'features/products/hooks'
import Loader from '../Loader'
import { Badge } from 'react-bootstrap'
import { useAppDispatch } from 'app/reduxHooks'
import { getProductsByCategory } from 'features/products/productsSlice'

function Nav () {
  const { state, products } = useProducts()
  const [_State, setState] = useState<ProductsStateEnum>('loading')
  const dispatch = useAppDispatch()
  const [Categories, setCategories] = useState<string[]>([])
  const [SelectedCategory, setSelectedCategory] = useState('')
  useEffect(() => {
    if (SelectedCategory) {
      dispatch(getProductsByCategory(SelectedCategory))
    }
  }, [SelectedCategory, dispatch])
  useEffect(() => {
    if (state === 'loading') {
      setState('loading')
    } else if (state === 'failed') {
      setState('failed')
    } else {
      setState('done')
      setCategories(() =>
        Array.from(new Set([...products.map(products => products.category)]))
      )
    }
  }, [state, products])
  const CategoriesState: { [key in ProductsStateEnum]: ReactElement } = {
    loading: <Loader width={50} />,
    failed: (
      <div className='col-6 offset-3'>
        {' '}
        <h6>
          <Badge bg='danger'>Loading Categories Failed</Badge>
        </h6>
      </div>
    ),
    done: (
      <>
        <>
          {Categories?.map(category => (
            <NavDropdown.Item onClick={() => setSelectedCategory(category)}>
              {category}
            </NavDropdown.Item>
          ))}
        </>
      </>
    )
  }

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>Cyper Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <BootstrapNav className='me-auto'>
            <NavDropdown title='Filter Categories' id='collasible-nav-dropdown'>
              {CategoriesState[_State]}
            </NavDropdown>
          </BootstrapNav>
          <BootstrapNav>
            <BootstrapNav.Link>Cart</BootstrapNav.Link>
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nav
