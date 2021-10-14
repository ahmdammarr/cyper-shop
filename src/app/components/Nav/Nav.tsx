import {
  Navbar,
  Container,
  Nav as BootstrapNav,
  NavDropdown
} from 'react-bootstrap'
import Categories from 'features/categories/categories'

function Nav () {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>Cyper Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <BootstrapNav className='me-auto'>
            <NavDropdown title='Filter Categories' id='collasible-nav-dropdown'>
              <Categories/>
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
