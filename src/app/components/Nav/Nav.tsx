import { Navbar, Container, Nav as _Nav, NavDropdown } from 'react-bootstrap'

function Nav() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Cyper Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <_Nav className="me-auto">
                        <NavDropdown title="Filter Categories" id="collasible-nav-dropdown">
                            <NavDropdown.Item>Cat 1</NavDropdown.Item>
                            <NavDropdown.Item>Cat 2</NavDropdown.Item>
                            <NavDropdown.Item>Cat 3</NavDropdown.Item>
                        </NavDropdown>
                    </_Nav>
                    <_Nav>
                        <_Nav.Link>Cart</_Nav.Link>

                    </_Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Nav
