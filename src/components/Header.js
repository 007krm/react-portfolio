import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className = "myName" href="#home">Kevin Rayo Meza</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    {/* <Nav.Link href="#features">Features</Nav.Link> */}
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown"> */}
                        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    {/* </NavDropdown> */}
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">Projects</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Contact
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
