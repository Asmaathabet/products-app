import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function Header() {
    return (
        <header className="mb-4 pb-3">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Unfoldr</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="/all-products" >Products</Nav.Link>
                        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                        </Nav> 
                    </Container>
                </Navbar>
        </header>
    )
}
