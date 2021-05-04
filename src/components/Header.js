import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
    return (
        // <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link className = "myName" to= "/">Kevin Rayo Meza</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                    <Link id = "contact"className = "myProjects" to= "/contact">Contact</Link>
                    <Link className = "myProjects" to= "/projects">Projects</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        // </div>
    )
}

export default Header
